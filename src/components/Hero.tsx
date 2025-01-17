import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#243949] to-[#517fa4] text-white">
      <div className="container px-4 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          From Founders to Founders
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Dream. Build. Launch. Turning ideas into reality, fast.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#243949] hover:bg-gray-100 transition-colors"
        >
          Book a call
        </Button>
      </div>
    </section>
  );
};