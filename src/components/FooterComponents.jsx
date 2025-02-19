import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const FooterComponents = () => {
  const solutions = [
    {
      name: "Small Bussiness",
    },
    {
      name: "Frelancers",
    },
    {
      name: "Customers",
    },
  ];

  const company = [
    {
      name: "About Us",
    },
    {
      name: "Career",
    },
    {
      name: "Contact",
    },
  ];

  const learn = [
    {
      name: "Blog",
    },
    {
      name: "Ebooks",
    },
    {
      name: "Guides",
    },
  ];

  const follow = [
    {
      icon: FaXTwitter,
    },
    {
      icon: FaLinkedin,
    },
    {
      icon: RiInstagramFill,
    },
  ];
  return (
    <div
      className="p-5 max-w-7xl m-auto w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-10 py-10 md:flex-row">
        <div className="w-full flex items-center justify-center md:items-start md:justify-start md:w-2/4">
          <h1 className="text-4xl font-bold text-black-secondary">
            Rund<span className="text-blue-primary">Pay</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-around gap-5 w-full">
          <div className="flex flex-col gap-1">
            <h1 className=" text-xl font-semibold text-black-secondary">
              Solutions
            </h1>
            {solutions.map((item) => (
              <div
                key={item.name}
                className="text-gray-500 text-base font-medium hover:text-blue-primary cursor-pointer"
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className=" text-xl font-semibold text-black-secondary">
              Company
            </h1>
            {company.map((item) => (
              <div
                key={item.name}
                className="text-gray-500 text-base font-medium hover:text-blue-primary cursor-pointer"
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className=" text-xl font-semibold text-black-secondary">
              Learn
            </h1>
            {learn.map((item) => (
              <div
                key={item.name}
                className="text-gray-500 text-base font-medium hover:text-blue-primary cursor-pointer"
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full md:justify-start md:items-end md:w-2/4">
          <h1 className="mb-2 text-xl font-semibold text-black-secondary">
            Follow us on
          </h1>
          <div className="flex gap-5">
            {follow.map((item) => (
              <div key={item.icon}>
                <item.icon className="text-black-secondary text-2xl cursor-pointer hover:text-blue-primary duration-300 ease-in-out" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 border-black-primary/10 pt-5">
        <p className="text-black-primary/80 text-sm font-medium tracking-wide">
          RundPay 2024, All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponents;
