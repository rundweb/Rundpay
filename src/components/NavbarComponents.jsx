import { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

import {menu} from "../assets/data/data";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavbarComponents = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const classNav = document.querySelectorAll(".navbar-link");

  classNav.forEach((item) => {
    item.addEventListener("click", () => {
      setOpenMenu(true);
    });
  });

  const [scrollNav, setScrollNav] = useState(true);

  useEffect(() => {
    const navScroll = () => {
      window.scrollY > 10 ? setScrollNav(false) : setScrollNav(true);
    };

    window.addEventListener("scroll", navScroll);
  }, []);

  const navigate = useNavigate();
  return (
    <div
      className={`fixed w-full z-[100] ${
        scrollNav ? "bg-transparent" : "bg-white shadow-xl "
      } duration-300 ease-in-out overflow-hidden`}
    >
      <div className="flex items-center p-5 justify-between w-full max-w-7xl m-auto">
        <div
          className="nav-logo relative z-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a
            href=""
            className="text-2xl md:text-3xl font-bold text-black-secondary"
          >
            Rund<span className="text-blue-primary">Pay</span>
          </a>
        </div>
        {/* navbar for mobile */}
        <div
          className={`flex md:hidden flex-col items-center justify-center fixed top-0  bg-white min-h-full w-full z-10 gap-6 ease-in-out duration-500 ${
            openMenu ? "-right-full" : "right-0"
          }`}
        >
          <div className="nav-menu flex flex-col items-center justify-center gap-2">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                smooth={true}
                duration={600}
                offset={-50}
                className="navbar-link text-black-secondary cursor-pointer font-semibold text-xl ease-in-out duration-300 hover:text-blue-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="btn-navbar flex flex-col gap-3 items-center justify-center">
            <div onClick={() => navigate("/login")} className="font-semibold cursor-pointer text-lg border-2 w-52 text-center py-1 rounded-xl border-blue-primary text-blue-primary ease-in-out duration-300 hover:bg-blue-primary hover:text-white">
              Login
            </div>
            <div onClick={() => navigate("/signup")} className="font-semibold cursor-pointer text-lg bg-blue-primary w-52 text-center py-1 rounded-xl text-white border-2 border-blue-primary ease-in-out duration-300 hover:bg-blue-primary hover:text-white">
              Sign Up
            </div>
          </div>
        </div>

        {/* btn toggle */}
        {openMenu ? (
          <CgMenu
            className="relative md:hidden z-20 text-2xl text-black-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <MdOutlineClose
            className="relative md:hidden z-20 text-2xl text-black-secondary"
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}

        {/* menu web */}
        <div
          className=" hidden md:flex items-center gap-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {menu.map((item) => (
            <Link
              to={item.link}
              smooth={true}
              duration={600}
              offset={-50}
              key={item.name}
              className="text-base font-normal cursor-pointer text-black-secondary ease-in-out duration-300 hover:text-blue-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className=" hidden md:flex gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            onClick={() => navigate("/login")}
            className="font-semibold text-sm cursor-pointer border-2 text-center py-2 px-6 rounded-xl border-blue-primary text-blue-primary
            ease-in-out duration-300 hover:bg-blue-primary hover:text-white"
          >
            Login
          </div>
          <div onClick={() => navigate("/signup")}
            className="font-semibold text-sm cursor-pointer bg-blue-primary text-center py-2 px-6 rounded-xl text-white border-2 border-blue-primary
            ease-in-out duration-300 hover:bg-transparent hover:text-blue-primary"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
