import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import ServiceComponents from "./components/ServiceComponents";
import StepsComponents from "./components/StepsComponents";
import WhyusComponents from "./components/WhyusComponents";

const App = () => {
  return <div className="bg-blue-secondary flex flex-col gap-5 items-center">
    <NavbarComponents/>
    <HomeComponents/>
    <ServiceComponents/>
    <WhyusComponents/>
    <StepsComponents/>
  </div>;
};

export default App;
