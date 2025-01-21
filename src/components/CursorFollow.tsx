import { useEffect, useRef } from 'react';

export const CursorFollow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const radius = 100;

      const dots = container.getElementsByClassName('grid-dot');
      Array.from(dots).forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX - (rect.left + rect.width / 2), 2) +
          Math.pow(mouseY - (rect.top + rect.height / 2), 2)
        );

        if (distance < radius) {
          const opacity = 1 - (distance / radius);
          (dot as HTMLElement).style.opacity = `${0.25 + (opacity * 0.3)}`;
        } else {
          (dot as HTMLElement).style.opacity = '0.25';
        }
      });
    };

    const createGrid = () => {
      container.innerHTML = '';
      const width = window.innerWidth;
      const height = window.innerHeight;
      const spacing = 20; // Increased spacing for a more notebook-like feel

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dot = document.createElement('div');
          dot.className = 'grid-dot absolute w-[1.5px] h-[1.5px] bg-gray-300 rounded-full transition-opacity duration-200';
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
          dot.style.opacity = '0.25';
          container.appendChild(dot);
        }
      }
    };

    createGrid();
    window.addEventListener('resize', createGrid);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', createGrid);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};