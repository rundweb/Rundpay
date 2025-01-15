import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiSolidBank } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
const ServiceComponents = () => {
  const service = [
    {
      id: 1,
      icon: FaMoneyBillTransfer,
      title: "Free transfers",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero cumque voluptatibus quasi.",
    },
    {
      id: 2,
      icon: BiSolidBank,
      title: "Multiple account",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero cumque voluptatibus quasi.",
    },
    {
      id: 3,
      icon: MdOutlineSecurity,
      title: "Unmatched Security",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero cumque voluptatibus quasi.",
    },
  ];
  return (
    <div className="p-5">
      <div className="flex flex-col p-10 max-w-7xl m-auto items-center gap-10 bg-white rounded-2xl lg:px-20 lg:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-blue-primary text-sm font-semibold tracking-wide">
              FUTURE PAYMENT
            </p>
            <h1 className="text-black-secondary text-3xl font-semibold tracking-wide md:text-5xl flex-1 md:w-3/4">
              Experince that grows with scale.
            </h1>
          </div>
          <div className="w-full lg:w-3/5">
            <p className="text-gray-600 font-normal tracking-wider text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              cumque voluptatibus quasi, repellat repudiandae sequi.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around md:justify-between gap-6 w-full">
          {service.map((item) => (
            <div
              key={item.id}
              className="max-w-80 flex flex-col gap-2 max-h-80"
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
