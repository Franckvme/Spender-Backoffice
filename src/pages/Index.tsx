import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import FeatureCards from '../components/FeatureCards/FeatureCards';
import StatsSection from '../components/StatsSection/StatsSection';
import Testimonials from '../components/Testimonials/Testimonials';
import SmartFeatures from '../components/SmartFeatures/SmartFeatures';

import Footer from '../components/Footer/Footer';


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
    <div id="home">
      <HeroSection />
    </div>
      <SmartFeatures />
      <div id="features">
        <FeatureCards />
      </div>
      <StatsSection />
      <Testimonials />
      <div id="pricing">
      </div>
      <Footer />
    </div>
  );
};

export default Index;
