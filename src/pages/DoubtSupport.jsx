import React from "react";
import Footer from "../components/Footer";
import QueryBar from "../components/QueryBar";
import Grid from "./grid/grid";
import GridLower from "./grid/gridLower";

const DoubtSupport = () => {
  return (
    <>
      <div className="container-home">
        <div className="home-left">
          <div className="text-5xl md:text-6xl font-bold mt-0">
            Prepare Your Kids For The Future with Experienced Teacher
          </div>
        </div>
        <div className="home-right">
          <img
            className="w-[50%] h-[50%] ml-40"
            src="/dizzy-happy-girl-in-graduation-gown-jumps-and-tosses-her-graduation-cap 1.png"
          />
        </div>
      </div>
      <div className="text-gray py-4 px-6 text-left container-home1">
        <div className="text-lg font-semibold mb-2">
          Kids who learn to code are ready to face their ever-changing future.
          Our Experienced teacher will help your kids develop the resilience,
          skills, and abilities to respond productively to those changes.
        </div>
      </div>

      <section className="mt-2">
        <div className="z-0">
          <Grid />
        </div>
        <div className="z-23 mt-2">
          <QueryBar />
        </div>
      </section>

      <section className="mt-12">
        {/* <header className="bg-blue-600 py-6 mt-4">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-center text-4xl font-bold">
              STILL HAVING DOUBTS?
            </h1>
          </div>
        </header> */}
        <h2 className="text-4xl font-bold mb-4 text-center mt-4">
          Connect with Our Mentors
        </h2>
      </section>
      <div class="container mx-auto p-4">
        <div class="mb-4">
          <h2 class="text-lg font-semibold mb-2">Submit a Doubt</h2>
          <form>
            <div class="flex flex-col mb-2">
              <label for="name" class="text-sm mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="flex flex-col mb-2">
              <label for="doubt" class="text-sm mb-1">
                Your Doubt
              </label>
              <textarea
                id="doubt"
                rows="4"
                class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-2">Mentors</h2>
          <div class="flex flex-wrap gap-4">
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="#"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="#"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="#"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="#"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
            <div class="bg-white shadow-md rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Mentor Name</h3>
              <p class="mb-4">Description of the mentor or their expertise</p>
              <a
                href="#"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 z-0">
        <GridLower />
      </div>
      <div className="mt-7">
        <Footer />
      </div>
    </>
  );
};

export default DoubtSupport;
