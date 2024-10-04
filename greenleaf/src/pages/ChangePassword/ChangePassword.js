import React, { useState } from "react";
import "./ChangePassword.scss";
import { useNavigate, Link } from "react-router-dom";
const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }
    if (password === confirmPassword && termsAccepted) {
      alert("Thay đổi mật khẩu thành công");
      navigate("/");
    } else {
      if (!termsAccepted) {
        alert("Bạn cần phải đồng ý với điều khoản và dịch vụ");
      } else {
        alert("Mật khẩu không khớp");
      }
    }
  };

  return (
    <div className="ChangePassword">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-10 text-center">
            <div
              className="sign_form p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h2 className="text-white">Thay đổi mật khẩu</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="newPassword" className="text-white">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="form-control1"
                    id="newPassword"
                    placeholder="Nhập mật khẩu mới"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="text-white">
                    Vui lòng nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    className="form-control1"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <div className="term_policy  text-white">
                    <span>
                      Bạn đã đồng ý với Green Leaf về{" "}
                    </span>
                    <Link to="/terms_of_use" className="text-danger1">
                      Điều khoản
                    </Link>
                    <span> và </span>
                    <Link to="/privacy_policy" className="text-danger1">
                      Dịch vụ
                    </Link>
                    .
                  </div>
                </div>
                <button type="submit" className="btn_next w-100 mt-4">
                  Đặt lại mật khẩu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
