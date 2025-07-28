// import { Button } from "./ui/button";
"use client";
import { Building, Landmark, Heart, Cloud } from "lucide-react";

export default function PartnersSection() {
  const partnerTypes = [
    { icon: Building, title: "Corporates" },
    { icon: Landmark, title: "Govt. & State Agencies" },
    { icon: Heart, title: "NGOs & EdTechs" },
    { icon: Cloud, title: "Salesforce Ecosystem" },
  ];

  return (
    <section
      id="partners"
      className="bg-[hsl(225,100%,93%)] section-padding pt-16"
    >
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Partner With Us: Powering the Agentforce Movement
          </h2>
          <p className="text-lg text-[hsl(0,0%,40%)] mb-8">
            Collaborate. Co-create. Scale Impact.
          </p>
          <button
            type="button"
            className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Become a Partner
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-6">
              Why Partner With Us
            </h3>
            <p className="text-lg text-[hsl(0,0%,40%)] leading-relaxed mb-8">
              Shape India's future workforce by joining our mission to create
              100,000 skilled Salesforce professionals. Our partnership program
              offers unique opportunities to impact talent development, drive
              innovation, and build lasting relationships in the tech ecosystem.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[hsl(225,100%,60%)] mb-1">
                  100K+
                </div>
                <div className="text-sm text-[hsl(0,0%,40%)]">
                  Learners Reached
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[hsl(225,100%,60%)] mb-1">
                  500+
                </div>
                <div className="text-sm text-[hsl(0,0%,40%)]">Institutions</div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Corporate partnership meeting with diverse professionals"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            Who Can Partner?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center"
                >
                  <div className="text-[hsl(225,100%,60%)] mb-4 flex justify-center">
                    <IconComponent size={32} />
                  </div>
                  <h4 className="font-bold text-[hsl(0,0%,10%)]">
                    {type.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            Our Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-gray-400 text-center text-sm">
                  Partner Logo
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
