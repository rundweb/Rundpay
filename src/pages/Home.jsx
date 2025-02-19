import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import HomeComponents from "../components/HomeComponents";
import MissionComponents from "../components/MissionComponents";
import NavbarComponents from "../components/NavbarComponents";
import ServiceComponents from "../components/ServiceComponents";
import StepsComponents from "../components/StepsComponents";
import WhyusComponents from "../components/WhyusComponents";

const Home = () => {
  return (
    <div className="bg-blue-secondary overflow-hidden">
      <NavbarComponents />
      <HomeComponents />
      <ServiceComponents />
      <WhyusComponents />
      <StepsComponents />
      <MissionComponents />
      <ContactComponents />
      <FooterComponents />
    </div>
  );
};

export default Home;
