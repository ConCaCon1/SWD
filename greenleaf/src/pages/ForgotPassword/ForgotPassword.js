import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ForgotPassword.scss";
import axios from "axios";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  
  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); 
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = "service_i163wnf";
    const templateId = "template_hvv89ol";
    const publicKey = "ZKebbTSFvdQDCGlsj";
    const otp = generateOTP();
    


    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        user_email: email,
        otp:otp,        
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      navigate("/emailverification", { state: { email, otp } });
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <div className="ForgotPassword">
      <div className="container d-flex justify-content-center align-items-center mt-50">
        <div
          className="sign_form p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className=" p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-white text-center">Đặt lại mật khẩu</h2>
            <p className="text-white text-center">
              Vui lòng nhập địa chỉ email mà bạn đã sử dụng để đăng ký và chúng
              tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu qua Email.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control1"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Đặt lại mật khẩu
              </button>
            </form>
            <div className="sign_in mt-4">
              <span className="text-white">Trở lại trang </span>
              <Link to="/" className="text-danger1">
                Đăng nhập
              </Link>
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
