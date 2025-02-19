import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";
import { PiBankFill } from "react-icons/pi";
import homeLogo1 from "../assets/images/logohome1.svg";
import homeLogo2 from "../assets/images/logohome2.svg";
import homeLogo3 from "../assets/images/logohome3.svg";
const HomeComponents = () => {
  const imgHome = [homeLogo1, homeLogo2, homeLogo3];
  return (
    <div id="home" className="flex flex-col max-w-7xl m-auto p-5 gap-10 md:flex-row items-center justify-between py-10 md:py-16 min-h-screen mt-10">
      <div
        className="flex flex-col gap-5 text-center w-full md:text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-black-secondary text-3xl font-bold tracking-normal sm:text-4xl lg:text-6xl lg:leading-snug md:max-w-4xl">
          Get paid early <br className="hidden md:block" /> save automatically
          all your pay.
        </h1>
        <p className="text-black-secondary text-sm font-normal tracking-wider md:text-base md:w-4/5 lg:mb-5">
          Supports small businesses with simple invoicing, powerfull
          integrations, and cash flow management tools.
        </p>
        <div className="flex flex-col gap-2 relative lg:max-w-lg">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email"
            className="w-full h-12 lg:h-14 rounded-xl px-5 outline-blue-primary text-black-secondary/80"
          />
          <div className="w-full cursor-pointer bg-blue-primary h-12  rounded-xl flex items-center justify-center lg:absolute lg:w-max px-8 right-1 lg:h-[90%] lg:top-2/4 lg:-translate-y-2/4 hover:bg-black-secondary duration-300 ease-in-out">
            <a href="" className="text-white tracking-wide">Get Started</a>
          </div>
        </div>
        <div className="hidden lg:flex flex-wrap items-center justify-center lg:justify-start gap-10 mt-7">
          {imgHome.map((item, i) => (
            <div key={i}>
              <img src={item} alt="logo-sponsor" className="w-40 opacity-90" />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center relative"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="absolute max-w-56 bg-white w-full rounded-2xl overflow-hidden max-h-72 h-full lg:flex flex-col justify-between -top-[10%] right-0 hidden">
          <div className="bg-blue-primary h-full p-7 flex flex-col gap-1">
            <p className="text-white font-normal text-sm tracking-wide">
              Credit Card
            </p>
            <p className="text-white font-semibold text-xl">234 **** ****</p>
          </div>
          <div className="bg-black-secondary flex items-center justify-between text-white py-4 px-7">
            <RiVisaLine className="text-5xl" />
            <IoIosWifi className="text-4xl rotate-90" />
          </div>
        </div>
        <div className="bg-white shadow-sm max-w-md w-full rounded-3xl py-5 px-5 flex flex-col gap-5 ">
          <div className="flex items-center gap-2">
            <RiMoneyDollarCircleFill className="text-5xl text-blue-primary" />
            <div>
              <h5 className="text-black-secondary text-sm font-semibold">
                Rundweb inhouse
              </h5>
              <p className="text-black-secondary text-xs font-medium tracking-wide">
                rundwebinhouse@gmail.co.id
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border-2 rounded-xl p-4 flex flex-col gap-1">
              <p className="text-black-secondary font-medium text-sm">
                Invoice
              </p>
              <h1 className="text-black-primary font-semibold text-3xl">
                $1,987,580
              </h1>
              <p className="text-black-secondary font-medium text-sm">
                January 14, 2025
              </p>
            </div>
            <div className="border-2 rounded-xl p-4 flex gap-3 items-center">
              <FaMoneyCheck className="text-black-secondary text-2xl" />
              <p className="text-black-secondary font-semibold text-sm">
                Credit Card
              </p>
            </div>
            <div className="border-2 rounded-xl p-4 flex gap-3 items-center">
              <PiBankFill className="text-black-secondary text-2xl" />
              <p className="text-black-secondary font-semibold text-sm">
                Bank Account
              </p>
            </div>
          </div>
          <a
            href=""
            className="bg-black-secondary rounded-xl text-white text-center py-2 font-semibold"
          >
            Pay
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents;
