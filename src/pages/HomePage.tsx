import Hero from '../components/home/Hero';
import RoleMarquee from '../components/home/RoleMarquee';
import FlipRolesSpotlight from '../components/home/FlipRolesSpotlight';
import SeekerSignup from '../components/home/SeekerSignup';
import About from '../components/home/About';
import Products from '../components/home/Products';
import Contact from '../components/home/Contact';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage = () => {
  usePageMeta();

  return (
    <>
      <Hero />
      <RoleMarquee />
      <FlipRolesSpotlight />
      <SeekerSignup />
      <About />
      <Products />
      <Contact />
    </>
  );
};

export default HomePage;
