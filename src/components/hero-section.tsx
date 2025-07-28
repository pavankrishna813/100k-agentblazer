// import { Button } from "./ui/button";
"use client";
export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-white section-padding ">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="lg:pr-8">
            <h1 className="font-montserrat text-4xl lg:text-5xl font-bold text-[hsl(0,0%,10%)] leading-tight mb-6">
              Empowering 100,000 learners with Salesforce Agentforce skills
              across Bharat
            </h1>
            <p className="text-lg text-[hsl(0,0%,40%)] mb-8 leading-relaxed">
              A national talent movement to upskill students and professionals
              with cutting-edge Salesforce and AI capabilities, creating a
              future-ready force of Agentblazers across India.
            </p>
            <button
              type="button"
              className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            >
              Join the Movement
            </button>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Students collaborating on technology projects"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
