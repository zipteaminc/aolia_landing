import daichiYoshikawaPortrait from "@/assets/team/daichi-yoshikawa.png";
import daisukeNishimuraPortrait from "@/assets/team/daisuke-nishimura.png";
import dolmaRawatPortrait from "@/assets/team/dolma-rawat.png";
import jerelynCoPortrait from "@/assets/team/jerelyn-co.png";
import teamLine from "@/assets/illustrations/team-line.svg";
import yukiBabaPortrait from "@/assets/team/yuki-baba.png";

import { useRef, useEffect, useState } from "react";

/**
 * TeamSection — "Who is behind this."
 * Figma spec:
 * - Margin-top 122px from quote container bottom
 * - Margin-left 68px, H2 with period
 * - Line SVG: width 362px, height 11px, margin-left 68px, margin-top 6px (from H2)
 * - Supporting text: max-width 638px, below the line (margin-top 20px)
 * - 62px gap between supporting text and team cards
 * - Card dimensions: exactly 376×426px
 * - Card layout: 68px left AND right margin, equal gaps between cards
 * - Vertical gap between rows = horizontal gap between cards
 * - Per-card illustration sizes and spacing from Figma spec
 * - LinkedIn: DM Sans Semibold 14px
 * - 136px below team cards → divider line → 71px → "From the field." title
 */

interface TeamMember {
  name: string;
  role: string;
  description: string;
  linkedinUrl: string;
  portraitSrc: string;
  portraitAlt: string;
  portraitWidth: number;
  portraitHeight: number;
  marginTopToPortrait: number;
  marginPortraitToName: number;
}

const teamMembers: TeamMember[] = [
  {
    name: "Daisuke Nishimura",
    role: "Co-Founder & Managing Director",
    description: "Leading product strategy for AI-native assessment at Aolia.",
    linkedinUrl: "https://www.linkedin.com/in/daisuke-nishimura-9583055b/",
    portraitSrc: daisukeNishimuraPortrait,
    portraitAlt: "Daisuke Nishimura portrait illustration",
    portraitWidth: 164,
    portraitHeight: 151,
    marginTopToPortrait: 38,
    marginPortraitToName: 38,
  },
  {
    name: "Daichi Yoshikawa",
    role: "Chief Engineer & Product Engineering Lead",
    description: "Leading end-to-end development of Aolia.",
    linkedinUrl:
      "https://www.linkedin.com/in/daichi-yoshikawa-profile/?skipRedirect=true",
    portraitSrc: daichiYoshikawaPortrait,
    portraitAlt: "Daichi Yoshikawa portrait illustration",
    portraitWidth: 179,
    portraitHeight: 171,
    marginTopToPortrait: 38,
    marginPortraitToName: 18,
  },
  {
    name: "Yuki Baba",
    role: "DevOps Engineer",
    description: "Web application infrastructure development.",
    linkedinUrl: "https://www.linkedin.com/in/yuki-baba-6bba0a20a/",
    portraitSrc: yukiBabaPortrait,
    portraitAlt: "Yuki Baba portrait illustration",
    portraitWidth: 196,
    portraitHeight: 171,
    marginTopToPortrait: 38,
    marginPortraitToName: 18,
  },
  {
    name: "Dolma Rawat",
    role: "Go to Market & Research Lead",
    description: "Lead product and customer research for Aolia.",
    linkedinUrl: "https://www.linkedin.com/in/dolmarawat/",
    portraitSrc: dolmaRawatPortrait,
    portraitAlt: "Dolma Rawat portrait illustration",
    portraitWidth: 198,
    portraitHeight: 162,
    marginTopToPortrait: 38,
    marginPortraitToName: 27,
  },
  {
    name: "Jerelyn Co",
    role: "AI Technical Lead",
    description: "Leads the technical strategy of the AI team.",
    linkedinUrl: "https://www.linkedin.com/in/jerelyn-co",
    portraitSrc: jerelynCoPortrait,
    portraitAlt: "Jerelyn Co portrait illustration",
    portraitWidth: 153,
    portraitHeight: 162,
    marginTopToPortrait: 38,
    marginPortraitToName: 27,
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="flex flex-col items-center text-center"
      style={{
        backgroundColor: "#B5A898",
        borderRadius: "16px",
        width: "376px",
        minWidth: "376px",
        height: "426px",
        padding: "0 24px",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Portrait */}
      <div
        className="flex items-end justify-center"
        style={{
          width: `${member.portraitWidth}px`,
          height: `${member.portraitHeight}px`,
          marginTop: `${member.marginTopToPortrait}px`,
          flexShrink: 0,
          maxWidth: "100%",
        }}
      >
        <img
          src={member.portraitSrc}
          alt={member.portraitAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-body font-medium text-[#3E3A36]"
        style={{
          fontSize: "18px",
          lineHeight: "24px",
          marginTop: `${member.marginPortraitToName}px`,
        }}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p
        className="font-body font-light text-[#3E3A36]"
        style={{ fontSize: "14px", lineHeight: "20px", marginTop: "4px" }}
      >
        {member.role}
      </p>

      {/* Description */}
      <p
        className="font-body font-normal text-[#3E3A36]"
        style={{
          fontSize: "15px",
          lineHeight: "22px",
          maxWidth: "285px",
          marginTop: "13px",
        }}
      >
        {member.description}
      </p>

      {/* LinkedIn — DM Sans Semibold 14px */}
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-[#3E3A36] hover:opacity-60 transition-opacity"
        style={{
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "underline",
          marginTop: "22px",
        }}
        aria-label={`${member.name} on LinkedIn`}
      >
        Linkedin
      </a>
    </article>
  );
}

export default function TeamSection() {
  // rowGap is dynamically computed to match the space-between column gap
  const gridRef = useRef<HTMLDivElement>(null);
  const [rowGap, setRowGap] = useState(28);

  useEffect(() => {
    function syncRowGap() {
      const grid = gridRef.current;
      if (!grid) return;
      const containerWidth = grid.clientWidth;
      // grid div has paddingLeft + paddingRight = 68 + 68 = 136px
      // Available inner width = containerWidth - 136
      // space-between distributes (innerWidth - 3 * 376px) / 2 as each column gap
      const innerWidth = containerWidth - 136;
      const gap = Math.max(0, (innerWidth - 3 * 376) / 2);
      setRowGap(gap);
    }
    syncRowGap();
    const observer = new ResizeObserver(syncRowGap);
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F2EDE4]" style={{ paddingTop: "122px" }}>
      {/* Header area */}
      <div style={{ paddingLeft: "68px", paddingRight: "68px" }}>
        {/* H2 heading */}
        <h2
          className="font-body font-bold text-[#3E3A36]"
          style={{ fontSize: "clamp(1.6rem, 3.2vw, 41px)", lineHeight: 1.15 }}
        >
          Who is behind this.
        </h2>

        {/* Decorative line SVG — 362×11px, margin-top 6px from H2 */}
        <div style={{ marginTop: "6px" }}>
          <img
            src={teamLine}
            alt=""
            aria-hidden="true"
            style={{
              width: "362px",
              height: "11px",
              display: "block",
              maxWidth: "100%",
            }}
          />
        </div>

        {/* Supporting text — margin-top 20px below line */}
        <p
          className="font-body font-normal text-[#3E3A36]"
          style={{
            fontSize: "19px",
            lineHeight: "25px",
            maxWidth: "638px",
            marginTop: "20px",
          }}
        >
          We&rsquo;re a team exploring how assessment for accreditation can work
          better &mdash; alongside educators.
        </p>
      </div>

      {/* Team cards — 68px outer margins, fixed 376px columns, gaps auto-distributed via space-between */}
      {/* rowGap is dynamically synced to the computed column gap via ResizeObserver */}
      <div
        ref={gridRef}
        style={{
          paddingLeft: "68px",
          paddingRight: "68px",
          marginTop: "62px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 376px)",
          justifyContent: "space-between",
          rowGap: `${rowGap}px`,
        }}
      >
        {/* Row 1: Daisuke, Daichi, Yuki */}
        {teamMembers.slice(0, 3).map(member => (
          <TeamCard key={member.name} member={member} />
        ))}
        {/* Row 2: Dolma, Jerelyn + invisible spacer so columns stay aligned */}
        <TeamCard member={teamMembers[3]} />
        <TeamCard member={teamMembers[4]} />
        <div
          aria-hidden="true"
          style={{ width: "376px", height: "426px", visibility: "hidden" }}
        />
      </div>
    </section>
  );
}
