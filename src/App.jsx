import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas setiap kali halaman berubah
    }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </>
  );
};

export default App;
