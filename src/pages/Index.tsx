// import Hero from "./components/Hero";
// import ProgramOverview from "./components/ProgramOverview";
// import Academic from "./components/Academic";
// import ProgramOutComes from "./components/ProgramOutcomes";
// // import Stats from "../components/Stats";
// import ProgramHighlights from "./components/ProgramHighlights";
// // import Curriculum from "../components/Curriculum";
// import CareerOpportunities from "./components/CareerOpportunities";
// // import Features from "../components/Features";
// import Timeline from "./components/Timeline";
// // import Benefits from "../components/Benefits";
// import Footer from "./components/Footer";
// import Partners from "./components/Partners";
// import CTA from "./components/CTA";
// import Navbar from "./components/Navbar";
// // import TestiMonials from "../components/Testimonials";
// import Faq from "./components/Faq";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import GoalSection from "../components/goal-section";
import GenAISkillsSection from "../components/genai-skills-section";
import HowItWorksSection from "../components/how-it-works-section";
import ParticipationBenefitsSection from "../components/participation-benefits-section";
import OpenChallengeSection from "../components/open-challenge-section";
import PartnersSection from "../components/partners-section";
import AcademiaSection from "../components/academia-section";
import MentorshipSection from "../components/mentorship-section";
import Footer from "../components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GoalSection />
      <GenAISkillsSection />
      <HowItWorksSection />
      <ParticipationBenefitsSection />
      {/* <OpenChallengeSection /> */}
      {/* <PartnersSection /> */}
      {/* <AcademiaSection /> */}
      {/* <MentorshipSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
