import React from "react";
import profilepic from "../assets/profilebg.png";
import resume from '../assets/Adityamernresume2.pdf'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AdityaResume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div>
      <div className=" max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-300">
            Hi I'm Aditya Srivastava
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
              
            </p>
          </div> */}
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-500">
            <AiFillLinkedin />
            <AiFillGithub/>
            <AiFillInstagram/>

          </div>
          <div className=" z-10 relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opactiy-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="/" onClick={onButtonClick} title="Download CV" role="button" className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV</a>
            

          </div>
        </div>
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
