export const Hero = () => {
  return (
    <section
      aria-label="DomusLab"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6"
    >
      <img
        src="/og-image.png"
        alt="DomusLab"
        width={500}
        height={500}
        className="w-[min(70vw,320px)] h-auto md:w-[min(50vw,400px)] object-contain select-none"
        draggable={false}
      />
    </section>
  );
};
