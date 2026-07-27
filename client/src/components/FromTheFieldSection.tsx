/**
 * FromTheFieldSection — "From the field."
 * Figma spec:
 * - 136px below team cards → divider line (#B5A898, 1px, full width with 68px margins)
 * - 71px below divider → H2 "From the field."
 * - Margin-left 68px, H2 DM Sans Bold 41px, with period
 * - "All Posts": DM Sans Semibold 14px, margin-right 68px
 * - Three blog post cards fetched live from /api/feed (blog.aolia.ai RSS)
 * - 170px bottom margin before dark footer
 *
 * Card spacing matches TeamSection exactly:
 * - Fixed 376px card width
 * - Horizontal gap computed dynamically via ResizeObserver = (containerWidth - 136 - 3×376) / 2
 * - 62px gap between heading row and cards
 */

import { useEffect, useRef, useState } from 'react';

interface FeedPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string | null;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

function PostCard({ post }: { post: FeedPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '376px',
        minWidth: '376px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {/* Image — standalone rounded element, no white card */}
      <div
        style={{
          width: '100%',
          height: '260px',
          borderRadius: '16px',
          backgroundColor: '#D8D3CC',
          overflow: 'hidden',
          flexShrink: 0,
          marginBottom: '20px',
          transition: 'transform 180ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
      >
        {post.thumbnail ? (
          <img
            src={post.thumbnail}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        ) : null}
      </div>

      {/* Text — directly on beige background, no padding wrapper */}
      {post.pubDate && (
        <p
          className="font-body text-[#3E3A36]"
          style={{ fontSize: '14px', fontWeight: 300, marginBottom: '10px' }}
        >
          {formatDate(post.pubDate)}
        </p>
      )}
      <h3
        className="font-body text-[#3E3A36]"
        style={{
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: 1.3,
          marginBottom: '12px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {post.title}
      </h3>
      <div
        className="font-body font-semibold text-[#3E3A36]"
        style={{
          fontSize: '14px',
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
        }}
      >
        Read more
      </div>
    </a>
  );
}

function SkeletonCard() {
  return (
    <div
      className="rounded-2xl bg-white overflow-hidden"
      style={{ width: '376px', minWidth: '376px' }}
    >
      <div style={{ height: '220px', backgroundColor: '#EDE8DF' }} className="animate-pulse" />
      <div style={{ padding: '28px 28px 32px' }}>
        <div className="animate-pulse" style={{ height: '14px', width: '100px', backgroundColor: '#EDE8DF', borderRadius: '4px', marginBottom: '12px' }} />
        <div className="animate-pulse" style={{ height: '18px', width: '80%', backgroundColor: '#EDE8DF', borderRadius: '4px', marginBottom: '10px' }} />
        <div className="animate-pulse" style={{ height: '18px', width: '60%', backgroundColor: '#EDE8DF', borderRadius: '4px', marginBottom: '20px' }} />
        <div className="animate-pulse" style={{ height: '14px', width: '80px', backgroundColor: '#EDE8DF', borderRadius: '4px' }} />
      </div>
    </div>
  );
}

export default function FromTheFieldSection() {
  const [posts, setPosts] = useState<FeedPost[] | null>(null);
  const [error, setError] = useState(false);

  // Dynamic column gap — same ResizeObserver system as TeamSection
  const gridRef = useRef<HTMLDivElement>(null);
  const [colGap, setColGap] = useState(28);

  useEffect(() => {
    function syncGap() {
      const grid = gridRef.current;
      if (!grid) return;
      const containerWidth = grid.clientWidth;
      const gap = Math.max(0, Math.round((containerWidth - 136 - 3 * 376) / 2));
      setColGap(gap);
    }
    syncGap();
    const observer = new ResizeObserver(syncGap);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('/api/feed')
      .then(r => r.json())
      .then(data => {
        const items = data.items ?? data.posts;
        if (Array.isArray(items)) {
          setPosts(items.map((p: any) => ({
            title: p.title,
            link: p.link,
            pubDate: p.pubDate,
            thumbnail: p.thumbnail ?? p.imageUrl ?? null,
          })));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  const showPlaceholders = posts === null || error;
  const showEmpty = !showPlaceholders && posts!.length === 0;

  return (
    <section className="w-full bg-[#F2EDE4]">
      {/* 136px spacer after team cards */}
      <div style={{ height: '136px' }} />

      {/* Divider line — #B5A898, 1px, 68px horizontal margins */}
      <div
        style={{
          marginLeft: '68px',
          marginRight: '68px',
          height: '1px',
          backgroundColor: '#B5A898',
        }}
        role="separator"
        aria-hidden="true"
      />

      {/* Section header — 71px below divider */}
      <div
        className="flex items-baseline justify-between"
        style={{
          paddingLeft: '68px',
          paddingRight: '68px',
          marginTop: '71px',
        }}
      >
        <h2
          className="font-body font-bold text-[#3E3A36]"
          style={{ fontSize: 'clamp(1.6rem, 3.2vw, 41px)', lineHeight: 1.15 }}
        >
          From the field.
        </h2>
        <a
          href="https://blog.aolia.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-semibold text-[#3E3A36] underline underline-offset-4 hover:opacity-70 transition-opacity flex-shrink-0 ml-6"
          style={{ fontSize: '14px' }}
          aria-label="All Posts on blog.aolia.ai"
        >
          All Posts
        </a>
      </div>

      {/* Post cards grid — same spacing system as TeamSection */}
      <div
        ref={gridRef}
        style={{
          paddingLeft: '68px',
          paddingRight: '68px',
          marginTop: '62px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 376px)',
          columnGap: `${colGap}px`,
          rowGap: `${colGap}px`,
        }}
      >
        {showPlaceholders ? (
          [1, 2, 3].map(i =>
            posts === null ? (
              <SkeletonCard key={i} />
            ) : (
              <div
                key={i}
                className="rounded-2xl bg-white"
                style={{ width: '376px', minWidth: '376px' }}
              />
            )
          )
        ) : showEmpty ? (
          [1, 2, 3].map(i => (
            <div
              key={i}
              className="rounded-2xl bg-white"
              style={{ width: '376px', minWidth: '376px' }}
            />
          ))
        ) : (
          posts!.map((post, i) => <PostCard key={i} post={post} />)
        )}
      </div>

      {/* 170px bottom margin before dark footer */}
      <div style={{ height: '170px' }} />
    </section>
  );
}
