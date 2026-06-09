import fullLogo from "@/assets/logos/full-logo-gradient-icon-dark.svg";

const homeHref = import.meta.env.BASE_URL || "/";

/**
 * Footer — Aolia Landing Page
 * Figma spec:
 * - Continuous dark background from CTASection (#3E3A36)
 * - Logo: FullLogo_GradientIcon_ForDarkBackgrounds, 95×23px, margin-left 68px
 * - margin-top 167px from disclaimer text in CTASection
 * - Copyright: DM Sans Light 12px, white, center aligned
 * - Blog + Contacts: margin-right 68px, DM Sans Regular 14px
 */

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#3E3A36' }}
    >
      {/* Footer bottom bar — logo left, copyright center, links right */}
      {/* margin-top 167px from disclaimer/watermark in CTASection */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingLeft: '68px',
          paddingRight: '68px',
          paddingTop: '167px',
          paddingBottom: '40px',
        }}
      >
        {/* Logo — FullLogo_GradientIcon_ForDarkBackgrounds, 95×23px */}
        <a
          href={homeHref}
          aria-label="Aolia home"
          className="hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <img
            src={fullLogo}
            alt="Aolia"
            style={{ width: '95px', height: '23px', objectFit: 'contain' }}
          />
        </a>

        {/* Copyright — DM Sans Light 12px, white, center aligned */}
        <p
          className="font-body font-light text-white text-center flex-1 px-4"
          style={{ fontSize: '12px', lineHeight: '18px' }}
        >
          © 2026 Macnica, Inc. All rights reserved
        </p>

        {/* Navigation links — Blog + Contacts */}
        <nav
          className="flex items-center gap-6 flex-shrink-0"
          aria-label="Footer navigation"
        >
          <a
            href="https://blog.aolia.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-normal text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '14px' }}
          >
            Blog
          </a>
          <a
            href="mailto:hello@aolia.ai"
            className="font-body font-normal text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '14px' }}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Responsive override for small screens */}
      <style>{`
        @media (max-width: 767px) {
          footer > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 60px !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
