const ContactComponents = () => {
  return (
    <div className="p-5 max-w-7xl w-full m-auto">
      <div className="bg-black-secondary rounded-3xl px-5 py-8 flex flex-col gap-5 md:flex-row lg:px-20 lg:py-20">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-blue-primary text-base font-semibold lg:text-lg">TRY IT NOW</h2>
          <h1 className="text-white text-2xl font-semibold lg:text-4xl lg:w-3/5">Ready to level up your payment proccess?</h1>
          <p className="text-gray-500 text-sm font-normal tracking-wide lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod
            molestiae, delectus dicta sapiente ab.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 w-full md:flex-row lg:w-2/5">
          <a href="" className="bg-blue-primary w-full text-center font-semibold text-base py-3 text-white rounded-lg lg:px-5 lg:py-4">Get Started Now</a>
          <a href="" className="border-[1px] border-blue-primary w-full text-center py-3 rounded-lg text-blue-primary font-semibold text-base lg:px5 lg:py-4">Learn More </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
