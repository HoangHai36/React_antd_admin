import React, { useEffect } from "react";
import UpdateForm from "@/components/UpdateForm";
import { CrudLayout } from "@/layout";

export default function EditModule({ config, updateForm }) {
  
  return (
    <CrudLayout
      config={config}
    >
      <UpdateForm config={config} formElements={updateForm} />
    </CrudLayout>
  );
}
