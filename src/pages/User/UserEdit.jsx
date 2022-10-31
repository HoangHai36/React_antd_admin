import React from "react";
import EditModule from "@/modules/EditModule";
import EditUserForm from "@/forms/EditUserForm";

function UserAdd() {
  const entity = "userEdit";
  const config = {
    entity
  };
  return (
    <EditModule
      updateForm={<EditUserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default UserAdd;
