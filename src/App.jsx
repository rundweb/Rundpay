import { useEffect } from "react";
import ContactComponents from "./components/ContactComponents";
import FooterComponents from "./components/FooterComponents";
import HomeComponents from "./components/HomeComponents";
import MissionComponents from "./components/MissionComponents";
import NavbarComponents from "./components/NavbarComponents";
import ServiceComponents from "./components/ServiceComponents";
import StepsComponents from "./components/StepsComponents";
import WhyusComponents from "./components/WhyusComponents";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-blue-secondary flex flex-col gap-5 items-center overflow-hidden">
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

export default App;
