import React from "react";
import img from "../assets/web-developer-portfolio.webp";

const About = () => {
  return (
    <div className=" flex py-10 text-white bg-[#232325] h-auto " id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={img}
              alt=""
              className="object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About<span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Skilled MERN Stack Developer with  experience in building and maintaining dynamic web applications. Proficient in using MongoDB, Express.js, React.js, and Node.js to create efficient, scalable, and robust solutions. Adept at both front-end and back-end development, with a strong emphasis on delivering user-friendly and high-performance applications. Committed to continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>
        

        <div className="flex mt-10 items-center gap-7">
          <div className="bg-[#333333]/40 p-5 rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              5
              <span className="primary-text">+</span>{" "}
            </h3>
            <p>
              <span className="md:text-base text-xs">Projects</span>
            </p>
          </div>
          <div className="bg-[#333333]/40 p-5 rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              1
              <span className="primary-text">+</span>{" "}
            </h3>
            <p>
              <span className="md:text-base text-xs">Internship</span>
            </p>
          </div>
          <div className="bg-[#333333]/40 p-5 rounded-lg">
            <h3 className="md:text-4xl text-2xl font-semibold text-white">
              1
              <span className="primary-text">+</span>{" "}
            </h3>
            <p>
              <span className="md:text-base text-xs">Happy Clients</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
