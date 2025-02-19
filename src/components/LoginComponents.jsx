import gifLogin from "../assets/images/login.jpg";

import NavbarComponents from "./NavbarComponents";
import { useState } from "react";
import gsap from "gsap";
import LoginPages from "./LoginPages";
import RegisterPages from "./RegisterPages";
const LoginComponents = () => {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    gsap.fromTo(
      ".img-login",
      { x: "-110%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".form-login",
      { x: "110%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );
    setChange(false);
  };

  const handleChange2 = () => {
    gsap.fromTo(
      ".img-login",
      { x: "110%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".form-login",
      { x: "-110%" },
      { x: 0, duration: 2, ease: "power2.out" }
    );
    setChange(true);
  };
  return (
    <div className="bg-blue-secondary overflow-hidden">
      <NavbarComponents />
      <div
        className="min-h-screen max-w-7xl m-auto p-5 flex items-center justify-between pt-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className={`overflow-hidden border-2 border-white flex items-center justify-between p-5 rounded-xl gap-5 lg:gap-20 w-full ${
            change ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="w-full hidden md:flex img-login relative z-10">
            <img
              src={gifLogin}
              alt="img-login"
              className="h-[500px] object-cover rounded-xl w-full"
            />
          </div>
          <div className="w-full form-login ">
            {change ? (
              <LoginPages click={handleChange} />
            ) : (
              <RegisterPages click={handleChange2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
