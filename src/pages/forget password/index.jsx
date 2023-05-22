import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log(values);
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    // const res = await LoginService(values.email, values.password, dispatch);
    messageApi.open({
      key,
      type: "success",
      content: "fsdg",
      duration: 3,
    });
  };
  return (
    <>
      {contextHolder}
      <div className="container-login">
        <Form
          name="normal_login"
          className="container-login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          noValidate
        >
          <span className="form-head">
            <h4>Forget Password</h4>
          </span>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="eg. user@gmail.com"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Forget Password
            </Button>
            Or <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ForgetPassword;
