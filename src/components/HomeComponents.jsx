import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaMoneyCheck } from "react-icons/fa6";
import { PiBankFill } from "react-icons/pi";
const HomeComponents = () => {
  return (
    <div
      className="flex flex-col p-5 gap-10 overflow-hidden items-center 
      md:flex-row max-w-7xl m-auto md:justify-between
      lg:-mt-5
    "
    >
      <div className="flex flex-col gap-5 text-center w-full md:text-left">
        <h1 className="text-black-secondary text-2xl font-bold tracking-normal sm:leading-[54px] sm:text-4xl lg:text-6xl lg:leading-[80px]">
          Get paid early save automatically all your pay.
        </h1>
        <p className="text-black-secondary text-sm font-normal tracking-wider md:text-base md:w-4/5">
          Suports small businesses with simple invoicing, powerfull
          integrations, and cash flow management tools.
        </p>
        <div className="btn-home w-full flex items-center justify-between relative md:w-4/5">
          <input
            type="text"
            placeholder="Your bussiness email"
            className="border-2 w-full px-2 py-3 rounded-lg text-sm outline-blue-primary md:px-4 md:py-5 placeholder:text-sm"
          />
          <a
            href=""
            className="absolute flex items-center right-[4px] bg-blue-primary h-[85%] rounded-lg text-sm text-white font-medium px-4 md:px-6 gap-3"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative">
        <div className="absolute max-w-56 bg-white w-full rounded-2xl overflow-hidden max-h-72 h-full lg:flex flex-col justify-between -top-[10%] right-0 hidden">
          <div className="bg-blue-primary h-full p-7 flex flex-col gap-1">
            <p className="text-white font-normal text-sm tracking-wide">Credit Card</p>
            <p className="text-white font-semibold text-xl">234 **** ****</p>
          </div>
          <div className="bg-black-secondary flex items-center justify-between text-white py-4 px-7">
            <RiVisaLine className="text-5xl"/>
            <IoIosWifi className="text-4xl rotate-90"/>
          </div>
        </div>
        <div className="bg-white shadow-sm max-w-md w-full rounded-3xl py-5 px-5 flex flex-col gap-5">
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
