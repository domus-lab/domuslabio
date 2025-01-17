import { OfferingItem } from "@/components/ui/OfferingItem";

export const Offering = () => {
  const offerings = [
    {
      title: "App & Web",
      description: "We laverage full-stack development stack to build both web and mobile applications.",
    },
    {
      title: "UI/UX",
      description: "Creating intuitive and engaging user experience.",
    },
    {
      title: "Experienced team",
      description: "A-team engineers at a fraction of the cost with proven track record in successful startups.",
    },
    {
      title: "Scalability",
      description: "We focus on today, build for tomorrow. We adapt our solutions to what your company needs.",
    },
    {
      title: "Security",
      description: "Implementing robust security measures to protect your systems and data.",
    },
    {
      title: "AWS Cloud",
      description: "Leveraging AWS services for optimal performance.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl mb-4 text-center">
          Start your project{" "}
          <span className="relative inline-block font-bold">
            today
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 100 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15 Q 25 5, 50 15 T 100 15"
                fill="none"
                stroke="#9b87f5"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Our team has built successful products for more than 10 startups and more than 15 years of experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingItem key={index} title={offering.title} description={offering.description} />
          ))}
        </div>
      </div>
    </section>
  );
};