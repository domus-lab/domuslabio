import { Hero } from "@/components/Hero";
import { Offering } from "@/components/Offering";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { FloatingMenu } from "@/components/FloatingMenu";
import { CursorFollow } from "@/components/CursorFollow";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden" id="top">
      <CursorFollow />
      <Hero />
      <Offering />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <Footer />
      <FloatingMenu />
    </main>
  );
};

export default Index;