import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Services from "../components/Services";
import PortfolioPreview from "../components/PortfolioPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;