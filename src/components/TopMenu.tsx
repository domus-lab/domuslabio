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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-1 sm:p-2 z-50">
      <div className="flex items-center gap-2 sm:gap-6 px-2 sm:px-4">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("work")}
          className="text-black hover:bg-transparent hover:text-gray-600 text-xs sm:text-sm px-2 sm:px-4"
        >
          Work
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("process")}
          className="text-black hover:bg-transparent hover:text-gray-600 text-xs sm:text-sm px-2 sm:px-4"
        >
          Process
        </Button>
        <Button
          variant="ghost"
          onClick={() => scrollToSection("pricing")}
          className="text-black hover:bg-transparent hover:text-gray-600 text-xs sm:text-sm px-2 sm:px-4"
        >
          Pricing
        </Button>
        <Button
          onClick={() => window.open('https://cal.com/juan-luis-gv-swcapy/30min', '_blank')}
          className="bg-black text-white rounded-full hover:bg-gray-800 group text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
        >
          Connect
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};