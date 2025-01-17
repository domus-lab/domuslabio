import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = [
    { text: "fast", color: "#8B5CF6" },      // Vivid Purple
    { text: "reliable", color: "#0EA5E9" },  // Ocean Blue
    { text: "secure", color: "#F97316" },    // Bright Orange
    { text: "worry-free", color: "#D946EF" } // Magenta Pink
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      hero.style.setProperty('--mouse-x', `${x}%`);
      hero.style.setProperty('--mouse-y', `${y}%`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02),rgba(255,255,255,0))] pointer-events-none" />
      <div className="container px-4 mx-auto text-center animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          From idea to product,
          <br />
          <span 
            className="inline-block transition-all duration-500 mt-4"
            style={{ 
              color: words[currentWordIndex].color,
              textShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}
          >
            {words[currentWordIndex].text}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Turning ideas into reality, fast, reliable and securely.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#1a1f2c] hover:bg-gray-100 transition-colors"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book a call
        </Button>
      </div>
    </section>
  );
};