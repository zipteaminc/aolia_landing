import rubricsIllustration from "@/assets/illustrations/rubrics.svg";

/**
 * ProblemSection — "Assessment for accreditation is hard."
 * Figma spec:
 * - Top divider: #B5A898, 1px, horizontal margins 68px, 92px below illustration
 * - H2: DM Sans Bold 41px / 42px lh, width 592px, margin-left 68px, margin-top 71px
 * - Green accent line: "We think it can work better." in #78A287
 * - Rubrics illustration: 94×80px, margin-top 51px from H2, margin-left 68px
 * - Right text block: width 588px, RIGHT EDGE aligned to 68px from page right
 * - Bottom divider: 136px below last paragraph
 */

export default function ProblemSection() {
  return (
    <section className="w-full bg-[#F2EDE4]">
      {/* Top divider — 92px below illustration */}
      <div
        style={{
          marginTop: "92px",
          marginLeft: "68px",
          marginRight: "68px",
          height: "1px",
          backgroundColor: "#B5A898",
        }}
        role="separator"
        aria-hidden="true"
      />

      {/* Two-column layout — full width with 68px outer padding */}
      <div
        className="flex flex-col lg:flex-row"
        style={{ paddingLeft: "68px", paddingRight: "68px" }}
      >
        {/* Left column — H2 + rubrics illustration, takes remaining space */}
        <div className="flex-1" style={{ paddingRight: "40px" }}>
          {/* H2 — DM Sans Bold 41px / 42px lh, width 592px, margin-top 71px */}
          <h2
            className="font-body font-bold text-[#3E3A36]"
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 41px)",
              lineHeight: "42px",
              maxWidth: "592px",
              marginTop: "71px",
            }}
          >
            Assessment for
            <br />
            accreditation is hard.
            <br />
            <span style={{ color: "#78A287" }}>
              We think it can work better.
            </span>
          </h2>

          {/* Rubrics illustration — 94×80px, margin-top 51px */}
          <img
            src={rubricsIllustration}
            alt="Rubrics grid illustration"
            style={{
              width: "94px",
              height: "80px",
              marginTop: "51px",
              display: "block",
            }}
          />
        </div>

        {/* Right column — body text 588px, right edge at 68px from page right */}
        {/* On desktop: fixed 588px width, pushed to right via ml-auto */}
        <div
          className="lg:flex-shrink-0 font-body font-normal text-[#3E3A36]"
          style={{
            fontSize: "16px",
            lineHeight: "25px",
            width: "588px",
            maxWidth: "100%",
            marginTop: "71px",
          }}
        >
          <p>
            Assessment for accreditation follows a familiar pattern across
            systems like AACSB and ABET: reviewing student work, applying
            evaluation criteria, and documenting evidence of learning outcomes.
          </p>
          <p style={{ marginTop: "24px" }}>
            This work sits at the intersection of faculty workload,
            institutional accountability, and continuous improvement — yet
            remains one of the least well-supported workflows in higher
            education.
          </p>
          <p style={{ marginTop: "24px" }}>
            We&rsquo;re starting by looking at a few of the most challenging
            parts:
          </p>
          <ul
            style={{ marginTop: "12px", paddingLeft: "0", listStyle: "none" }}
          >
            {[
              "how student work is selected for evaluation",
              "how scoring stays consistent across faculty",
              "how results are documented in ways accreditors can trust",
            ].map(item => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "6px",
                }}
              >
                <span style={{ marginRight: "10px", flexShrink: 0 }}>
                  &bull;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "24px" }}>
            We are exploring how this process could be redesigned in an
            AI-native way — reducing manual effort while strengthening the
            evidence behind assessment with faculty remaining fully in control.
          </p>
        </div>
      </div>

      {/* Bottom divider — 136px below last paragraph */}
      <div
        style={{
          marginTop: "136px",
          marginLeft: "68px",
          marginRight: "68px",
          height: "1px",
          backgroundColor: "#B5A898",
        }}
        role="separator"
        aria-hidden="true"
      />
    </section>
  );
}
