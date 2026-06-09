/**
 * CTASection — "Follow the work as it happens."
 * Figma spec:
 * - Background: #3E3A36 (starts immediately after 116px cream gap)
 * - H2: DM Sans Bold 41px
 * - Supporting text: width 529px, white, DM Sans Regular 19px/25px, margin-top 19px
 * - 41px gap between supporting text and subscribe form
 * - Disclaimer: 2 lines, fully visible on dark background
 * - Substack watermark below disclaimer
 * Note: Substack iframe forces its own bg — using custom form that submits to Substack
 */

import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.open(
      `https://aoliaai.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSubmitted(true);
  };

  return (
    <section
      className="w-full text-center"
      style={{ backgroundColor: '#3E3A36', paddingTop: '80px', paddingBottom: '0' }}
    >
      <div className="mx-auto" style={{ maxWidth: '640px', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* H2 — DM Sans Bold 41px */}
        <h2
          className="font-body font-bold text-white"
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 41px)',
            lineHeight: 1.2,
          }}
        >
          Follow the work as it happens.
        </h2>

        {/* Supporting text — width 529px, DM Sans Regular 19px/25px, margin-top 19px */}
        <p
          className="font-body font-normal text-white mx-auto"
          style={{
            fontSize: '19px',
            lineHeight: '25px',
            maxWidth: '529px',
            marginTop: '19px',
          }}
        >
          We&rsquo;re sharing the research, the hard questions, and what
          we&rsquo;re building — with the people who know this work best.
        </p>

        {/* Subscribe form — 41px below supporting text */}
        <div style={{ marginTop: '41px' }}>
          {submitted ? (
            <p
              className="font-body font-normal text-white"
              style={{ fontSize: '16px', opacity: 0.8 }}
            >
              Thanks — check your inbox to confirm your subscription.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full overflow-hidden mx-auto"
              style={{
                maxWidth: '480px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
              aria-label="Subscribe to Aolia on Substack"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email..."
                required
                className="flex-1 font-body font-normal bg-transparent text-white placeholder:text-white/40 px-4 py-3 outline-none min-w-0"
                style={{ fontSize: '15px' }}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="font-body font-medium text-white px-6 py-3 flex-shrink-0 transition-opacity hover:opacity-85 active:opacity-70"
                style={{
                  backgroundColor: '#78A287',
                  fontSize: '15px',
                  borderLeft: '1px solid rgba(255,255,255,0.15)',
                }}
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Disclaimer — 2 lines, fully visible on dark background */}
        <p
          className="font-body font-normal"
          style={{ fontSize: '12px', lineHeight: '18px', color: 'rgba(255,255,255,0.75)', marginTop: '12px' }}
        >
          By subscribing you agree to{' '}
          <a
            href="https://substack.com/tos"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Substack&rsquo;s Terms of Use
          </a>
          {', '}
          <a
            href="https://substack.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            our Privacy Policy
          </a>
          <br />
          {' and '}
          <a
            href="https://substack.com/ccpa#personal-data-collected"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            our Information collection notice
          </a>
        </p>

        {/* Substack watermark — matching the default Substack embed branding */}
        <div
          className="flex justify-end items-center"
          style={{ maxWidth: '480px', margin: '8px auto 0' }}
        >
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            aria-label="Powered by Substack"
            style={{ textDecoration: 'none' }}
          >
            {/* Substack logo SVG — inline for reliability */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15.9 3.6H0V5.4H15.9V3.6Z"
                fill="rgba(255,255,255,0.55)"
              />
              <path
                d="M0 7.2V16L7.95 11.9L15.9 16V7.2H0Z"
                fill="rgba(255,255,255,0.55)"
              />
              <path
                d="M15.9 0H0V1.8H15.9V0Z"
                fill="rgba(255,255,255,0.55)"
              />
            </svg>
            <span
              className="font-body font-normal"
              style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}
            >
              substack
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
