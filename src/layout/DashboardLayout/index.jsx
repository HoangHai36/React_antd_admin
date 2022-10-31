import React from "react";

import DefaultLayout from "../DefaultLayout";
import HeaderContent from "../HeaderContent";

import { Layout } from "antd";

const { Content } = Layout;

export default function DashboardLayout({ children }) {
  return (
    <Layout className="site-layout">
      <HeaderContent />
      <Content
        style={{
          padding: "20px 40px",
          margin: "0px auto",
          width: "100%",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
