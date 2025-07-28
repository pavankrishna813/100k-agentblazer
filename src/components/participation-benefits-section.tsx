"use client";
import { CheckCircle } from "lucide-react";
// import { Button } from "./ui/button";

export default function ParticipationBenefitsSection() {
  const benefits = [
    "Hands-on experience with Salesforce Agentforce",
    "Build and deploy your own AI-powered agent",
    "Learn ethical AI design principles",
    "Solve real business problems with automation",
  ];

  return (
    <section className="bg-[hsl(225,100%,93%)] section-padding">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-3xl font-bold text-[hsl(0,0%,10%)] mb-8">
              Why Should You Participate?
            </h2>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[hsl(225,100%,60%)] mr-3 mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-lg text-[hsl(0,0%,10%)]">{benefit}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Start Learning Today
            </button>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern technology learning environment"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
