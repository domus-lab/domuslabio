import { Award, Layers, ShieldCheck } from "lucide-react";

const OfferingItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center p-6 text-center animate-fade-in">
    <div className="w-12 h-12 mb-4 text-[#517fa4]">
      <Icon className="w-full h-full" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Offering = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Start building worry free.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OfferingItem
            icon={Award}
            title="Experience"
            description="Years of expertise in building successful digital products and scaling startups."
          />
          <OfferingItem
            icon={Layers}
            title="Stack"
            description="Modern, scalable technology stack that powers fast and reliable applications."
          />
          <OfferingItem
            icon={ShieldCheck}
            title="Reliability and Security"
            description="Enterprise-grade security and reliability built into every project."
          />
        </div>
      </div>
    </section>
  );
};