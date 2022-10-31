import { notification } from "antd";
import history from "@/utils/history";
import codeMessage from "./codeMessage";

const successHandler = (response, typeNotification = {}) => {
  if (!response.data) {
    response = {
      ...response,
      status: 404,
      url: null,
      data: {
        success: false,
        result: null,
      },
    };
  }
  const { data } = response;
  if (data.success === false) {
    const message = data && data.message;
    const errorText = message || codeMessage[response.status];
    const { status } = response;
    notification.config({
      duration: 20,
    });
    notification.error({
      message: `Request error ${status}`,
      description: errorText,
    });
  } else {
    if(typeNotification?.type == "userAdd") {
      notification.config({
        duration: 20,
      });
      notification.success({
        message: 'Thêm thành viên thành công',
      });
      history.push("/user/edit/" + data?.data?.nhan_vien_id);
    } else if(typeNotification?.type == "deleteUser") {
      notification.config({
        duration: 20,
      });
      notification.success({
        message: 'Xóa thành viên thành công',
      });
    } else if(typeNotification?.type == "lockUser") {
      notification.config({
        duration: 20,
      });
      notification.success({
        message: 'Lock thành viên thành công',
      });
    } else if(typeNotification?.type == "userEdit") {
      notification.config({
        duration: 20,
      });
      notification.success({
        message: 'Update thành viên thành công',
      });
    }
  }
  
  return data;
};

export default successHandler;
