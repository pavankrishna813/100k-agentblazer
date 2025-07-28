"use client";
import { GraduationCap, Handshake, Users } from "lucide-react";

export default function HowItWorksSection() {
  const approaches = [
    {
      icon: GraduationCap,
      title: "Academia",
      description:
        "Partnering with universities through structured programs like GenAI Bharat League",
    },
    {
      icon: Handshake,
      title: "Partners",
      description:
        "Collaborating with industry, government, and ecosystem leaders",
    },
    {
      icon: Users,
      title: "Community",
      description: "Trailblazers, mentors, and learners growing together",
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
            How We Make It Happen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center card-hover"
              >
                <div className="text-[hsl(225,100%,60%)] mb-6 flex justify-center">
                  <IconComponent size={48} />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[hsl(0,0%,10%)] mb-4">
                  {approach.title}
                </h3>
                <p className="text-[hsl(0,0%,40%)]">{approach.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
