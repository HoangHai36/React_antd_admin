import React, { useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectReadItem } from "@/redux/crud/selectors";
import { useParams } from 'react-router-dom';
import { Button, Form } from "antd";
import Loading from "@/components/Loading";

export default function UpdateForm({ config, formElements }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { result, isLoading, isSuccess } = useSelector(selectReadItem);
  const [form] = Form.useForm();
  const params = useParams();
  const onSubmit = (fieldsValue) => {
    dispatch(crud.update(entity, params?.id, fieldsValue));
  };
  useEffect(() => {
    if(result) {
      form.setFieldsValue(result);
    }
  }, [result]);

  useEffect(() => {
    dispatch(crud.read('userItem', params?.id));
    if (isSuccess) {
      form.resetFields();
    }
  }, [isSuccess]);


  return (
    <div>
      <Loading isLoading={isLoading}>
      <div>
        <h2>Cập Nhật Thành Viên</h2>
      </div>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          {formElements}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Loading>
    </div>
  );
}
