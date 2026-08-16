/**
 * Navbar — Aolia Landing Page
 * Figma spec:
 * - Logo: 172×55px, margin-top 32px, margin-left 68px
 * - Blog: DM Sans Regular 19px / 25px lh, margin-top 49px, margin-right 68px
 * - Blog underline: 36px wide, 1px stroke, 2px gap
 */

import textLockup from '@assets/text-lockup-light-DZHL75RO.svg';

export default function Navbar() {
  return (
    <header className="w-full bg-[#F2EDE4]">
      {/* Full-width nav with precise pixel margins matching Figma */}
      <nav
        className="flex items-start justify-between"
        style={{ paddingLeft: '68px', paddingRight: '68px' }}
        aria-label="Main navigation"
      >
        {/* Logo — TextLockup SVG: 172×55px, margin-top 32px */}
        <a
          href="/"
          aria-label="Aolia — from Macnica, Inc."
          style={{ marginTop: '32px', display: 'block', flexShrink: 0 }}
        >
          <img
            src={textLockup}
            alt="Aolia — from Macnica, Inc."
            style={{ width: '172px', height: '55px', objectFit: 'contain' }}
          />
        </a>

        {/* Blog link — DM Sans Regular 19px, margin-top 49px, margin-right 0 (handled by padding) */}
        <a
          href="https://blog.aolia.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-normal text-[#3E3A36] transition-opacity hover:opacity-60"
          style={{
            marginTop: '49px',
            fontSize: '19px',
            lineHeight: '25px',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexShrink: 0,
          }}
          aria-label="Blog"
        >
          Blog
          {/* Custom 36px underline, 1px stroke, 2px gap below text */}
          <span
            style={{
              display: 'block',
              width: '36px',
              height: '1px',
              backgroundColor: '#3E3A36',
              marginTop: '2px',
            }}
            aria-hidden="true"
          />
        </a>
      </nav>

      {/* Responsive override for small screens */}
      <style>{`
        @media (max-width: 767px) {
          nav[aria-label="Main navigation"] {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          nav[aria-label="Main navigation"] a:first-child {
            margin-top: 20px !important;
          }
          nav[aria-label="Main navigation"] a:last-child {
            margin-top: 28px !important;
          }
          nav[aria-label="Main navigation"] img {
            width: 140px !important;
            height: 45px !important;
          }
        }
      `}</style>
    </header>
  );
}
