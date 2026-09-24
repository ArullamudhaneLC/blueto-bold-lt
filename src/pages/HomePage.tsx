import Hero from '../components/home/Hero';
import Marquee from '../components/ui/Marquee';
import FlipRolesSpotlight from '../components/home/FlipRolesSpotlight';
import SeekerSignup from '../components/home/SeekerSignup';
import About from '../components/home/About';
import Products from '../components/home/Products';
import Contact from '../components/home/Contact';
import { marqueeRoles } from '../content/fliproles';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage = () => {
  usePageMeta();

  return (
    <>
      <Hero />
      <Marquee items={marqueeRoles} label="Roles you can try" />
      <FlipRolesSpotlight />
      <SeekerSignup />
      <About />
      <Products />
      <Contact />
    </>
  );
};

export default HomePage;
