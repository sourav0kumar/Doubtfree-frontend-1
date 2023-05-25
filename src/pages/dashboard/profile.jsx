import React, { useEffect } from "react";
import { Descriptions, Image, Row, Tag, Typography } from "antd";
import "./css/profile.css";
import CoursesTable from "../../components/Table";
import { useSelector } from "react-redux";

const { Title } = Typography;

const Profile = () => {
  const profile_data = useSelector((state) => state.getuser).result;
  useEffect(() => {
    console.log(profile_data);
  }, []);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Title level={4}>Personal Details</Title>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card p-3 py-4">
              <div className="">
                <Image width={110} src={profile_data.profileImage} />
              </div>
              <div className="my-3">
                <h1 className="" style={{ fontSize: "1.3rem", color: "blue" }}>
                  {profile_data.result.name}
                  <Tag color="#55acee" className="my-1">
                    {profile_data.result.isTeacher ? "Teacher" : "Student"}
                  </Tag>
                </h1>
              </div>
              <Descriptions title="User Info">
                <Descriptions.Item label="Name">
                  {profile_data.result.name}{" "}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {profile_data.result.email}
                </Descriptions.Item>
                <Descriptions.Item label="Mobile Number">
                  {profile_data.result.mobile_number}
                </Descriptions.Item>
                <Descriptions.Item label="Residence">
                  {profile_data.result.residence}
                </Descriptions.Item>
                <Descriptions.Item label="Gender">
                  {profile_data.result.gender}
                </Descriptions.Item>
                <Descriptions.Item label="Date of Birth">
                  {profile_data.result.date_of_birth}
                </Descriptions.Item>
                <Descriptions.Item label="Introduction">
                  {profile_data.result.introduction}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt omnis maiores impedit atque, sed nam? Quisquam
                  consequuntur cumque minima! Porro impedit nulla, fuga
                  assumenda quos excepturi nihil dolorem praesentium nobis?
                </Descriptions.Item>
              </Descriptions>
            </div>
          </div>
        </div>
        <Row>
          <Title level={4}>Enrolled Courses</Title>
        </Row>
        <div className="container">
          <CoursesTable />
        </div>
      </div>
    </>
  );
};

export default Profile;
