import React, { useState } from "react";
import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Card, Row, Col, Button, message } from "antd";
import { Link } from "react-router-dom";
import Payment from "../pages/Payment";
import { HouseAddFill, Trash3Fill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCourseService } from "../services/courses/delete";

const { Meta } = Card;

const CourseCard = ({
  id,
  title,
  description,
  rating,
  price,
  imageUrl,
  user,
}) => {
  const getuser = useSelector((state) => state.getuser).result;
  const [showPayment, setShowPayment] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [deleting, setSetDeleting] = useState(false);
  const dispatch = useDispatch();
  const handleCartClick = () => {
    setShowPayment(true);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };
  const handleDeleteCourse = async () => {
    setSetDeleting(true);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    const res = await DeleteCourseService(id, getuser?.result._id, dispatch);
    messageApi.open({
      key,
      type: "success",
      content: res,
    });
    setSetDeleting(false);
    return;
  };
  return (
    <>
      {contextHolder}
      <Card
        style={{
          width: 300,
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        cover={
          <Link
            to={`/dashboard/courses/${id}`}
            style={{ height: "200px", overflow: "hidden" }}
          >
            <img
              alt="course cover"
              src={
                imageUrl ||
                "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }
            />
          </Link>
        }
        actions={[
          <div className="course-details">
            <Row justify="center" align="middle">
              <Col>
                <StarFilled style={{ fontSize: "20px", color: "#1890ff" }} />
              </Col>
              <Col className="mr-6" style={{ fontSize: "16px" }}>
                {rating}
              </Col>
              <Col>
                <div className="price mr-6" style={{ fontSize: "16px" }}>
                  {price}
                </div>
              </Col>
              <Col>
                <ShoppingCartOutlined
                  key="cart"
                  style={{ fontSize: "24px", color: "#1890ff" }}
                  onClick={handleCartClick}
                />
              </Col>
              {getuser?.result?._id && getuser?.result?._id === user && (
                <Col>
                  <Button
                    className="mx-3"
                    icon={<Trash3Fill />}
                    loading={deleting}
                    type="dashed"
                    danger
                    onClick={handleDeleteCourse}
                  >
                    {deleting ? "Deleting..." : "Delete"}
                  </Button>
                </Col>
              )}
              {getuser?.result?._id && getuser?.result?._id != user && (
                <Col>
                  <Button
                    className="mx-3 bg-green-500 hover:bg-green-400"
                    icon={<HouseAddFill />}
                    type="primary"
                    loading={false}
                  >
                    Enroll
                  </Button>
                </Col>
              )}
            </Row>
          </div>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={title}
          description={description}
        />
      </Card>

      {showPayment && (
        <Payment visible={showPayment} onCancel={handlePaymentCancel} />
      )}
    </>
  );
};

export default CourseCard;
