import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = [
    { text: "fast", color: "linear-gradient(90deg, #8B5CF6 0%, #D946EF 100%)" },      // Vivid Purple to Pink
    { text: "reliable", color: "linear-gradient(90deg, #0EA5E9 0%, #38BDF8 100%)" },  // Ocean Blue to Sky
    { text: "secure", color: "linear-gradient(90deg, #F97316 0%, #FB923C 100%)" },    // Bright Orange to Light
    { text: "worry-free", color: "linear-gradient(90deg, #D946EF 0%, #F472B6 100%)" } // Magenta Pink to Rose
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
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-gray-900">
          Start building today
          <br />
          <span 
            className="inline-block transition-all duration-500 mt-4 font-extrabold"
            style={{ 
              backgroundImage: words[currentWordIndex].color,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {words[currentWordIndex].text}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
          We support founders to build their product fast, reliable and scalable
        </p>
        <Button
          size="lg"
          className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none transition-all duration-300 transform hover:scale-105 text-lg py-6 px-10"
          onClick={() => window.open('https://cal.com/juan-luis-gv-swcapy/30min', '_blank')}
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book a call
        </Button>
      </div>
    </section>
  );
};