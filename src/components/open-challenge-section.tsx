// import { Button } from "./ui/button";
"use client";
import Leaderboard from "./leaderboard";
import {
  Trophy,
  Gift,
  Star,
  Shirt,
  PartyPopper,
  Award,
  Calendar,
} from "lucide-react";

export default function OpenChallengeSection() {
  const steps = [
    "Register on the SmartBridge platform",
    "Complete learning & earn the Agentforce badge",
    "Share progress using hashtag (#AgentforceChallenge)",
    "Climb leaderboard with each module and post",
  ];

  const awards = [
    { icon: Gift, title: "Top 50", description: "Amazon vouchers" },
    {
      icon: Star,
      title: "Social Stars",
      description: "Featured for engaging posts",
    },
    { icon: Shirt, title: "Swag Packs", description: "T-shirts, stickers" },
    {
      icon: PartyPopper,
      title: "PartyPopper Rewards",
      description: "Spot rewards",
    },
    { icon: Award, title: "Certification", description: "Vouchers" },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Special invitations",
    },
  ];

  return (
    <section id="challenge" className="bg-white section-padding pt-16">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-[hsl(0,0%,10%)] mb-4">
            The Agentforce Open Challenge
          </h2>
          <p className="text-lg text-[hsl(0,0%,40%)] mb-8">
            A nationwide sprint to skill up, stand out, and shine in the
            Salesforce ecosystem
          </p>
          <button
            type="button"
            className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Register Now
          </button>
        </div>

        <div className="mb-16">
          <Leaderboard />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-6">
              What Is the Challenge?
            </h3>
            <div className="bg-[hsl(225,100%,93%)] rounded-xl p-8">
              <div className="text-[hsl(225,100%,60%)] mb-4 flex justify-center">
                <Trophy size={48} />
              </div>
              <p className="text-[hsl(0,0%,10%)] text-lg leading-relaxed">
                High-energy, national competition to fast-track Salesforce + AI
                skills. Complete modules, earn badges, share your journey, and
                climb the leaderboard.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-6">
              How It Works
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[hsl(225,100%,60%)] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-[hsl(0,0%,10%)]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-montserrat text-2xl font-bold text-[hsl(0,0%,10%)] mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center"
                >
                  <div className="text-[hsl(225,100%,60%)] mb-4 flex justify-center">
                    <IconComponent size={32} />
                  </div>
                  <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">
                    {award.title}
                  </h4>
                  <p className="text-[hsl(0,0%,40%)]">{award.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
