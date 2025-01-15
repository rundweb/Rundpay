import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const NavbarComponents = () => {
  const menu = [
    {
      name: "Product",
      link: "#product",
    },
    {
      name: "Customers",
      link: "#cust",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Learn",
      link: "#learn",
    },
  ];

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="flex items-center p-5 justify-between w-full max-w-7xl m-auto">
      <div className="nav-logo relative z-20">
        <a href="" className="text-2xl md:text-3xl font-bold text-black-primary">
          Rund<span className="text-blue-primary">Pay</span>
        </a>
      </div>
      {/* navbar for mobile */}
      <div
        className={`flex md:hidden flex-col items-center justify-center fixed top-0  bg-blue-secondary min-h-full w-full z-10 gap-6 ease-in-out duration-500 ${
          openMenu ? "-right-full" : "right-0"
        }`}
      >
        <div className="nav-menu flex flex-col items-center justify-center gap-2">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-black-secondary font-semibold text-xl ease-in-out duration-300 hover:text-blue-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="btn-navbar flex flex-col gap-3 items-center justify-center">
          <a
            href=""
            className="font-semibold text-lg border-2 w-52 text-center py-1 rounded-md border-blue-primary text-blue-primary ease-in-out duration-300 hover:bg-blue-primary hover:text-white"
          >
            Login
          </a>
          <a
            href=""
            className="font-semibold text-lg bg-blue-primary w-52 text-center py-1 rounded-md text-white border-2 border-blue-primary ease-in-out duration-300 hover:bg-blue-primary hover:text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* btn toggle */}
      {openMenu ? (
        <CgMenu
          className="relative md:hidden z-20 text-2xl text-black-secondary"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <MdOutlineClose
          className="relative md:hidden z-20 text-2xl text-black-secondary"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}

      {/* menu web */}
      <div className="hidden md:flex gap-10 items-center">
        <div className="flex items-center gap-5">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-base font-medium text-black-secondary ease-in-out duration-300 hover:text-blue-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href=""
            className="font-semibold text-sm border-2 text-center py-2 px-6 rounded-md border-blue-primary text-blue-primary
            ease-in-out duration-300 hover:bg-blue-primary hover:text-white"
          >
            Login
          </a>
          <a
            href=""
            className="font-semibold text-sm bg-blue-primary text-center py-2 px-6 rounded-md text-white border-2 border-blue-primary
            ease-in-out duration-300 hover:bg-white hover:text-blue-primary"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
