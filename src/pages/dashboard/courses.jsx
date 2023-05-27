import React from "react";
import { Col, Row, Typography } from "antd";
import "./css/profile.css";
import CoursesTable from "../../components/Table";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const Courses = () => {
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
                  title={course.course.title}
                  description={course.course.description}
                  rating={4.8}
                  price={course.course.fee}
                  imageUrl={course.bannerImageUrl}
                />
              </Col>
            ))}
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            MACHINE LEARNING
          </Title>
        </Row>
        <Row gutter={[16, 16]}>
          {machineLearningCourses.map((course, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <CourseCard
                title={course.title}
                description={course.description}
                rating={course.rating}
                price={course.price}
                imageUrl={course.imageUrl}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Title level={4} className="text-2xl font-semibold">
            DATA SCIENCE
          </Title>
        </Row>
        <Row gutter={[16, 16]}>
          {dataScienceCourses.map((course, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
              <CourseCard
                title={course.title}
                description={course.description}
                rating={course.rating}
                price={course.price}
                imageUrl={course.imageUrl}
              />
            </Col>
          ))}
        </Row>
        {/* Add more sections or categories as needed */}
      </div>
    </>
  );
};

export default Courses;

const machineLearningCourses = [
  {
    title: "Machine Learning Course 1",
    description: "This is the description for Machine Learning Course 1",
    rating: 4.5,
    price: "$199",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    title: "Machine Learning Course 2",
    description: "This is the description for Machine Learning Course 2",
    rating: 4.2,
    price: "$149",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Machine Learning Course 3",
    description: "This is the description for Machine Learning Course 2",
    rating: 4.2,
    price: "$149",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Machine Learning Course 4",
    description: "This is the description for Machine Learning Course 2",
    rating: 4.2,
    price: "$149",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Machine Learning Course 5",
    description: "This is the description for Machine Learning Course 2",
    rating: 4.2,
    price: "$149",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Machine Learning Course 6",
    description: "This is the description for Machine Learning Course 2",
    rating: 4.2,
    price: "$149",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more machine learning courses as needed
];

const dataScienceCourses = [
  {
    title: "Data Science Course 1",
    description: "This is the description for Data Science Course 1",
    rating: 4.8,
    price: "$249",
    imageUrl: "https://example.com/image3.jpg",
  },
  {
    title: "Data Science Course 2",
    description: "This is the description for Data Science Course 2",
    rating: 4.7,
    price: "$199",
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    title: "Data Science Course 3",
    description: "This is the description for Data Science Course 2",
    rating: 4.7,
    price: "$199",
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    title: "Data Science Course 4",
    description: "This is the description for Data Science Course 2",
    rating: 4.7,
    price: "$199",
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    title: "Data Science Course 5",
    description: "This is the description for Data Science Course 2",
    rating: 4.7,
    price: "$199",
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    title: "Data Science Course 6",
    description: "This is the description for Data Science Course 2",
    rating: 4.7,
    price: "$199",
    imageUrl: "https://example.com/image4.jpg",
  },
  // Add more data science courses as needed
];
