// import { Button } from "./ui/button";
"use client";
import { Trophy, Award, Rocket } from "lucide-react";

export default function AcademiaSection() {
  const programs = [
    {
      icon: Trophy,
      title: "GenAI Bharat League",
      description:
        "Competitive learning program fostering innovation in AI and automation",
    },
    {
      icon: Award,
      title: "Credit-aligned Certification",
      description: "Structured programs that integrate with academic curricula",
    },
    {
      icon: Rocket,
      title: "Trailhead Enablement Bootcamps",
      description: "Intensive hands-on workshops for rapid skill development",
    },
  ];

  return (
    <section id="academia" className="bg-white section-padding pt-16">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Academic Institutions Driving the Future of AI Skills
          </h2>
          <p className="text-lg text-[hsl(0,0%,40%)] mb-8">
            Partnering with colleges to deliver structured Salesforce Agentforce
            programs
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            Programs Offered
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-[hsl(225,100%,93%)] rounded-xl p-8 card-hover"
                >
                  <div className="text-[hsl(225,100%,60%)] mb-6 flex justify-center">
                    <IconComponent size={48} />
                  </div>
                  <h4 className="font-montserrat text-xl font-bold text-[hsl(0,0%,10%)] mb-4">
                    {program.title}
                  </h4>
                  <p className="text-[hsl(0,0%,40%)]">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Join as an Academic Partner
          </button>
        </div>
      </div>
    </section>
  );
}
