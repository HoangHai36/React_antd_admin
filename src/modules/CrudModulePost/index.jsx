import React, { useLayoutEffect } from "react";
import DeleteModal from "@/components/DeleteModal";
import { useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { CrudLayout } from "@/layout";
import CrudDataTable from "./CrudDataTable";

export default function CrudModulePost({ config, createForm, updateForm }) {
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
