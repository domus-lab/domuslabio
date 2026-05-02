import { Hero } from "@/components/Hero";
import { TopMenu } from "@/components/TopMenu";
import { CursorFollow } from "@/components/CursorFollow";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden" id="top">
      <CursorFollow />
      <TopMenu />
      <Hero />
    </main>
  );
};

export default Index;
