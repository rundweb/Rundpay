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
      text: "Sign up to rundpay and step up your account from the dashboard",
    },
    {
      id: 3,
      title: "Watch your balance grow",
      text: "Sign up to rundpay and step up your account from the dashboard",
    },
  ];
  return (
    <div className="bg-black-secondary w-full">
      <div className="max-w-7xl m-auto px-5 py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-blue-primary text-xl font-semibold">STEP</p>
          <h1 className="text-white tracking-wide text-2xl font-semibold md:w-3/5">Maximize your returns with a Reserve account that generates.</h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          {step.map((item) => (
            <div key={item.id} className="shadow-xl bg-[#0B3A4F] rounded-xl p-7 flex flex-col gap-2">
              <h1 className="text-white text-7xl font-bold">{item.id}</h1>
              <h2 className="text-white font-medium">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsComponents;
