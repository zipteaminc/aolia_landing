import topIllustration from "@/assets/illustrations/top-illustration.png";

/**
 * HeroSection — Aolia Landing Page
 * Figma spec:
 * - H1: DM Serif Display Regular 54px/60px, margin-top 85px from navbar bottom
 * - Subheading: DM Sans Regular 18px/29px, width 711px, 13px below H1
 * - CTA form: 38px below subheading — custom styled form (no Substack iframe label)
 * - Illustration: 828×463px, 65px below CTA form
 */

import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.open(
        `https://aoliaai.substack.com/subscribe?email=${encodeURIComponent(email.trim())}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.open(
        "https://aoliaai.substack.com/subscribe",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section className="w-full bg-[#F2EDE4] overflow-hidden">
      {/* Text content — centered, with precise Figma margins */}
      <div
        className="text-center"
        style={{ paddingLeft: "68px", paddingRight: "68px" }}
      >
        {/* H1 — DM Serif Display Regular 54px/60px, margin-top 85px from navbar */}
        <h1
          className="font-display font-normal text-[#3E3A36] mx-auto"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 54px)",
            lineHeight: "clamp(2.4rem, 5.5vw, 60px)",
            marginTop: "85px",
          }}
        >
          We&rsquo;re rethinking AI-native
          <br />
          assessment for accreditation.
        </h1>

        {/* Subheading — DM Sans Regular 18px/29px, width 711px, 13px below H1 */}
        <p
          className="font-body font-normal text-[#3E3A36] mx-auto"
          style={{
            fontSize: "18px",
            lineHeight: "29px",
            maxWidth: "711px",
            marginTop: "13px",
          }}
        >
          Ongoing exploration of how assessment for accreditation could work
          better.
          <br />
          Here we&rsquo;re sharing the research, the conversations, and the hard
          questions behind it.
        </p>

        {/* CTA form — 38px below subheading, custom styled to match Substack embed appearance */}
        <div
          className="flex flex-col items-center"
          style={{ marginTop: "38px" }}
        >
          <form
            onSubmit={handleSubscribe}
            style={{ width: "480px", maxWidth: "100%" }}
          >
            {/* Email input + Subscribe button row */}
            <div
              style={{
                display: "flex",
                border: "1px solid #B5A898",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#F2EDE4",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Type your email..."
                aria-label="Email address"
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  color: "#3E3A36",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#78A287",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background-color 150ms ease-out",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = "#6a9278")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = "#78A287")
                }
              >
                Subscribe
              </button>
            </div>

            {/* Legal text — DM Sans Regular 13px, centered */}
            <p
              className="font-body font-normal text-center"
              style={{
                fontSize: "13px",
                lineHeight: "20px",
                color: "#3E3A36",
                opacity: 0.6,
                marginTop: "10px",
              }}
            >
              By subscribing you agree to{" "}
              <a
                href="https://substack.com/tos"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                Substack&rsquo;s Terms of Use
              </a>
              ,{" "}
              <a
                href="https://substack.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                our Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://substack.com/ccpa#personal-data-collected"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                our Information collection notice
              </a>
            </p>

            {/* Substack watermark — inline SVG logo matching footer branding */}
            <div className="flex justify-end" style={{ marginTop: "6px" }}>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                aria-label="Powered by Substack"
                style={{ textDecoration: "none", opacity: 0.55 }}
              >
                {/* Substack logo SVG — same as footer */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M15.9 3.6H0V5.4H15.9V3.6Z" fill="#3E3A36" />
                  <path d="M0 7.2V16L7.95 11.9L15.9 16V7.2H0Z" fill="#3E3A36" />
                  <path d="M15.9 0H0V1.8H15.9V0Z" fill="#3E3A36" />
                </svg>
                <span
                  className="font-body font-normal"
                  style={{ fontSize: "12px", color: "#3E3A36" }}
                >
                  substack
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Hero illustration — 828×463px, 65px below CTA form */}
      <div className="flex justify-center" style={{ marginTop: "65px" }}>
        <img
          src={topIllustration}
          alt="Scholar at desk with books and lamp — editorial illustration"
          style={{
            width: "828px",
            height: "463.48px",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>
    </section>
  );
}
