import { IoMdArrowForward } from "react-icons/io";
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
  return (
    <div className="max-w-7xl m-auto w-full p-5 flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-blue-primary font-semibold text-xl">OUR MISSION</h2>
        <h1 className="text-black-secondary text-3xl font-bold">We`ve helped innovative companies</h1>
        <p className="text-gray-600 font-normal text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          libero.
        </p>
      </div>
      <div className="flex flex-wrap justify-around text-center gap-4 md:gap-20">
        {mission.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <h1 className="text-black-primary text-5xl font-bold">{item.angka}</h1>
            <p className="text-black-secondary font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-black-secondary">CHOSSE PLAN :</h1>
      <div className="flex flex-col gap-10 w-full md:flex-row items-center justify-center">
        <div className="bg-gray-100 h-52 lg:h-60 rounded-xl shadow-lg p-10 flex flex-col justify-between max-w-md w-full">
          <h1 className="text-3xl font-bold text-black-secondary">Plus</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-black-secondary">$2.99</h1>
            <IoMdArrowForward className=" text-3xl -rotate-45 text-black-secondary"/>
          </div>
        </div>
        <div className="bg-card bg-cover h-52 lg:h-60 rounded-xl shadow-lg p-10 flex flex-col justify-between max-w-md w-full">
          <h1 className="text-3xl font-bold text-white">Premium</h1>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">$6.99</h1>
            <IoMdArrowForward className=" text-3xl -rotate-45 text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionComponents;
