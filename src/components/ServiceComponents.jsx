import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidBank } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
const ServiceComponents = () => {
  const service = [
    {
      id: 1,
      icon: FaMoneyBillTransfer,
      title: "Free transfers",
      text: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      id: 2,
      icon: BiSolidBank,
      title: "Multiple account",
      text: "Run your operations with cash from your account and generate yield on funds stored in your account.",
    },
    {
      id: 3,
      icon: MdOutlineSecurity,
      title: "Unmatched Security",
      text: "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.",
    },
  ];
  return (
    <div id="future" className="max-w-7xl m-auto p-5 py-10 md:py-16">
      <div className=" bg-white rounded-3xl shadow-md flex flex-col gap-10 p-5 py-10 md:py-16 md:px-16 overflow-hidden">
        <div
          className="flex flex-col gap-5 md:flex-row items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-2 w-full">
            <p className="text-blue-primary text-sm font-semibold tracking-wide">
              FUTURE PAYMENT
            </p>
            <h1 className="text-black-secondary text-3xl font-semibold md:text-5xl flex-1 lg:max-w-xl lg:leading-tight">
              Experience that grows with scale.
            </h1>
          </div>
          <div className="w-full md:w-[60%]">
            <p className="text-gray-600 font-normal tracking-wide text-sm md:text-base">
              Design a financial operating system that works for your business and streamlined cash flow management
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around lg:justify-between gap-6 w-full">
          {service.map((item) => (
            <div
              key={item.id}
              className="md:max-w-80 flex flex-col gap-2 max-h-80 w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <item.icon className="text-blue-primary text-6xl" />
              <h1 className="text-black-primary text-xl font-semibold">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm tracking-wide">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponents;
