/**
 * TestimonialSection — Dean Sprott quote
 * Figma spec:
 * - 159px top padding above quote container
 * - Quote container: 68px horizontal margins, min-height 504px, bg #3E3A36, rounded-2xl
 * - Quote mark: " (large, sage green #78A287, DM Sans Medium 63px) — to the LEFT of text
 * - Quote text: centered horizontally, DM Sans Semibold 26px / 36px, max-width 842px
 * - Author: centered, 44px below quote text, DM Sans Regular 14px / 20px, white
 * - Quote mark top-aligns with first line of quote text
 * - Bottom padding: 159px after container
 */

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#F2EDE4]" style={{ paddingTop: '159px', paddingBottom: '0' }}>
      {/* Quote container */}
      <div
        style={{
          marginLeft: '68px',
          marginRight: '68px',
          backgroundColor: '#3E3A36',
          borderRadius: '16px',
          minHeight: '504px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 80px 80px 80px',
          position: 'relative',
        }}
      >
        {/* Quote mark — positioned top-left of the text block, sage green */}
        <div
          style={{
            width: '100%',
            maxWidth: '842px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Row: quote mark + quote text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '100%',
              gap: '16px',
            }}
          >
            {/* Large opening quote mark — sage green, left-aligned, top-aligned with text */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                fontSize: '63px',
                lineHeight: '1',
                color: '#78A287',
                flexShrink: 0,
                marginTop: '-8px', // optical alignment with first line of text
                userSelect: 'none',
              }}
            >
              &ldquo;
            </span>

            {/* Quote text — centered */}
            <blockquote
              style={{
                flex: 1,
                textAlign: 'center',
              }}
            >
              <p
                className="font-body font-semibold text-white"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 26px)',
                  lineHeight: '36px',
                }}
              >
                Accreditation is critical for business schools in today&rsquo;s market,
                with nothing more time consuming in that process than assessment.
                A tool that frees faculty from the meticulous processes associated
                with assessment &mdash; while strengthening the evidence underneath
                it &mdash; isn&rsquo;t just useful. That&rsquo;s a game changer.
              </p>

              {/* Author — centered, 44px below quote */}
              <footer
                className="font-body font-normal text-white"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  marginTop: '44px',
                  opacity: 0.85,
                  textAlign: 'center',
                }}
              >
                <p>David Sprott, Henry Y. Hwang Dean, Drucker School of Management</p>
                <p>Claremont Graduate University</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Responsive: reduce horizontal padding on smaller screens */}
      <style>{`
        @media (max-width: 768px) {
          .testimonial-container {
            margin-left: 24px !important;
            margin-right: 24px !important;
            padding: 48px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
