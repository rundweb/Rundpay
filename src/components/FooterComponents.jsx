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
    {
      name: "Taxes",
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
    {
      name: "Templates",
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
    <div className="p-5 max-w-7xl m-auto w-full flex flex-wrap gap-5 justify-around pb-20 md:py-20">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-black-secondary">
          Rund<span className="text-blue-primary">Pay</span>
        </h1>
      </div>
      <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold text-black-secondary">
            Solutions
          </h1>
          {solutions.map((item) => (
            <div key={item.name} className="text-gray-500 text-sm font-normal">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold text-black-secondary">
            Company
          </h1>
          {company.map((item) => (
            <div key={item.name} className="text-gray-500 text-sm font-normal">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-xl font-semibold text-black-secondary">
            Learn
          </h1>
          {learn.map((item) => (
            <div key={item.name} className="text-gray-500 text-sm font-normal">
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-2 text-xl font-semibold text-black-secondary">
          Follow us on
        </h1>
        <div className="flex gap-5">
          {follow.map((item) => (
            <div key={item.icon}>
              <item.icon className="text-black-secondary text-2xl"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
