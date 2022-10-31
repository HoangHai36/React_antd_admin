import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { useCrudContext } from "@/context/crud";
import { selectCreatedItem } from "@/redux/crud/selectors";
import { formatDate } from "@/utils/helpers";
import { Button, Form } from "antd";
import Loading from "@/components/Loading";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function CreateFormNew({ config, formElements }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [form] = Form.useForm();
  const onSubmit = (fieldsValue) => {
    dispatch(crud.create(entity, fieldsValue));
  };
 
  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Loading>
  );
}
