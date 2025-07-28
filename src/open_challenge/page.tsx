import Navbar from "../components/navbar";

import OpenChallengeSection from "../components/open-challenge-section";

import Footer from "../components/footer";

const challenge = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <OpenChallengeSection />

      <Footer />
    </div>
  );
};

export default challenge;
