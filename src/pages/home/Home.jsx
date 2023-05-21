import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="home-left">
          <div className="text-4xl md:text-6xl font-bold">
            Code, Create, Conquer!
          </div>
          <div className="text-xl  md:text-3xl mt-4 font-semibold text-green-800">
            Join the Coding Revolution at DoubtFree
          </div>
        </div>
        <div className="home-right">
          <img src="/dizzyeducation-1@2x.png" className="max-w-[80%] h-auto" />
        </div>
      </div>
      <div className="text-gray py-4 px-6 text-left container-home1">
        <div className="text-lg font-bold mb-2">
          Discover the best coding course for your kids.
        </div>
        <div className="text-base">Learn Coding from basics.</div>
        <div className="btn-div my-5">
          <Link
            to="/dashboard/courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"
          >
            Explore
          </Link>

          <Link
            to="/"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-lg mx-3"
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
