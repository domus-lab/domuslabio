import { Users, ClipboardList, FileCheck, Repeat2, Rocket, Wrench } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation call",
      description: "We discuss your vision, goals, and requirements. No commitments!",
      icon: Users,
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed roadmap and technical specifications",
      icon: ClipboardList,
    },
    {
      number: "03",
      title: "Project agreement",
      description: "We align on deliverables, timeline, and costs",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "Development Sprints",
      description: "Regular development cycles with continuous feedback",
      icon: Repeat2,
    },
    {
      number: "05",
      title: "Easy release process",
      description: "We deploy your solution and ensure smooth operation",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and improvements as needed",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20" id="process">
      <div className="container px-4">
        <div className="bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5] rounded-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Our Process</h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
          <div className="relative max-w-2xl mx-auto">
            {/* Central timeline line with gradient fade */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent opacity-20" />
            
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center mb-16 last:mb-0">
                {/* Content wrapper */}
                <div className={`flex items-center w-full ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Text content */}
                  <div className={`w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        {<step.icon size={24} />}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};