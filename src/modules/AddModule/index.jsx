import React from "react";
import CreateFormNew from "@/components/CreateFormNew";
import { CrudLayout } from "@/layout";

export default function AddModule({ config, createForm, updateForm }) {
  return (
    <CrudLayout
      config={config}
    >
    <CreateFormNew config={config} formElements={createForm} />
    </CrudLayout>
  );
}
