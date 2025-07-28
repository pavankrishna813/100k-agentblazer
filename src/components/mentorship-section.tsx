// import { Button } from "./ui/button";
"use client";
import { Video, PlayCircle, MessageCircle, Quote } from "lucide-react";

export default function MentorshipSection() {
  const features = [
    {
      icon: Video,
      title: "Virtual Pods",
      description: "Small groups of 8-10 learners for personalized attention",
    },
    {
      icon: PlayCircle,
      title: "Live Sessions",
      description: "Weekly interactive sessions with hands-on learning",
    },
    {
      icon: MessageCircle,
      title: "Always-on Community",
      description: "Discord/Slack groups for continuous support",
    },
  ];

  const mentors = [
    { name: "Mentor Name", role: "Salesforce MVP" },
    { name: "Mentor Name", role: "Technical Architect" },
    { name: "Mentor Name", role: "Community Leader" },
  ];

  return (
    <section
      id="mentor"
      className="bg-[hsl(225,100%,93%)] section-padding pt-16"
    >
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Mentorship Circles: Learning with the Experts
          </h2>
          <p className="text-lg text-[hsl(0,0%,40%)] mb-8">
            Guiding learners through real-world skills, one Trail at a time
          </p>
          <button
            type="button"
            className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Apply to Become a Mentor
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-6">
              What is Mentorship Circles?
            </h3>
            <p className="text-lg text-[hsl(0,0%,40%)] leading-relaxed">
              Mentorship Circles create intimate learning pods where 8-10
              learners work closely with experienced Salesforce professionals
              over 3-4 weeks. Through weekly TrailMix & Learn sessions,
              participants gain practical insights, tackle real-world
              challenges, and build lasting connections in the Salesforce
              ecosystem.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Mentorship session with instructor guiding students"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center"
                >
                  <div className="text-[hsl(225,100%,60%)] mb-6 flex justify-center">
                    <IconComponent size={48} />
                  </div>
                  <h4 className="font-montserrat text-xl font-bold text-[hsl(0,0%,10%)] mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-[hsl(0,0%,40%)]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            Led by Salesforce Influencers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">
                  {mentor.name}
                </h4>
                <p className="text-[hsl(0,0%,40%)] text-sm">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-white rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-[hsl(225,100%,60%)] mb-6 flex justify-center">
              <Quote size={48} />
            </div>
            <blockquote className="text-xl text-[hsl(0,0%,10%)] italic mb-6">
              "Mentoring the next generation of Salesforce professionals has
              been incredibly rewarding. Seeing learners transform from
              beginners to confident builders is what drives our community
              forward."
            </blockquote>
            <div className="font-bold text-[hsl(0,0%,10%)]">
              - Sample Mentor Quote
            </div>
            <div className="text-[hsl(0,0%,40%)]">Salesforce MVP & Mentor</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
