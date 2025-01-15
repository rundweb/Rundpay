import { MdPayments } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { BiSolidBank } from "react-icons/bi";
import card from "../assets/images/card.png";
const WhyusComponents = () => {
  return (
    <div className="max-w-7xl m-auto w-full flex flex-col gap-5 py-5 lg:gap-10 lg:my-10">
      <div className="flex flex-col gap-2 text-center lg:mb-5">
        <p className="text-blue-primary font-bold text-lg lg:text-xl">WHY US</p>
        <h1 className="text-black-secondary font-bold text-3xl tracking-wide lg:text-4xl">
          Why they prefer Rund<span className="text-blue-primary">Pay</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 md:flex-row lg:gap-10">
        <div className="w-full shadow-lg h-60 rounded-2xl p-10 flex flex-col gap-7 justify-center lg:h-80">
          <h1 className="text-blue-primary text-5xl font-bold lg:text-8xl">3K+</h1>
          <h2 className="text-black-secondary text-xl font-semibold lg:text-3xl lg:w-3/4">
            Businesses already running on Rund<span>Pay</span>
          </h2>
        </div>
        <div className="w-full shadow-lg h-60 rounded-2xl p-10 flex flex-col gap-9 justify-center lg:h-80">
          <h2 className="text-black-secondary text-xl font-semibold lg:text-3xl lg:w-4/5">
            Instant Withdraw your funds at any time
          </h2>
          <div className="flex items-center justify-between lg:justify-center lg:gap-20">
            <MdPayments className="bg-blue-primary text-white text-6xl p-3 rounded-2xl lg:text-7xl"/>
            <BiTransfer className="text-5xl lg:text-7xl"/>
            <BiSolidBank className="bg-black-secondary text-white text-6xl p-3 rounded-2xl lg:text-7xl"/>
          </div>
        </div>
      </div>
      <div className="w-full shadow-lg rounded-2xl p-5 flex flex-col justify-center lg:py-10 lg:px-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-center lg:gap-10">
          <div className="flex flex-col gap-2 lg:gap-5">
            <h1 className="text-black-secondary font-semibold text-xl lg:text-4xl">No asset volatility</h1>
            <p className="text-gray-600 font-normal tracking-wide text-sm lg:w-3/4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              illum?
            </p>
          </div>
          <div>
            <img src={card} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyusComponents;
