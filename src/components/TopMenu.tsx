import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const TopMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 z-50">
      <div className="flex items-center gap-6 px-4">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("offering")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Offering
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("work")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Work
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("process")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Process
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("pricing")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Pricing
        </Button>
        <Button
          onClick={() => window.open('https://calendly.com/your-link', '_blank')}
          className="bg-black text-white rounded-full hover:bg-gray-800 group"
        >
          Connect
          <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};