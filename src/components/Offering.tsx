import { OfferingItem } from "@/components/ui/OfferingItem";

export const Offering = () => {
  const offerings = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions to meet your unique business needs.",
    },
    {
      title: "Mobile App Development",
      description: "Engaging mobile experiences for iOS and Android.",
    },
    {
      title: "Web Development",
      description: "Responsive and user-friendly websites that drive results.",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive designs that enhance user experience.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud services to support your growth.",
    },
    {
      title: "Digital Marketing",
      description: "Strategies to increase your online presence and reach.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Start building worry free.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          We provide everything you need to turn your vision into a successful digital product.
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
