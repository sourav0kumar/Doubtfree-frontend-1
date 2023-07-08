import React from "react";
import { Col, Row, Typography } from "antd";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import AnimatedText from "../../components/AnimatedText";
import Footer from "../../components/Footer";

const { Title, Text } = Typography;

const CoursesAll = ({ setActive }) => {
  const courses = useSelector((state) => state.getcourses).result;

  return (
    <>
      <div className="text-center mt-3 mb-2">
        <h1 className="text-4xl md:text-6xl font-bold">
          What would you like to&nbsp;
          <span className="text-4xl md:text-6xl font-bold text-blue-600">
            learn?
          </span>
        </h1>
      </div>
      <div style={{ width: "100%", padding: "20px" }}>
        <section>
          <div className="flex flex-col lg:flex-row bg-#f9f9f9 mt-1">
            <div className="my-10 flex-1 flex justify-between items-center lg:items-start">
              <div className="max-w-lg mx-auto my-10">
                <div className="bg-white rounded-lg">
                  <div className="mb-8">
                    <AnimatedText />
                  </div>
                  <p
                    className="text-gray-600 text-xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <span className="font-semibold text-2xl">Doubtfree</span>,
                    the premier coding education platform for school students,
                    offers specialized courses in various domains. Our
                    comprehensive programs equip students with the necessary
                    coding skills and knowledge to excel in these fields.
                    <p className="text-black font-semibold mt-5">
                      Join Doubtfree today and embark on a rewarding coding
                      journey.
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-3 lg:mt-0 lg:flex justify-center items-center">
              <img
                className="w-[60%] h-auto ml-20 align-baseline"
                src={require("./learn_course.jpg")}
                alt="Learning"
              />
            </div>
          </div>
        </section>
        <h3 level={4} className="text-2xl font-semibold text-center mb-3">
          <div className="text-3xl md:text-4xl font-bold  text-black-600">
            ALL COURSES
          </div>
        </h3>
        <div className="flex justify-center w-100 align-middle">
          <div style={{ paddingBottom: "20px" }} className="w-[80%]">
            <Title level={4} className="ml-5">
              Search Courses
            </Title>
            <Search />
          </div>
        </div>
        <div className="flex justify-content-center align-items-top w-full flex-wrap">
          {courses &&
            courses?.map((course, index) => (
              <Col key={index}>
                <CourseCard
                  id={course.course._id}
                  title={course.course.title}
                  description={course.course.description}
                  rating={4.8}
                  price={course.course.fee}
                  imageUrl={course.bannerImageUrl}
                  setActive={setActive}
                  user={course.course.user}
                />
              </Col>
            ))}
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default CoursesAll;
