import React from "react";
import { Col, Row, Typography } from "antd";
import "./css/profile.css";
import CoursesTable from "../../components/Table";
import CourseCard from "../../components/CoursesCard";
import Search from "../../components/Search";

const { Title, Text } = Typography;

const Courses = () => {
  return (
    <>
      <div style={{ width: "100%", padding: "20px" }}>
        <Row style={{ paddingBottom: "20px" }}>
          <Title level={4}>Search Courses</Title>
          <Search />
          <Text type="secondary">Search by title,date etc..</Text>
        </Row>
        <Row>
          <Title level={4}>Machine Learning</Title>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
        </Row>
        <Row>
          <Title level={4}>Data Science</Title>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
          <Col span={8}>
            {" "}
            <CourseCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Courses;
