import React from "react";
import AddModule from "@/modules/AddModule";
import UserForm from "@/forms/UserForm";

function UserAdd() {
  const entity = "userAdd";
  const config = {
    entity
  };
  return (
    <AddModule
      createForm={<UserForm />}
      updateForm={<UserForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default UserAdd;
