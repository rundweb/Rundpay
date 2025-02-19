const StepsComponents = () => {
  const step = [
    {
      id: 1,
      title: "Open your account",
      text: "Sign up to rundpay and step up your account from the dashboard",
    },
    {
      id: 2,
      title: "Transfer your money",
      text: "Move money from to another account into and start to earning up.",
    },
    {
      id: 3,
      title: "Watch your balance grow",
      text: "Accessed instantly and remain insulated from market volatility.",
    },
  ];
  return (
    <div className="bg-black-secondary w-full" id="step">
      <div className="max-w-7xl m-auto px-5 py-20 flex flex-col gap-10 md:gap-16">
        <div
          className="flex flex-col gap-1"
          data-aos="fade-left"
          data-aos-duration="1600"
        >
          <p className="text-blue-primary text-base font-semibold tracking-wide">
            STEP
          </p>
          <h1 className="text-white text-3xl font-semibold lg:w-2/3 md:text-5xl">
            Maximize your returns with a Reserve account that generates.
          </h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          {step.map((item) => (
            <div
              key={item.id}
              className="shadow-xl bg-[#0B3A4F] rounded-xl p-7 flex flex-col gap-4"
              data-aos="fade-left"
              data-aos-duration="1600"
            >
              <div className="relative">
                <h1 className="text-white text-7xl font-bold">{item.id}</h1>
                <div className="w-full h-full absolute bg-gradient-to-t from-[#0B3A4F] top-0 left-0"></div>
              </div>
              <h2 className="text-white font-medium text-xl tracking-wide">{item.title}</h2>
              <p className="text-gray-400 text-base tracking-wide">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsComponents;
