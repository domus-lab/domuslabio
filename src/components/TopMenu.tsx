import { Button } from "./ui/button";

export const TopMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 z-50">
      <div className="flex items-center gap-6 px-4">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("process")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Process
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
          onClick={() => scrollToSection("pricing")}
          className="text-black hover:bg-transparent hover:text-gray-600"
        >
          Pricing
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-black text-white rounded-full hover:bg-gray-800"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};