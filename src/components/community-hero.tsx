// import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[500px] flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/hero-community.jpg')" }}
      />
      <div className="absolute inset-0 bg-hero-bg/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-hero-text mb-6">
            Find SmartBridge Community Events
          </h1>
          <p className="text-xl md:text-2xl text-hero-text/90 mb-8 max-w-3xl mx-auto">
            Connect with innovators, developers, and tech enthusiasts. Join
            events to learn, collaborate, and build the future of technology
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-lg px-8 py-3 bg-black text-white rounded-md shadow hover:bg-zinc-800 transition">
              Join Community
            </button>

            <button className="text-lg px-8 py-3 border border-black text-black hover:bg-black hover:text-white rounded-md shadow transition">
              Explore Events
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

export default HeroSection;
