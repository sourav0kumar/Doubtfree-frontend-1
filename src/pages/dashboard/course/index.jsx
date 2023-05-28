import React, { useEffect, useState } from "react";
import { Card, Collapse, Descriptions, Image, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import "./style.css";

const { Title, Text } = Typography;

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const tabList = [
  {
    key: "User Info",
    tab: "Course Info",
  },
  {
    key: "About Me",
    tab: "About Course",
  },
];

const LearnCourse = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("User Info");
  const { id } = useParams();
  const getcourse = useSelector((state) => state.getcourses).result.filter(
    (obj) => obj.course._id === id
  )[0];
  const [expandIconPosition, setExpandIconPosition] = useState("1");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  useEffect(() => {
    console.log(id);
    console.log(getcourse);
  }, []);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Row>
          <Title level={4}>Course Details</Title>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className=" p-3 py-4">
              {/* <div className="d-flex justify-center align-middle">
                <Image
                  preview={false}
                  width={"90%"}
                  className="rounded-lg my-3"
                  src={getcourse.bannerImageUrl}
                />
              </div> */}
              <Card
                style={{
                  width: "100%",
                }}
                tabBarExtraContent={
                  <Link to="#" className="text-blue-600 hover:text-gray-400">
                    Edit
                  </Link>
                }
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
              >
                {activeTabKey1 === tabList[0].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Name">
                      {getcourse.course.title}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tags">
                      {getcourse.course.tags}
                    </Descriptions.Item>
                    <Descriptions.Item label="Duration">
                      {getcourse.course.duration} Weeks
                    </Descriptions.Item>
                    <Descriptions.Item label="Starting Date">
                      {getcourse.course.startDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="End Date">
                      {getcourse.course.endDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="Fee">
                      Rs.{getcourse.course.fee}
                    </Descriptions.Item>
                  </Descriptions>
                )}
                {activeTabKey1 === tabList[1].key && (
                  <Descriptions title="" bordered>
                    <Descriptions.Item label="Description">
                      {getcourse.course.description}
                    </Descriptions.Item>
                  </Descriptions>
                )}
              </Card>
            </div>
          </div>
        </div>
        <Row>
          <Title level={4}>Courses Content</Title>
        </Row>
        <div className="container">
          <Collapse
            defaultActiveKey={["1"]}
            onChange={onChange}
            expandIconPosition={expandIconPosition}
          >
            <Panel header="Lecture 1" key="1" extra={genExtra()}>
              <Title level={4}>Lecture 1</Title>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt temporibus suscipit placeat tenetur facilis repellat,
                illo mollitia neque ea magnam ratione deserunt exercitationem
                magni quasi ex ipsum autem aliquid adipisci.
              </Text>
              <Title level={5}>Video Lecture</Title>
              <div className="lecture_card">
                <div className="lecture_img">
                  <img src={require("./video.png")} alt="" srcset="" />
                </div>
                <div className="lecture_name">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  ab soluta alias error
                </div>
              </div>
              <Title level={5}>PDF Notes</Title>
              <div className="lecture_card">
                <div className="lecture_img">
                  <img src={require("./pdf.png")} alt="" srcset="" />
                </div>
                <div className="lecture_name">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  ab soluta alias error
                </div>
              </div>
            </Panel>
            <Panel header="Lecture 2" key="2" extra={genExtra()}>
              <Title level={4}>Lecture 2</Title>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt temporibus suscipit placeat tenetur facilis repellat,
                illo mollitia neque ea magnam ratione deserunt exercitationem
                magni quasi ex ipsum autem aliquid adipisci.
              </Text>
              <Title level={5}>Video Lecture</Title>
              <div className="lecture_card">
                <div className="lecture_img">
                  <img src={require("./video.png")} alt="" srcset="" />
                </div>
                <div className="lecture_name">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  ab soluta alias error
                </div>
              </div>
              <Title level={5}>PDF Notes</Title>
              <div className="lecture_card">
                <div className="lecture_img">
                  <img src={require("./pdf.png")} alt="" srcset="" />
                </div>
                <div className="lecture_name">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                  ab soluta alias error
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default LearnCourse;
