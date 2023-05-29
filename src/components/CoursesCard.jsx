import React, { useState } from "react";
import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Payment from "../pages/Payment";

const { Meta } = Card;

const CourseCard = ({ id, title, description, rating, price, imageUrl }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleCartClick = () => {
    setShowPayment(true);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  return (
    <>
      <Card
        style={{
          width: 300,
          margin: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        cover={
          <Link to={`/dashboard/courses/${id}`}>
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
