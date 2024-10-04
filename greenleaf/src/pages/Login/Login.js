import "./Login.scss";
import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login_container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">OCOP Marketplace</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="login-wrap p-0">
              <h3 className="mb-4 text-center">
                Bạn mới biết đến Green Leaf?
                <a className="sign_up" href="/signup"> Đăng Ký </a>
              </h3>
              <form action="#" className="signin-form">
                <div className="form-group">
                  <input type="text" className="form-control1" placeholder="Tên đăng nhập" required />
                </div>
                <div className="form-group">
                  <input
                    id="password-field"
                    type={showPassword ? "text" : "password"}
                    className="form-control1"
                    placeholder="Mật khẩu"
                    autoComplete="on"
                    required
                  />
                  <span
                    className={`fa fa-fw field-icon toggle-password ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  ></span>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary submit px-3">Đăng nhập</button>
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-50">
                    <label className="checkbox-wrap checkbox-primary">
                      
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                  <div className="w-50 text-md-right">
                    <a href="/forgotpassword" style={{ color: "#fff" }}> Quên mật khẩu </a>
                  </div>
                </div>
              </form>
              <p className="w-100 text-center Or">— Hoặc —</p>
              <div className="social text-center">
                <a href="#" className="text-center">
                  <span className="gg_icon">
                    <img src="https://cdn-icons-png.flaticon.com/256/300/300221.png" className="ggle text-center"alt=""></img>
                  </span>
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

