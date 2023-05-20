import React from 'react';


const Home = () => {
  return (
    <>
    <div className="mt-24 flex justify-center">
      <div className="p-2">
        <div className="text-4xl md:text-6xl font-bold">
          Code, Create, Conquer!
        </div>
        <div className="text-xl  md:text-3xl mt-4 font-semibold text-green-800">
          Join the Coding Revolution at DoubtFree
        </div>
      </div>
      <div className="p-2 ml-auto">
        <img src="/dizzyeducation-1@2x.png" className="max-w-[80%] h-auto" />
      </div>

    </div>

    <div className="text-gray py-4 px-6 text-left">
      <div className="text-lg font-bold mb-2">
        Discover the best coding course for your kids.
      </div>
      <div className="text-base">
        Learn Coding from basics.
      </div>

      <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg mt-4">
        Explore
      </button>

      <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-lg ml-20">
        Learn More
      </button>


    </div>

    </>
  );
};

export default Home;
