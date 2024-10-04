import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./EmailVerification.scss";
function EmailVerification() {
  const { state } = useLocation();
  const email = state?.email || "email123@gmail.com";
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();
  const generatedOtp = state?.otp; 
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); 
    if (enteredOtp === generatedOtp) {
      alert("Xác minh thành công!");
      navigate("/changepassword");
    } else {
      setMessage("Mã OTP không chính xác. Vui lòng thử lại.");
    }
  };

  return (
    <div className="EmailVerification">
      <div className="container d-flex justify-content-center align-items-center mt-50">
        <div
          className="sign_form p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-center text-white">Xác minh tài khoản</h2>
            <p className="text-center text-white">
              Chúng tôi đã gửi mã code tới {email}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="otp-input d-flex justify-content-between mb-4">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    className="form-control otp-input-box"
                    value={data}
                    maxLength="1"
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Xác minh tài khoản
              </button>
            </form>
            {message && <p className="text-center text-white mt-3">{message}</p>}
            <div className="text-center mt-3">
              <p className="text-white">
                Không nhận được mã OTP?{" "}
                <a href="/emailverification" className="text-danger1">
                  Gửi lại mã OTP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sign_footer mt-4 text-white mb-0">
        <img src="" alt="" />© 2024 <span>Green Leaf</span>. Bản quyền thuộc về
        Công ty TNHH Green Leaf.
      </div>
    </div>
  );
}

export default EmailVerification;
