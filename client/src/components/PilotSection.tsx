import campusIllustration from "@/assets/illustrations/campus.svg";
import cguLogo from "@/assets/logos/cgu-logo.svg";

/**
 * PilotSection — "Piloted with Claremont Graduate University."
 * Figma spec:
 * - No top divider (ProblemSection provides the divider above)
 * - H2: DM Sans Bold 41px, margin-left 68px, margin-top 71px
 * - Campus illustration: 123×87px, margin-top 51px from H2, margin-left 68px
 * - Right text block: width 588px, RIGHT EDGE aligned to 68px from page right
 * - CGU logo: 396×32px, 46px below last paragraph, left edge aligned with text block left edge
 * - Bottom spacing: handled by TestimonialSection (159px above quote container)
 */

export default function PilotSection() {
  return (
    <section className="w-full bg-[#F2EDE4]">
      {/* Two-column layout — full width with 68px outer padding */}
      <div
        className="flex flex-col lg:flex-row"
        style={{ paddingLeft: "68px", paddingRight: "68px" }}
      >
        {/* Left column — H2 + campus illustration, takes remaining space */}
        <div className="flex-1" style={{ paddingRight: "40px" }}>
          {/* H2 — DM Sans Bold 41px, margin-top 71px */}
          <h2
            className="font-body font-bold text-[#3E3A36]"
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 41px)",
              lineHeight: 1.15,
              marginTop: "71px",
            }}
          >
            Piloted with Claremont
            <br />
            Graduate University.
          </h2>

          {/* Campus illustration — 123×87px, margin-top 51px */}
          <img
            src={campusIllustration}
            alt="Campus building illustration"
            style={{
              width: "123px",
              height: "87px",
              marginTop: "51px",
              display: "block",
            }}
          />
        </div>

        {/* Right column — body text 588px + CGU logo */}
        {/* Fixed 588px width, right edge at 68px from page right */}
        <div
          className="lg:flex-shrink-0 flex flex-col"
          style={{
            width: "588px",
            maxWidth: "100%",
            marginTop: "71px",
          }}
        >
          <div
            className="font-body font-normal text-[#3E3A36]"
            style={{ fontSize: "16px", lineHeight: "25px" }}
          >
            <p>
              Aolia is an initiative by Macnica, a global technology solutions
              company headquartered in Japan.
            </p>
            <p style={{ marginTop: "24px" }}>
              Our early pilot work with Claremont Graduate University, home of
              the Drucker School of Management, grounds the work in real
              assessment workflows, faculty needs, and the practical challenges
              of accreditation.
            </p>
            <p style={{ marginTop: "24px" }}>
              We&rsquo;re starting with AACSB-accredited business schools, with
              the longer-term goal of supporting accreditation and outcomes
              assessment across higher education.
            </p>
          </div>

          {/* CGU logo — 396×32px, 46px below last paragraph, left-aligned with text block */}
          <img
            src={cguLogo}
            alt="Claremont Graduate University"
            style={{
              marginTop: "46px",
              width: "396px",
              height: "32px",
              maxWidth: "100%",
              display: "block",
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
