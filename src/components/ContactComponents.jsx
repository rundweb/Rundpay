const ContactComponents = () => {
  return (
    <div
      className="p-5 max-w-7xl w-full m-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="contact"
    >
      <div className="bg-black-secondary rounded-3xl px-5 py-10 flex flex-col gap-8 md:flex-row md:px-14 md:py-14 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-5 md:gap-3 w-full">
          <h2 className="text-blue-primary text-base font-semibold tracking-wide">
            TRY IT NOW{" "}
          </h2>
          <h1 className="text-white text-3xl font-bold md:text-4xl md:leading-tight tracking-wide">
            Ready to level up your payment proccess?
          </h1>
          <p className="text-white/70 text-sm font-normal tracking-wide lg:max-w-sm">
            Support small business with simple invoicing. powerful integration,
            and cash flow management tools.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 items-center justify-center lg:justify-end lg:flex-row">
          <a
            href=""
            className="bg-blue-primary w-full text-center font-semibold text-sm text-white rounded-xl border-[2px] border-blue-primary hover:border-white hover:bg-transparent hover:text-white duration-300 ease-in-out lg:w-max h-12 flex items-center justify-center px-8"
          >
            Get Started Now
          </a>
          <a
            href=""
            className="border-[2px] border-white/80 w-full text-center rounded-xl text-white font-semibold text-sm lg:px5  hover:bg-blue-primary hover:border-blue-primary duration-300 ease-in-out lg:w-max h-12 flex items-center justify-center px-8"
          >
            Learn More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
