import { Home, Briefcase, DollarSign, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 z-50">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("top")}
          className="rounded-full text-black"
        >
          <Home className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("work")}
          className="rounded-full text-black"
        >
          <Briefcase className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("pricing")}
          className="rounded-full text-black"
        >
          <DollarSign className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("contact")}
          className="rounded-full text-black"
        >
          <Phone className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  );
};