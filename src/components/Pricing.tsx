import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const pricingPlans = [
    {
      title: "MVP Start-up",
      description: "Start your business building an MVP",
      features: [
        "Complete MVP development <i>usually</i> in less than a month",
        "Build Web and App using modern stack",
        "Deploy basic infrastructure in AWS",
        "Robust code and founder-led development",
        "Weekly updates and extremely transparent process"
      ]
    },
    {
      title: "Growth",
      description: "Start your business building an MVP",
      features: [
        "Complete MVP development <i>usually</i> in less than a month",
        "Build Web and App using modern stack",
        "Deploy basic infrastructure in AWS",
        "Robust code and founder-led development",
        "Weekly updates and extremely transparent process"
      ]
    },
    {
      title: "Enterprise",
      description: "Supporting existing enterprise business",
      features: [
        "Complete analysis of your ops",
        "Build digital solutions with modern stack",
        "Full deploy of AWS infrastructure with dedicated solution architect",
        "Weekly updates and extremely transparent process"
      ]
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container px-4">
        <div className="bg-gradient-to-r from-[#accbee] to-[#e7f0fd] rounded-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Pricing</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Transparent pricing options tailored to your project's needs and scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`${index === 1 ? "border-primary" : ""} bg-white z-10 relative`}>
                <CardHeader>
                  <CardTitle className="text-gray-800">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    {index === 2 ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};