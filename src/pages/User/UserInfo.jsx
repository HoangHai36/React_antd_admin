import React, { useEffect } from "react";
import { Button, Row, Col, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectReadItem } from "@/redux/crud/selectors";
import { UserOutlined, UserAddOutlined, UsergroupAddOutlined, PhoneOutlined, MailOutlined, SolutionOutlined } from '@ant-design/icons';
import { CrudLayout } from "@/layout";
import { useParams } from 'react-router-dom';
import history from "@/utils/history";
import { IMG_BASE_URL } from "@/config/serverApiConfig";

export default function UserInfo() {
  const dispatch = useDispatch();
  const params = useParams();
  const { result, isLoading, isSuccess } = useSelector(selectReadItem);
  const defaultImg = "https://exam-admin.web5days.com/static/media/defaultUser.4aa827c3440249505e81.jpg"
  useEffect(() => {
    dispatch(crud.read('userItem', params?.id));
    console.log(result)
  }, [isSuccess]);
  const updateInfoUser = () => {
    history.push("/user/edit/" + result?.nhan_vien_id);
  }
  return (
    <CrudLayout>
      <div className="strong whiteBox" style={{ textAlign: "center", justifyContent: "center", minHeight: "20px", padding: "20px" }}>
        <h2 style={{ color: "#22075e", marginBottom: 0 }}>Hồ sơ thành viên</h2>
      </div>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={6}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Thông tin cơ bản
              </h3>
              <div style={{ width: "100%", padding: "12px", textAlign: "center", justifyContent: "center", minHeight: "170px" }}>
                <Avatar className="my-avatar" size={140} icon={<UserOutlined />} src={result?.anh_dai_dien ? (IMG_BASE_URL + result?.anh_dai_dien) : defaultImg} />
              </div>
              <h2 style={{ textAlign: "center" }}>{result?.ten_nhan_vien}</h2>
              <div style={{ textAlign: "center" }}>
              <Button type="primary" shape="round" size={"large"} onClick={updateInfoUser}>
              Cập nhật thành viên
              </Button>
              </div>
              <div className="profile-basic-info">
                <div className="info-item"><UserOutlined /> NHÓM TÀI KHOẢN <p className="info-value">{result?.nhom?.ten_nhom}</p></div>
                <div className="info-item"><UserAddOutlined />  BÁC SĨ QUẢN LÝ  <p className="info-value"></p></div>
                <div className="info-item"><UsergroupAddOutlined /> GIỚI TÍNH <p className="info-value">{result?.gioi_tinh == "1" ? "Nam" : "Nữ"}</p></div>
                <div className="info-item"><PhoneOutlined /> SỐ ĐIỆN THOẠI <p className="info-value">{result?.so_dien_thoai}</p></div>
                <div className="info-item"><MailOutlined />  E-MAIL</div>
                <p className="info-value">{result?.email}</p>
                <div className="info-item"><UserOutlined />  ĐỊA CHỈ<p className="info-value">{result?.dia_chi}</p></div>
                <div className="info-item"><SolutionOutlined />  
                GIỚI THIỆU
                <p className="info-value">{result?.gioi_thieu}</p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={18} >
          <div className="whiteBox shadow">
            <div className="border-box-body" style={{ height: "800px", padding: 0 }}>
            </div>
          </div>
        </Col>
      </Row>
    </CrudLayout>
  );
}
