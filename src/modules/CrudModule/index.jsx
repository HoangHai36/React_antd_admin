import React, { useLayoutEffect } from "react";
import { Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CreateForm from "@/components/CreateForm";
import UpdateForm from "@/components/UpdateForm";
import DeleteModal from "@/components/DeleteModal";
import ReadItem from "@/components/ReadItem";
import SearchItem from "@/components/SearchItem";

import { useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { useCrudContext } from "@/context/crud";

import { CrudLayout } from "@/layout";

import CrudDataTable from "./CrudDataTable";

export default function CrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
    >
      <CrudDataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}
