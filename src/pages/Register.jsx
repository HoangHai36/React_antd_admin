import React from "react";

import { Form, Input, Button, Checkbox, Layout, Row, Col, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { register } from "@/redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "@/redux/auth/selectors";
const { Content, Footer } = Layout;

const RegisterPage = () => {
  const { loading: isLoading } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(register(values));
  };
  return (
    <>
      <Layout className="layout">
        <Row>
          <Col span={12} offset={6}>
            <Content
              style={{
                padding: "150px 0 180px",
                maxWidth: "360px",
                margin: "0 auto",
              }}
            >
              <h1>Register</h1>
              <Divider />
              <div className="site-layout-content">
                {" "}
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="ten_tai_khoan"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên đăng nhập của bạn!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Tên đăng nhập"
                    />
                  </Form.Item>
                  <Form.Item
                    name="ten_nhan_vien"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên nhân viên của bạn!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Tên nhân viên"
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Vui lòng nhập đúng định dạng email!",
                      },
                      {
                        required: true,
                        message: "Vui lòng nhập email của bản!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="admin@demo.com"
                      autoComplete="off"
                    />
                  </Form.Item>
                  <Form.Item
                    name="mat_khau"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập mật khẩu của bạn!!",
                      },
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="123456"
                    />
                  </Form.Item>
                  <Form.Item
                    name="xac_nhan_mat_khau"
                    dependencies={["mat_khau"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập lại mật khẩu của bạn!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("mat_khau") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Không trùng khớp mật khẩu!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="Xác nhận mật khẩu"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={isLoading}
                    >
                      Register
                    </Button>
                    Or <Link to='/login'>Log in!</Link>
                  </Form.Item>
                </Form>
              </div>
            </Content>
          </Col>
        </Row>

        <Footer style={{ textAlign: "center" }}>
          Open Source CRM based on AntD & React ©2020 Created by Salah Eddine
          Lalami
        </Footer>
      </Layout>
    </>
  );
};

export default RegisterPage;
