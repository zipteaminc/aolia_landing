import { useRef, useEffect, useState } from 'react';

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
 *   → row-gap: calc((100% - 2 * 68px - 3 * 376px) / 2)
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
    name: 'Daisuke Nishimura',
    role: 'Co-Founder & Managing Director',
    description: 'Leading product strategy for AI-native assessment at Aolia.',
    linkedinUrl: 'https://www.linkedin.com/in/daisuke-nishimura-9583055b/',
    portraitSrc: '/manus-storage/DaisukeNishimura_7385c8d0.webp',
    portraitAlt: 'Daisuke Nishimura portrait illustration',
    portraitWidth: 164,
    portraitHeight: 151,
    marginTopToPortrait: 38,
    marginPortraitToName: 38,
  },
  {
    name: 'Daichi Yoshikawa',
    role: 'Chief Engineer & Product Engineering Lead',
    description: 'Leading end-to-end development of Aolia.',
    linkedinUrl: 'https://www.linkedin.com/in/daichi-yoshikawa-profile/?skipRedirect=true',
    portraitSrc: '/manus-storage/DaichiYoshikawa_70911347.webp',
    portraitAlt: 'Daichi Yoshikawa portrait illustration',
    portraitWidth: 173.57,
    portraitHeight: 156,
    marginTopToPortrait: 38,
    marginPortraitToName: 33,
  },
  {
    name: 'Yuki Baba',
    role: 'DevOps Engineer',
    description: 'Web application infrastructure development.',
    linkedinUrl: 'https://www.linkedin.com/in/yuki-baba-6bba0a20a/',
    portraitSrc: '/manus-storage/YukiBaba_77b7df4d.webp',
    portraitAlt: 'Yuki Baba portrait illustration',
    portraitWidth: 168.16,
    portraitHeight: 160,
    marginTopToPortrait: 38,
    marginPortraitToName: 29,
  },
  {
    name: 'Dolma Rawat',
    role: 'Go to Market & Research Lead',
    description: 'Lead product and customer research for Aolia.',
    linkedinUrl: 'https://www.linkedin.com/in/dolmarawat/',
    portraitSrc: '/manus-storage/DolmaRawat_56450563.webp',
    portraitAlt: 'Dolma Rawat portrait illustration',
    portraitWidth: 171.66,
    portraitHeight: 161.98,
    marginTopToPortrait: 38,
    marginPortraitToName: 27,
  },
  {
    name: 'Jerelyn Co',
    role: 'AI Technical Lead',
    description: 'Leads the technical strategy of the AI team.',
    linkedinUrl: 'https://www.linkedin.com/in/jerelyn-co',
    portraitSrc: '/manus-storage/JerelynCo_2a633a15.webp',
    portraitAlt: 'Jerelyn Co portrait illustration',
    portraitWidth: 153.1,
    portraitHeight: 162,
    marginTopToPortrait: 38,
    marginPortraitToName: 27,
  },
  {
    name: 'Karyna Shkoda',
    role: 'Marketing Specialist',
    description: 'Focused on content and marketing strategy.',
    linkedinUrl: 'https://www.linkedin.com/in/karyna-shkoda/',
    portraitSrc: '/manus-storage/KarynaShkoda_5baa21a0.webp',
    portraitAlt: 'Karyna Shkoda portrait illustration',
    portraitWidth: 175.23,
    portraitHeight: 160,
    marginTopToPortrait: 38,
    marginPortraitToName: 29,
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="flex flex-col items-center text-center group"
      style={{
        backgroundColor: '#B5A898',
        borderRadius: '16px',
        width: '376px',
        minWidth: '376px',
        height: '426px',
        padding: '0 24px',
        overflow: 'hidden',
        flexShrink: 0,
        transition: 'transform 220ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 220ms cubic-bezier(0.23, 1, 0.32, 1)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(62,58,54,0.14), 0 4px 12px rgba(62,58,54,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
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
          maxWidth: '100%',
        }}
      >
        <img
          src={member.portraitSrc}
          alt={member.portraitAlt}
          className="group-hover:scale-105"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
            transition: 'transform 280ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        />
      </div>

      {/* Name */}
      <h3
        className="font-body font-medium text-[#3E3A36]"
        style={{
          fontSize: '18px',
          lineHeight: '24px',
          marginTop: `${member.marginPortraitToName}px`,
        }}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p
        className="font-body font-light text-[#3E3A36]"
        style={{ fontSize: '14px', lineHeight: '20px', marginTop: '4px' }}
      >
        {member.role}
      </p>

      {/* Description */}
      <p
        className="font-body font-normal text-[#3E3A36]"
        style={{
          fontSize: '15px',
          lineHeight: '22px',
          maxWidth: '285px',
          marginTop: '13px',
        }}
      >
        {member.description}
      </p>

      {/* LinkedIn — DM Sans Semibold 14px */}
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-[#3E3A36]"
        style={{
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'underline',
          marginTop: '22px',
          opacity: 0.55,
          transition: 'opacity 180ms ease-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
        aria-label={`${member.name} on LinkedIn`}
      >
        Linkedin
      </a>
    </article>
  );
}

export default function TeamSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [rowGap, setRowGap] = useState(0);

  useEffect(() => {
    function syncRowGap() {
      const grid = gridRef.current;
      if (!grid) return;
      // containerWidth includes the 68px left + 68px right padding
      const containerWidth = grid.clientWidth;
      const innerWidth = containerWidth - 136; // subtract both paddings
      const gap = Math.max(0, (innerWidth - 3 * 376) / 2);
      setRowGap(gap);
    }
    syncRowGap();
    const ro = new ResizeObserver(syncRowGap);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F2EDE4]" style={{ paddingTop: '122px' }}>
      {/* Header area */}
      <div style={{ paddingLeft: '68px', paddingRight: '68px' }}>
        {/* H2 heading */}
        <h2
          className="font-body font-bold text-[#3E3A36]"
          style={{ fontSize: 'clamp(1.6rem, 3.2vw, 41px)', lineHeight: 1.15 }}
        >
          Who is behind this.
        </h2>

        {/* Decorative line SVG — 362×11px, margin-top 6px from H2, shifted 3px left */}
        <div style={{ marginTop: '6px', marginLeft: '-3px' }}>
          <img
            src="/manus-storage/line_40359aaf.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: '362px',
              height: '11px',
              display: 'block',
              maxWidth: '100%',
            }}
          />
        </div>

        {/* Supporting text — margin-top 20px below line */}
        <p
          className="font-body font-normal text-[#3E3A36]"
          style={{
            fontSize: '19px',
            lineHeight: '25px',
            maxWidth: '638px',
            marginTop: '20px',
          }}
        >
          We&rsquo;re a team exploring how assessment for accreditation can work
          better &mdash; alongside educators.
        </p>
      </div>

      {/*
        Team cards grid:
        - 68px left/right padding
        - 3 fixed 376px columns, space-between for horizontal gaps
        - row-gap matches the computed column gap:
            column gap = (100% - 2×68px - 3×376px) / 2
            but 100% here is the grid container width (which includes padding),
            so inner width = 100% - 136px, and gap = (inner - 1128) / 2
            → row-gap: calc((100% - 136px - 1128px) / 2)
        - 6 cards → 2 full rows of 3, no spacer needed
      */}
      <div
        ref={gridRef}
        style={{
          paddingLeft: '68px',
          paddingRight: '68px',
          marginTop: '62px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 376px)',
          justifyContent: 'space-between',
          rowGap: `${rowGap}px`,
        }}
      >
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
