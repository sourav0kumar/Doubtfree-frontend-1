import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import Testimonials from "./Testimonials";

import { courseContent } from "./data";
import Footer from "./Footer";

const CourseStructure = () => {
 
  const [activeModule, setActiveModule] = useState(null);

  const handleToggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <>
         <div className="px-8 py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* Welcome Intro */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-4">Welcome to the Course!</h2>
          <p className="text-gray-600">
          Our course is designed to provide you with a comprehensive curriculum covering everything from the basics of web development 
          to advanced topics like React and Node.js. We offer flexible learning options, allowing you to learn at your own 
          pace, attend classes online, and complete practical assignments and projects that suit your lifestyle.
          </p>
        </div>

        {/* Students Enrolled and Rating */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-bold">
            Students Enrolled: <span className="text-blue-600">1000+</span>
          </div>
          <div className="text-lg font-bold flex gap-1 text-yellow500">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"></path></svg>
          </div>
        </div>

        {/* Course Objectives */}
        <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">What Will You Learn</h2>
      <ul className="pl-6 text-gray-600 flex flex-col">
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 1
        </li>
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 2
        </li>
        <li className="flex items-center mb-2">
          <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
          Objective 3
        </li>
        {/* Add more objectives as needed */}
      </ul>
    </div>

        {/* Course Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Course Content</h2>
          {courseContent.map((module, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer bg-white p-4 rounded-lg shadow-md"
            onClick={() => handleToggleModule(index)}
          >
            <h3 className="text-lg font-bold">{module.module}</h3>
            <CaretDownOutlined
              className={`h-5 w-5 text-gray-600 transition-transform ${
                activeModule === index ? 'transform rotate-180' : ''
              }`}
            />
          </div>
          {activeModule === index && (
            <div className="pl-6 mt-2 bg-gray-100 rounded-lg p-4">
              <ul className="list-disc pl-6 text-gray-600 mt-2 mb-2">
                {module.lectures.map((lecture, idx) => (
                  <li key={idx}>{lecture}</li>
                ))}
              </ul>
              <div className="flex align-center bg-white rounded-lg p-2 mt-2">
                <p className="text-sm italic ml-40">{module.pdf}</p>
                <p className="text-sm italic ml-8">{module.video}</p>
              </div>
            </div>
          )}
        </div>
      ))}
        </div>

        {/* About Instructor */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-gray-100 p-4 flex flex-row">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Team Member"
                  className="w-1/3 h-auto object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col">
                  <h3 className=" font-bold mb-2 text-center text-3xl">John Doe</h3>
                  <p className="text-gray-800 mt-3">
                    My name is John Doe and I am super-psyched that you are reading this!
                    Professionally, I come from the Data Science consulting space with experience in finance, retail, transport, and other industries. One of the strongest sides of my teaching style is that I focus on intuitive explanations, so you can be sure that you will truly understand even the most complex topics.
                    To sum up, I am absolutely and utterly passionate about Data Science and I am looking forward to sharing my passion and knowledge with you!
                  </p>
                </div>
              </div>
            </div>
          </div>


        {/* Testimonials */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {/* Add Testimonials component or content here */}
          <Testimonials />
        </div>
      </div>
    </div>

    <div><Footer/></div>
    </>
   
  );
};

export default CourseStructure;
