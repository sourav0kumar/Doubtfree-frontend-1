import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import Profile from "./profile";
import Courses from "./courses";
import { Link, Route, Routes } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Profile", "1", <UserOutlined />),
  getItem("Courses", "2", <DesktopOutlined />),
  getItem("Playground", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("1");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {" "}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <div className="side-bar-links">
            <Link
              to="/dashboard/profile"
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
            >
              <UserOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "Profile"}
            </Link>
            <Link
              to="/dashboard/courses"
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
            >
              {" "}
              <DesktopOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "Courses"}
            </Link>
            <Link
              to="/dashboard/playground"
              className={active === "3" ? "active" : ""}
              onClick={() => setActive("3")}
            >
              {" "}
              <DesktopOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "playground"}
            </Link>
            <Link to="/">
              {" "}
              <ArrowLeftOutlined style={{ marginRight: "5px" }} />
              {!collapsed && "Back to home"}
            </Link>
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
              overflow: "auto",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>
                {active === "1" && "Profile"}
                {active === "2" && "Courses"}
                {active === "3" && "About"}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<Courses />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            @Doubtfree, All rights reserved
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default Dashboard;
