import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.scss";

export default function SignUp() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.firstName) {
      newErrors.firstName = "Vui lòng điền họ của bạn.";
    }
    if (!formValues.lastName) {
      newErrors.lastName = "Vui lòng điền tên của bạn.";
    }
    if (!formValues.email) {
      newErrors.email = "Vui lòng điền email.";
    }
    if (!formValues.password) {
      newErrors.password = "Vui lòng điền mật khẩu.";
    }
    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu.";
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu và xác nhận mật khẩu không khớp.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
   
    if (validateForm()) {
      navigate("/signupstep");
    }
  };

  return (
    <div className="SignUp">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-10 text-center">
            <div className="sign_form p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2 className="text-white mb-4">Chào mừng bạn đến với Green Leaf</h2>
              <p className="text-white">Đăng ký và bắt đầu mua sắm!</p>

              <form className="input_box mt-3" onSubmit={handleSignUp}>
                <div className="infor_sigup row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control1"
                      placeholder="Họ của bạn"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && <div className="text-danger1">{errors.firstName}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control1"
                      placeholder="Tên của bạn"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <div className="text-danger1">{errors.lastName}</div>}
                  </div>
                </div>

                <div className="input_email mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control1"
                    placeholder="Địa chỉ Email"
                    
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="text-danger1">{errors.email}</div>}
                </div>

                <div className="input_password mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control1"
                    placeholder="Mật khẩu"
                    autoComplete="on"
                    value={formValues.password}
                    onChange={handleInputChange}
                    
                  />
                  {errors.password && <div className="text-danger1">{errors.password}</div>}
                </div>
                <div className="input_password mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control1"
                    placeholder="Điền lại mật khẩu"
                    autoComplete="on"
                    value={formValues.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <span
                    className={`fa fa-fw field-icon toggle-password ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  ></span>
                  {errors.confirmPassword && <div className="text-danger1">{errors.confirmPassword}</div>}
                </div>

                <div className="form-check checkbox_input mt-4 text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="subscribeCheckbox"
                  />
                  <label className="form-check-label text-white" htmlFor="subscribeCheckbox">
                    Tôi muốn nhận email với các ưu đãi hấp dẫn và gợi ý cá nhân.
                  </label>
                </div>

                <button className="btn_next w-100 mt-4" type="submit">
                  Tiếp tục
                </button>

                <div className="term_policy mt-3 text-white">
                  <span>Bằng việc đăng kí, bạn đã đồng ý với Green Leaf về </span>
                  <Link to="/terms_of_use" className="text-danger1">Điều khoản</Link>
                  <span> và </span>
                  <Link to="/privacy_policy" className="text-danger1">Dịch vụ</Link>.
                </div>

                <div className="sign_in mt-4">
                  <span className="text-white">Bạn đã có tài khoản? </span>
                  <Link to="/" className="text-danger1">Đăng nhập</Link>
                </div>
              </form>
            </div>

            <div className="sign_footer mt-4 text-white">
              <img src="" alt="" />© 2024 <span>Green Leaf</span>. Bản quyền thuộc về Công ty TNHH Green Leaf.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
