import { Router } from "express";

const router = Router();

interface FeedPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string | null;
}

function extractText(xml: string, tag: string): string {
  const cdataRe = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i");
  const plainRe = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const cdataMatch = xml.match(cdataRe);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = xml.match(plainRe);
  if (plainMatch) return plainMatch[1].trim();
  return "";
}

function extractThumbnail(itemXml: string): string | null {
  // Try <media:content url="...">
  const mediaContent = itemXml.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  if (mediaContent) return mediaContent[1];

  // Try <media:thumbnail url="...">
  const mediaThumbnail = itemXml.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
  if (mediaThumbnail) return mediaThumbnail[1];

  // Try <enclosure url="..." type="image/...">
  const enclosure = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]+type=["']image[^"']*["']/i);
  if (enclosure) return enclosure[1];

  // Try first <img src="..."> inside description
  const desc = extractText(itemXml, "description");
  const imgMatch = desc.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch) return imgMatch[1];

  return null;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').trim();
}

function parseItems(xml: string, count: number): FeedPost[] {
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  const posts: FeedPost[] = [];
  let match: RegExpExecArray | null;

  while ((match = itemRe.exec(xml)) !== null && posts.length < count) {
    const itemXml = match[1];
    const title = stripHtml(extractText(itemXml, "title"));
    const link = extractText(itemXml, "link") || extractText(itemXml, "guid");
    const pubDate = extractText(itemXml, "pubDate");
    const rawDesc = extractText(itemXml, "description");
    const description = stripHtml(rawDesc).slice(0, 200).trim();
    const thumbnail = extractThumbnail(itemXml);

    if (title && link) {
      posts.push({ title, link, pubDate, description, thumbnail });
    }
  }

  return posts;
}

router.get("/api/feed", async (_req, res) => {
  try {
    const feedUrl = "https://blog.aolia.ai/feed";
    const response = await fetch(feedUrl, {
      headers: {
        "User-Agent": "Aolia-Landing/1.0 (RSS Reader)",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      res.status(502).json({ error: `Feed returned ${response.status}` });
      return;
    }

    const xml = await response.text();
    const posts = parseItems(xml, 3);

    res.setHeader("Cache-Control", "public, max-age=300, stale-while-revalidate=60");
    res.json({ posts });
  } catch (err) {
    console.error("[feedProxy] Error fetching RSS feed:", err);
    res.status(502).json({ error: "Failed to fetch feed" });
  }
});

export default router;
