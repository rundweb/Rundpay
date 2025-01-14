import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";
import ServiceComponents from "./components/ServiceComponents";

const App = () => {
  return <div className="bg-blue-secondary p-5 flex flex-col gap-4">
    <NavbarComponents/>
    <HomeComponents/>
    <ServiceComponents/>
  </div>;
};

export default App;
