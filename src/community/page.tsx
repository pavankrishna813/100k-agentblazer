import Navbar from "../components/navbar";

import CommunityHero from "../components/community-hero";
import EventsGrid from "../components/EventsGrid";
import Footer from "../components/footer";

const Mentor = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <CommunityHero />
      <EventsGrid />
      <Footer />
    </div>
  );
};

export default Mentor;
