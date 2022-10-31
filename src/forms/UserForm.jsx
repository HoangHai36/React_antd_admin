import React, { useState } from "react";
import { PlusOutlined, LockOutlined } from '@ant-design/icons';
import { Radio, Upload, Form, Input, Row, Col } from "antd";

export default function UserForm({ isUpdateForm = false }) {
  const [valueRadio, setValueRadio] = useState(1);
  const onChange = (e) => {
    setValueRadio(e.target.value);
  };
  const { TextArea } = Input;
  return (
    <>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <Form.Item
            label="Họ và tên"
            name="ten_nhan_vien"
            rules={[
              {
                required: true,
                message: "Họ và tên là trường bắt buộc.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="ten_tai_khoan"
            label="Tên đăng nhập"
            rules={[
              {
                required: true,
                message: "Tên đăng nhập là trường bắt buộc.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Không đúng định dạng E-mail!",
              },
              {
                required: true,
                message: "E-mail là trường bắt buộc.!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="so_dien_thoai"
            label="Số điện thoại"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gioi_tinh"
            label="Giới tính"
          >
            <Radio.Group buttonStyle="solid" onChange={onChange} value={valueRadio}>
              <Radio.Button value={1}>Nam</Radio.Button>
              <Radio.Button value={0}>Nữ</Radio.Button>
            </Radio.Group>
          </Form.Item>

        </Col>

        <Col className="gutter-row" span={12}>
          <Form.Item
            name="don_vi"
            label="Nơi làm việc"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="chuc_vu"
            label="Công việc"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dia_chi"
            label="Địa chỉ"
          >
            <Input />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload maxCount={1} action="http://localhost:3000/" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        </Col>

      </Row>
      <Form.Item
        name="mat_khau"
        label="Mật khẩu"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="******"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item  
        name="gioi_thieu"
        label="Giới thiệu">
        <TextArea
        maxLength={1000}
        style={{ height: 120 }}
        placeholder="Giới thiệu chi tiết"
        />
    </Form.Item>
    </>
  );
}
