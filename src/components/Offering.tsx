import { OfferingItem } from "@/components/ui/OfferingItem";

export const Offering = () => {
  const offerings = [
    {
      title: "App and web",
      description: "Full-stack development for web and mobile applications.",
    },
    {
      title: "Experienced team",
      description: "Seasoned developers with proven track record in startup success.",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences.",
    },
    {
      title: "Scalability",
      description: "Building solutions that grow with your business needs.",
    },
    {
      title: "Security",
      description: "Implementing robust security measures to protect your data.",
    },
    {
      title: "Cloud",
      description: "Leveraging cloud technologies for optimal performance.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Start your project today - worry free.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Our team has built successful products for more than 10 startups in 15 years.
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