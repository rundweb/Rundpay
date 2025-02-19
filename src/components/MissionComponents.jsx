import { IoMdArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { pricingPlus, pricingPremium } from "../assets/data/data";
import gsap from "gsap";
const MissionComponents = () => {
  const mission = [
    {
      id: 1,
      angka: "24%",
      title: "Revenue business",
    },
    {
      id: 2,
      angka: "180K",
      title: "In annual revenue",
    },
    {
      id: 3,
      angka: "10+",
      title: "Months of runway",
    },
  ];

  const [openPlant, setOpenPlan] = useState(true);
  const [openPlant2, setOpenPlan2] = useState(true);

  const handleClick = () => {
    gsap.fromTo(
      ".box-plant",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
    setOpenPlan(false);
  };

  const handleClick2 = () => {
    gsap.fromTo(
      ".box-plant",
      { scale: 0 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
    setOpenPlan2(false);
  };
  return (
    <div
      className="max-w-7xl m-auto w-full p-5 flex flex-col gap-10 items-center py-10 md:py-16"
      id="mission"
    >
      <div
        className="flex flex-col gap-2 text-center items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-blue-primary text-base font-semibold tracking-wide">
          OUR MISSION
        </h2>
        <h1 className="text-black-secondary text-3xl font-semibold md:text-5xl flex-1 lg:leading-tight lg:max-w-lg">
          We`ve helped innovative companies
        </h1>
        <p className="text-gray-600 font-medium tracking-wide text-base mt-2 max-w-sm">
          Hundreds of all sizes and across all industries have mad a big
          improvements with us.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-around text-center gap-4 md:gap-20 my-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {mission.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <h1 className="text-black-secondary text-5xl font-bold">
              {item.angka}
            </h1>
            <p className="text-black-secondary font-medium">{item.title}</p>
          </div>
        ))}
      </div>
      <h1
        className="font-semibold text-black-secondary"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        CHOSSE PLAN :
      </h1>
      <div className="flex flex-col gap-10 w-full md:flex-row items-center justify-center">
        <div
          className="w-full max-w-md"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div
            className="group bg-gray-100 h-56 lg:h-60 rounded-xl shadow-lg p-10 flex flex-col justify-between max-w-md w-full cursor-pointer hover:scale-110  duration-500 ease-in-out"
            onClick={handleClick}
          >
            <h1 className="text-3xl font-bold text-black-secondary">Plus</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-black-secondary">
                $2.99
              </h1>
              <IoMdArrowForward className=" text-3xl -rotate-45 text-black-secondary group-hover:scale-110 group-hover:text-blue-primary ease-in-out duration-500" />
            </div>
          </div>
        </div>
        <div
          className="w-full max-w-md"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div onClick={handleClick2} className="group bg-card bg-cover h-56 lg:h-60 rounded-xl shadow-lg p-10 flex flex-col justify-between max-w-md w-full cursor-pointer hover:scale-110  duration-500 ease-in-out">
            <h1 className="text-3xl font-bold text-white">Premium</h1>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-white">$6.99</h1>
              <IoMdArrowForward className=" text-3xl -rotate-45 text-white group-hover:text-black-primary ease-in-out duration-500" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed p-5 w-full min-h-screen bg-white/50 filter backdrop-blur-md left-0 top-0 z-[600] items-center justify-center ${
          openPlant ? "hidden" : "flex"
        }`}
      >
        <div className="box-plant flex flex-col gap-8 max-w-96 bg-white rounded-xl p-5 py-10 shadow-2xl relative">
          <div
            className="absolute right-5 top-10 cursor-pointer"
            onClick={() => setOpenPlan(!openPlant)}
          >
            <IoCloseOutline className="text-black-primary text-4xl" />
          </div>
          <h1 className="bg-blue-primary text-white h-10 w-max font-semibold tracking-wide flex items-center justify-center px-4 rounded-xl">
            Plus
          </h1>
          <h2 className="text-black-primary/90 tracking-wide text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            perspiciatis dolores quo assumenda hic aliquam.
          </h2>
          <h3 className="font-bold text-black-primary text-3xl tracking-wide md:text-5xl">
            $2.99{" "}
            <span className="text-sm font-normal text-black-primary/80">
              /month
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {pricingPlus.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-start gap-4 text-black-primary"
              >
                <div>
                  <FaCheck />
                </div>
                <h4 className="tracking-wide font-medium">{item}</h4>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <a
              href=""
              className="text-black-primary h-12 hover:bg-blue-primary hover:text-white duration-300 ease-in-out flex items-center justify-center border-2 border-blue-secondary w-full rounded-xl font-medium tracking-wide"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed p-5 w-full min-h-screen bg-white/50 filter backdrop-blur-md left-0 top-0 z-[600] items-center justify-center ${
          openPlant2 ? "hidden" : "flex"
        }`}
      >
        <div className="box-plant flex flex-col gap-8 max-w-96 bg-blue-primary rounded-xl p-5 py-10 shadow-2xl relative">
          <div
            className="absolute right-5 top-10 cursor-pointer"
            onClick={() => setOpenPlan2(!openPlant2)}
          >
            <IoCloseOutline className="text-black-primary text-4xl" />
          </div>
          <h1 className="bg-white text-blue-primary h-10 w-max font-semibold tracking-wide flex items-center justify-center px-4 rounded-xl">
            Premium
          </h1>
          <h2 className="text-white tracking-wide text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            perspiciatis dolores quo assumenda hic aliquam.
          </h2>
          <h3 className="font-bold text-white text-3xl tracking-wide md:text-5xl">
            $6.99{" "}
            <span className="text-sm font-normal text-white">
              /month
            </span>
          </h3>
          <div className="flex flex-col gap-2">
            {pricingPremium.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-start gap-4 text-white"
              >
                <div>
                  <FaCheck />
                </div>
                <h4 className="tracking-wide font-medium">{item}</h4>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <a
              href=""
              className="h-12 hover:bg-white hover:text-blue-primary duration-300 ease-in-out flex items-center justify-center border-2 border-blue-secondary w-full rounded-xl font-medium tracking-wide text-white"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComponents;
