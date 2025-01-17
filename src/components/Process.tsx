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
    <section className="py-20 md:py-40" id="process">
      <div className="container px-4 md:px-24">
        <div className="bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5] rounded-xl p-6 md:p-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">Our Process</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-16 text-center max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
          <div className="relative max-w-2xl mx-auto">
            {/* Central timeline line with gradient fade - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[#2A2A2A] to-transparent opacity-20" />
            
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center mb-8 md:mb-16 last:mb-0">
                {/* Content wrapper */}
                <div className={`flex items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}>
                  {/* Icon circle - left for mobile, centered for desktop */}
                  <div className={`relative z-10 shrink-0 ${
                    index % 2 === 0 
                      ? 'md:absolute md:left-1/2 md:-translate-x-1/2' 
                      : 'md:absolute md:left-1/2 md:-translate-x-1/2'
                  }`}>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        {<step.icon size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Text content - always on right for mobile, alternating for desktop */}
                  <div className={`flex-1 pl-4 md:pl-0 ${
                    index % 2 === 0 
                      ? 'md:text-right md:pr-16' 
                      : 'md:text-left md:pl-16'
                  } text-left`}>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                  </div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};