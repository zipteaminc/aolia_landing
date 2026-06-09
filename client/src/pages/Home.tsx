/**
 * Home — Aolia Landing Page
 * Sections in order:
 * 1. Navbar
 * 2. Hero (headline + Substack embed + top illustration)
 * 3. Problem (Assessment is hard)
 * 4. Pilot (Claremont Graduate University)
 * 5. Testimonial (Dean Sprott quote)
 * 6. Team (Who is behind this)
 * 7. From the field (empty post cards)
 * 8. CTA (Follow the work)
 * 9. Footer
 */

import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FromTheFieldSection from '@/components/FromTheFieldSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import PilotSection from '@/components/PilotSection';
import ProblemSection from '@/components/ProblemSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2EDE4' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <PilotSection />
        <TestimonialSection />
        <TeamSection />
        <FromTheFieldSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
