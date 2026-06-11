import topIllustration from "@/assets/illustrations/top-illustration.webp";

/**
 * HeroSection — Aolia Landing Page
 * Figma spec:
 * - H1: DM Serif Display Regular 54px/60px, margin-top 85px from navbar bottom
 * - Subheading: DM Sans Regular 18px/29px, width 711px, 13px below H1
 * - CTA form: 38px below subheading — email input + subscribe button
 * - Illustration: 828×463px, 65px below CTA form
 */

import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const base = 'https://blog.aolia.ai/subscribe';
    const url = email.trim()
      ? `${base}?email=${encodeURIComponent(email.trim())}`
      : base;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full bg-[#F2EDE4] overflow-hidden">
      {/* Text content — centered, with precise Figma margins */}
      <div className="text-center" style={{ paddingLeft: '68px', paddingRight: '68px' }}>
        {/* H1 — DM Serif Display Regular 54px/60px, margin-top 85px from navbar */}
        <h1
          className="font-display font-normal text-[#3E3A36] mx-auto"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 54px)',
            lineHeight: 'clamp(2.4rem, 5.5vw, 60px)',
            marginTop: '85px',
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
            fontSize: '18px',
            lineHeight: '29px',
            maxWidth: '711px',
            marginTop: '13px',
          }}
        >
          Ongoing exploration of how assessment for accreditation could work better.
          <br />
          Here we&rsquo;re sharing the research, the conversations, and the hard questions behind it.
        </p>

        {/* CTA form — 38px below subheading */}
        <div
          className="flex flex-col items-center"
          style={{ marginTop: '38px' }}
        >
          <div style={{ width: '480px', maxWidth: '100%' }}>
            <form onSubmit={handleSubscribe}>
              {/* Email input + Subscribe button row */}
              <div
                style={{
                  display: 'flex',
                  border: '1px solid #B5A898',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#F2EDE4',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email..."
                  aria-label="Email address"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    color: '#3E3A36',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#78A287',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 150ms ease-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6a9278')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#78A287')}
                >
                  Subscribe
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

      {/* Hero illustration — 843×463px, 65px below CTA form */}
      <div
        className="flex justify-center"
        style={{ marginTop: '65px' }}
      >
        <img
          src={topIllustration}
          alt="Scholar at desk with books and lamp — editorial illustration"
          style={{
            width: '843px',
            height: '463px',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
        />
      </div>
    </section>
  );
}
