import React from "react";
import {  Divider, Row, Col } from "antd";
import { IMG_BASE_URL } from "@/config/serverApiConfig";
import {  Tag, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { request } from "@/request";
import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";
import useFetch from "@/hooks/useFetch";

const TopCard = ({ title, tagContent, tagColor, prefix }) => {
  return (
    <Col className="gutter-row" span={6}>
      <div
        className="whiteBox shadow"
        style={{ color: "#595959", fontSize: 13, height: "106px" }}
      >
        <div
          className="pad15 strong"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h3 style={{ color: "#22075e", marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: "left" }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{ padding: "10px 0", justifyContent: "center" }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tag
                color={tagColor}
                style={{ margin: "0 auto", justifyContent: "center", fontSize: ".9rem", fontWeight: "bold" }}
              >
                {tagContent}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default function Dashboard() {
  const userColumns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
      render: (anh_dai_dien) => {
        return <Avatar style={{ float: 'left' }} shape="square" src={IMG_BASE_URL + anh_dai_dien} size={60} icon={<UserOutlined />} />;
      },
    },
    {
      title: "Họ và tên",
      dataIndex: "ten_nhan_vien",
    },
    {
      title: "E-Mail",
      dataIndex: "email",
    },
  ];

  const postColumns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "anh_dai_dien",
      render: (anh_dai_dien) => {
        return <Avatar style={{ float: 'left' }} shape="square" src={IMG_BASE_URL + anh_dai_dien} size={60} icon={<UserOutlined />} />;
      },
    },

    {
      title: "Tiêu Đề",
      dataIndex: "tieu_de",
    }
  ];
  const asyncList = () => {
    return request.list("dashboard");
  };

  const { result, isLoading, isSuccess } = useFetch(asyncList);
  const config = { result, isLoading, isSuccess };
  const getTagContent = (key) => {
    if (isSuccess && result) {
      switch (key) {
        case 'users':
          return result["users"];
        case 'courses':
          return result["courses"];
        case 'exams':
          return result["exams"];
        case 'posts':
          return result["posts"];
      }
    }
    return '';
  }
  return (
    <DashboardLayout>
      <div className="strong whiteBox" style={{ textAlign: "center", justifyContent: "center", minHeight: "20px", padding: "20px" }}>
        <h2 style={{ color: "#22075e", marginBottom: 0 }}>CHÀO MỪNG BẠN ĐẾN VỚI HỆ THỐNG QUẢN LÝ THI ONLINE</h2>
      </div>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <TopCard
          title={"Tài khoản"}
          tagColor={"cyan"}
          prefix={"Số lượng"}
          tagContent={getTagContent("users")}
        />
        <TopCard
          title={"Khóa học"}
          tagColor={"purple"}
          prefix={"Số lượng"}
          tagContent={getTagContent("courses")}
        />
        <TopCard
          title={"Đề thi"}
          tagColor={"green"}
          prefix={"Số lượng"}
          tagContent={getTagContent("exams")}
        />
        <TopCard
          title={"Tin tức"}
          tagColor={"red"}
          prefix={"Số lượng"}
          tagContent={getTagContent("posts")}
        />
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Tài khoản mới
              </h3>
            </div>
            <RecentTable entity={"NEW_USERS"} dataTableColumns={userColumns} config={config} />
          </div>
        </Col>

        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Tin tức mới
              </h3>
            </div>
            <RecentTable entity={"NEW_POSTS"} dataTableColumns={postColumns} config={config} />
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                KHÓA HỌC MỚI
              </h3>
            </div>
            <RecentTable entity={"NEW_COURSES"} dataTableColumns={postColumns} config={config} />
          </div>
        </Col>

        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                ĐỀ THI MỚI
              </h3>
            </div>
            <RecentTable entity={"NEW_EXAMS"} dataTableColumns={postColumns} config={config} />
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
