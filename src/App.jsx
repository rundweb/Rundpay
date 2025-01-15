import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import ServiceComponents from "./components/ServiceComponents";
import WhyusComponents from "./components/WhyusComponents";

const App = () => {
  return <div className="bg-blue-secondary p-5 flex flex-col gap-5 items-center">
    <NavbarComponents/>
    <HomeComponents/>
    <ServiceComponents/>
    <WhyusComponents/>
  </div>;
};

export default App;
