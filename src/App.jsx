import HomeComponents from "./components/HomeComponents";
import NavbarComponents from "./components/NavbarComponents";

const App = () => {
  return <div className="bg-blue-secondary">
    <NavbarComponents/>
    <HomeComponents/>
  </div>;
};

export default App;
