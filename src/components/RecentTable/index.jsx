import React from "react";
import { Table } from "antd";
import uniqueId from "@/utils/uinqueId";

export default function RecentTable({ ...props }) {
  let { entity, dataTableColumns, config } = props;
  dataTableColumns = [
    ...dataTableColumns
  ];

  const { result, isLoading, isSuccess } = config;
  const firstFiveItems = () => {
    if(isSuccess && result){
      switch(entity) {
        case 'NEW_USERS':
          return result["NEW_USERS"];
        case 'NEW_POSTS':
          return result["NEW_POSTS"];
        case 'NEW_COURSES':
          return result["NEW_COURSES"];
        case 'NEW_EXAMS':
          return result["NEW_EXAMS"];
      }
    }
    return [];
  };
  return (
    <React.Fragment>
      <Table
        columns={dataTableColumns}
        rowKey={() => `${uniqueId()}`}
        dataSource={isSuccess && firstFiveItems()}
        pagination={{ pageSize: 5 }}
        loading={isLoading}
      />
    </React.Fragment>
  );
}
