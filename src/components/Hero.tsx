import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#243949] to-[#517fa4] text-white">
      <div className="container px-4 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          From idea to launch
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Turning ideas into reality, fast, reliable and securely.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#243949] hover:bg-gray-100 transition-colors group relative"
        >
          Book a call
          <span className="ml-2 w-8 h-8 rounded-full bg-[#243949]/10 flex items-center justify-center group-hover:bg-[#243949]/20 transition-colors">
            <Calendar className="w-4 h-4" />
          </span>
        </Button>
      </div>
    </section>
  );
};