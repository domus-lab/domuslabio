import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const pricingPlans = [
    {
      title: "MVP Start-up",
      price: "$2,999",
      period: "month",
      description: "For early stage founders looking to launch their first MVP",
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
      price: "$6,999",
      period: "month",
      description: "For founders with existing projects and ready to scale",
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
      price: "Contact us",
      period: null,
      description: "For enterprise looking to improve their operations and launch new products",
      features: [
        "Complete analysis of your ops",
        "Build digital solutions with modern stack",
        "Full deploy of AWS infrastructure with dedicated solution architect",
        "Weekly updates and extremely transparent process"
      ]
    }
  ];

  return (
    <section className="py-32" id="pricing">
      <div className="container px-8 md:px-16">
        <div className="bg-gradient-to-r from-[#accbee] to-[#e7f0fd] rounded-xl p-8 md:p-16">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Pricing</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Transparent pricing options tailored to your project's needs and scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`${
                  index === 1 
                    ? "border-2 border-[#222222] shadow-lg transform -translate-y-4 hover:-translate-y-6 transition-all duration-300" 
                    : "border-0 hover:-translate-y-2 transition-transform duration-300"
                } bg-white z-10 relative flex flex-col`}
              >
                <CardHeader>
                  <CardTitle className="text-gray-800 mb-6">{plan.title}</CardTitle>
                  <span className="text-sm text-gray-500 mb-1 block">Starting from</span>
                  <div className="mt-4 mb-6">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span 
                          className="text-sm text-gray-600"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-auto ${
                      index === 1 
                        ? "bg-[#0a0a0a] hover:bg-[#222222] text-white" 
                        : "bg-[#222222] hover:bg-[#333333] text-white"
                    }`}
                    onClick={() => window.open('https://cal.com/juan-luis-gv-swcapy/30min', '_blank')}
                  >
                    Connect with us
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