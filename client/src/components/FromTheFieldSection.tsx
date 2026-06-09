/**
 * FromTheFieldSection — "From the field."
 * Figma spec:
 * - 136px below team cards → divider line (#B5A898, 1px, full width with 68px margins)
 * - 71px below divider → H2 "From the field."
 * - Margin-left 68px, H2 DM Sans Bold 41px, with period
 * - "All Posts": DM Sans Semibold 14px, margin-right 68px
 * - Three empty white cards (embed links to be added later)
 * - 170px bottom margin before dark footer
 */

export default function FromTheFieldSection() {
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
          href="https://blog.aolia.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-semibold text-[#3E3A36] underline underline-offset-4 hover:opacity-70 transition-opacity flex-shrink-0 ml-6"
          style={{ fontSize: '14px' }}
          aria-label="All posts on Aolia blog"
        >
          All Posts
        </a>
      </div>

      {/* Three empty embed cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        style={{
          paddingLeft: '68px',
          paddingRight: '68px',
          marginTop: '32px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl bg-white"
            style={{ minHeight: '460px' }}
            aria-label={`Post embed placeholder ${i}`}
          />
        ))}
      </div>

      {/* 170px bottom margin before dark footer */}
      <div style={{ height: '170px' }} />
    </section>
  );
}
