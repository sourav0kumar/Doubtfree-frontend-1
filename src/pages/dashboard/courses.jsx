import React from "react";
import { Col, Row, Typography } from "antd";
import "./css/profile.css";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";

import {
  machineLearningCourses,
  dataScienceCourses,
} from "../../components/data";

const { Title, Text } = Typography;

const Courses = ({ setActive }) => {
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
        <Row style={{ paddingBottom: "20px" }}>
          <Title level={4}>Search Courses</Title>
          <Search />
          <Text type="secondary">Search by title, date, etc.</Text>
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            All
          </Title>
        </Row>
        <Row gutter={[16, 16]}>
          {courses &&
            courses?.map((course, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <CourseCard
                  id={course.course._id}
                  title={course.course.title}
                  description={course.course.description}
                  rating={4.8}
                  price={course.course.fee}
                  imageUrl={course.bannerImageUrl}
                  setActive={setActive}
                />
              </Col>
            ))}
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            MACHINE LEARNING
          </Title>
        </Row>
        <Row gutter={[16, 16]}>{/* ML Courses */}</Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            DATA SCIENCE
          </Title>
        </Row>
        <Row gutter={[16, 16]}>{/* Data Science */}</Row>
        {/* Add more sections or categories as needed */}
      </div>
    </>
  );
};

export default Courses;
