import { OfferingItem } from "@/components/ui/OfferingItem";
import { Smartphone, Globe, Layout, Server, DollarSign, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Offering = () => {
  const offerings = [
    {
      title: "App",
      description: "Using React Native to deliver native results for both Android & iOS platforms.",
      icon: Smartphone
    },
    {
      title: "Web",
      description: "Leveraging latest stack to build responsive web applications.",
      icon: Globe
    },
    {
      title: "UI/UX",
      description: "Creating intuitive and engaging user experiences with modern design principles.",
      icon: Layout
    },
  ];

  const offerings2 = [
    {
      title: "AWS infrastructure",
      description: "Our solution architects will deploy a reliable and scalable solution using AWS cloud services.",
      icon: Server
    },
    {
      title: "Cost optimisation",
      description: "Start saving on day 1 with us. Efficient resource management to minimize operational costs.",
      icon: DollarSign
    },
    {
      title: "Security",
      description: "Implementing robust security measures to protect your systems and data.",
      icon: Shield
    },
  ];

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl mb-4 text-center font-bold">
          Start building today
        </h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Our team has built successful products for more than 10 startups and with +15 years of experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {offerings.map((offering, index) => (
            <OfferingItem 
              key={index} 
              title={offering.title} 
              description={offering.description}
              icon={offering.icon}
            />
          ))}
        </div>
        <Separator className="my-8 opacity-50" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings2.map((offering, index) => (
            <OfferingItem 
              key={index} 
              title={offering.title} 
              description={offering.description}
              icon={offering.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};