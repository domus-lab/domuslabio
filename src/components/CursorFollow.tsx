import { useEffect } from 'react';

export const CursorFollow = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const radius = 100;
      const dots = document.querySelectorAll('.grid-dot');
      
      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - dotX, 2) + 
          Math.pow(e.clientY - dotY, 2)
        );
        
        if (distance < radius) {
          const opacity = 1 - (distance / radius);
          (dot as HTMLElement).style.opacity = `${0.1 + (opacity * 0.3)}`; // Increased base opacity from 0.05 to 0.1
        } else {
          (dot as HTMLElement).style.opacity = '0.1'; // Increased default opacity from 0.05 to 0.1
        }
      });
    };

    // Create grid dots
    const createGridDots = () => {
      const container = document.createElement('div');
      container.className = 'fixed inset-0 pointer-events-none z-0';
      document.body.appendChild(container);

      const width = window.innerWidth;
      const height = window.innerHeight;
      const spacing = 16; // Changed from 24 to 16 to make points closer together

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dot = document.createElement('div');
          dot.className = 'grid-dot absolute w-[2px] h-[2px] bg-white rounded-full transition-opacity duration-200';
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          dot.style.opacity = '0.1'; // Increased initial opacity from 0.05 to 0.1
          container.appendChild(dot);
        }
      }
    };

    createGridDots();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const container = document.querySelector('.grid-dots-container');
      container?.remove();
    };
  }, []);

  return null;
};