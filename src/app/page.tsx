import { Hero } from '@/components/landing/hero';
import { Authority } from '@/components/landing/authority';
import { Benefits } from '@/components/landing/benefits';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Contents } from '@/components/landing/contents';
import { Preview } from '@/components/landing/preview';
import { Pricing } from '@/components/landing/pricing';
import { Guarantee } from '@/components/landing/guarantee';
import { Testimonials } from '@/components/landing/testimonials';
import { Faq } from '@/components/landing/faq';
import { FinalCta } from '@/components/landing/final-cta';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Authority />
        <Contents />
        <Preview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
