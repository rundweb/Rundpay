import { MdAlternateEmail } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import google from "../assets/images/google.svg";
import apple from "../assets/images/apple.svg";
// eslint-disable-next-line react/prop-types
const RegisterPages = ({click}) => {
  return (
    <div className="w-full flex flex-col gap-5 lg:px-16 relative z-0">
      <div className="flex flex-col gap-2 text-center md:text-start">
        <h1 className="text-black-secondary text-4xl font-bold tracking-wide">
          Create an account
        </h1>
        <p className="text-black-secondary/80">
          Enter your username and password to Register
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-12 w-full rounded-lg px-5 placeholder:text-sm placeholder:tracking-wide text-black-secondary/90 outline-blue-primary"
          />
          <MdAlternateEmail className="absolute text-black-secondary/90 right-5 text-xl top-2/4 -translate-y-2/4" />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-lg px-5 placeholder:text-sm placeholder:tracking-wide text-black-secondary/90 outline-blue-primary"
          />
          <BiHide className="absolute text-black-secondary/90 right-5 text-xl top-2/4 -translate-y-2/4" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <p className="text-sm text-black-secondary/90">I agree to the <span className="font-semibold">Terms & conditions</span></p>
          </div>
        </div>
        <div className="w-full bg-blue-primary flex items-center justify-center h-12 rounded-lg text-white cursor-pointer tracking-wide font-medium hover:bg-black-secondary duration-300 ease-in-out">
          Create Account
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm text-black-secondary/90 tracking-wide">
            Or register with
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center justify-center gap-2 border-white border-2 rounded-lg h-12 cursor-pointer">
            <img src={google} alt="google-logo" className="w-7 h-7" />
            <h1 className="text-black-secondary tracking-wide">Google</h1>
          </div>
          <div className="w-full flex items-center justify-center gap-2 border-white border-2 rounded-lg h-12 cursor-pointer">
            <img src={apple} alt="apple-logo" className="w-7 h-7" />
            <h1 className="text-black-secondary tracking-wide">Apple</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="text-black-secondary tracking-wide text-sm flex items-center justify-center gap-1">
            Already have an account?{" "}
            <div className="font-semibold cursor-pointer" onClick={click}>Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;
