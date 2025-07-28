"use client";
export default function GenAISkillsSection() {
  const stats = [
    { value: "85%", description: "of orgs adopting AI agents in 2 years" },
    { value: "30+", description: "hours saved per employee/month" },
    { value: "74%", description: "of customers expect AI-enhanced service" },
    { value: "40%", description: "faster problem resolution with GenAI" },
  ];

  return (
    <section className="bg-[hsl(225,100%,93%)] section-padding">
      <div className="container-padding max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl font-bold text-[hsl(0,0%,10%)] mb-4">
            Why GenAI Skills Matter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-[hsl(225,100%,60%)] text-3xl font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-[hsl(0,0%,40%)]">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI technology and digital transformation concept"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg text-[hsl(0,0%,10%)] leading-relaxed">
                AI fluency is no longer optional in today's workplace.
                Organizations are rapidly adopting AI-powered solutions to
                enhance productivity, improve customer experiences, and drive
                innovation. GenAI skills empower professionals to leverage these
                technologies effectively, making them invaluable assets in an
                AI-driven economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
