import React from "react";
import {  useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { Form, Input, Select, Row, Col, DatePicker } from "antd";
const { RangePicker } = DatePicker;
export default function SortForm() {
  const valueSearchAll = {
    status: "",
    keyword: "",
    startDate: "",
    endDate: "",
    categories: "",
    page: 1,
  };
  const dispatch = useDispatch();
  const changeSelectCategories = (value) => {
    if(value) {
      valueSearchAll.categories = value?.join("_");
    }
    dispatch(crud.list("searchUser", 1,valueSearchAll));
  };
  const changeSelectStatus = (value) => {
    if(value) {
      valueSearchAll.status = value;
    }
    dispatch(crud.list("searchUser", 1,valueSearchAll));
  };
  const changeDate = (date, dateString) => {
    if(dateString) {
      valueSearchAll.startDate = dateString[0];
      valueSearchAll.endDate = dateString[1];
    }
    dispatch(crud.list("searchUser", 1,valueSearchAll));
  };
  const changeKey = (e) => {
    if(e.target.value) {
      valueSearchAll.keyword = e.target.value;
    }
    dispatch(crud.list("searchUser", 1,valueSearchAll));
  };
  
  const [form] = Form.useForm();
  return (
    <>
    <Form form={form}> 
      <Row gutter={16}>
        <Col span={6}>
        <Form.Item  name="categories">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Danh mục dữ liệu"
            optionLabelProp="label"
            onChange={changeSelectCategories}
          >
            <Option value="TcJAgpBIu" label="Giáo viên">
              <div className="demo-option-label-item">Giáo viên</div>
            </Option>
            <Option value="5t6ljAi2M" label="Học sinh">
              <div className="demo-option-label-item">Học sinh</div>
            </Option>
            <Option value="1" label="Quản lý">
              <div className="demo-option-label-item">Quản lý</div>
            </Option>
          </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Select
            name="status"
            showSearch
            style={{ width: 200 }}
            placeholder="Trạng thái"
            optionFilterProp="children"
            onChange={changeSelectStatus}
          >
            <Option value="">Tất cả trạng thái</Option>
            <Option value="active">Đang hoạt động</Option>
            <Option value="inactive">Bị khóa</Option>
          </Select>
        </Col>
        <Col span={6}>
          <RangePicker name="date" format="YYYY-MM-DD" onChange={changeDate}/>
        </Col>
        <Col span={6}>
          <Input name="keyword" placeholder="Tìm kiếm"  onChange={changeKey}/>
        </Col>
      </Row>
      </Form>
      <div className="space30"></div>
    </>
  );
}
