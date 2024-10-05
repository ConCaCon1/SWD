import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpSteps.scss";

function SignUpSteps() {
  const [Customer, setCustomer] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Bussiness, setBussiness] = useState(true);
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Công ty của bạn là");
  const handleCustomer = () => {
    setCustomer(true);
    setBussiness(false);
  };

  const handleBussiness = () => {
    setBussiness(true);
    setCustomer(false);
  };

  const signUpNow = (e) => {
    e.preventDefault();
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelect(false);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };
  return (
    <div className="SignUpSteps">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-10 text-center">
            <div className="sign_form p-4">
              <div className="">
                <Link to="/">
                  <img
                    className="logo"
                    src="https://i.pinimg.com/564x/b5/6a/46/b56a46bfe3c01d45924f7cd222a9df7a.jpg"
                    alt="Logo"
                  />
                </Link>
                <div className="forgot_form">
                  <div className="main-tabs">
                    <ul className="nav">
                      <li className="nav-item">
                        <button
                          onClick={handleBussiness}
                          className={`btn_toggle ${Bussiness ? "active" : ""}`}
                        >
                          Đăng kí doanh nghiệp
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          onClick={handleCustomer}
                          className={`btn_toggle ${Customer ? "active" : ""}`}
                        >
                          Đăng kí khách hàng
                        </button>
                      </li>
                    </ul>
                  </div>

                  {Customer && (
                    <form className="input_box" onSubmit={signUpNow}>
                      <p className="text-white pd-30">
                        Đăng kí và bắt đầu sử dụng dịch vụ Green Leaf
                      </p>{" "}
                      <div className="business">
                        <input
                          type="text"
                          className="busniness_input"
                          placeholder="Số điện thoại liên lạc"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="business">
                        <input
                          type="text"
                          className="busniness_input"
                          placeholder="Địa chỉ"
                          required
                        />
                      </div>
                      <div className="text_box">
                        <textarea
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Mô tả chi tiết về bản thân của bạn..."
                          data-testid="description-input"
                        ></textarea>
                      </div>
                    
                      <button type="submit" className="btn_signup ">
                        Đăng ký ngay
                      </button>
                    </form>
                  )}

                  {Bussiness && (
                    <form className="input_box" onSubmit={signUpNow}>
                      <p className="text-white pd-30">
                        Đăng kí và bắt đầu sử dụng dịch vụ Green Leaf
                      </p>
                      <div className="business">
                        <input
                          type="text"
                          className="busniness_input"
                          placeholder="Tên Công ty"
                          required
                        />
                      </div>
                      <div className="select-menu">
                        <div
                          onClick={() => setSelect((prev) => !prev)}
                          className="select-btn"
                        >
                          <span className="btn-text">{selectedOption}</span>
                          <span className="btn-icon">
                            <i className="fa-solid fa-caret-down"></i>
                          </span>{" "}
                        </div>
                        {select && (
                  
                          <ul className="menu-dropdown">
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Development")}
                            >
                              Development
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Business")}
                            >
                              Business
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("Finance & Accounting")
                              }
                            >
                              Finance & Accounting
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("IT & Software")
                              }
                            >
                              IT & Software
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("Office Productivity")
                              }
                            >
                              Office Productivity
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("Personal Development")
                              }
                            >
                              Personal Development
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Design")}
                            >
                              Design
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Marketing")}
                            >
                              Marketing
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Lifestyle")}
                            >
                              Lifestyle
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Photography")}
                            >
                              Photography
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("Health & Fitness")
                              }
                            >
                              Health & Fitness
                            </li>
                            <li
                              className="option"
                              onClick={() => handleOptionSelect("Music")}
                            >
                              Music
                            </li>
                            <li
                              className="option"
                              onClick={() =>
                                handleOptionSelect("Teaching & Academics")
                              }
                            >
                              Teaching & Academics
                            </li>
                          </ul>
                    
                        )}
                      </div>
                      <div className="business">
                        <input
                          type="text"
                          className="busniness_input"
                          placeholder="Số điện thoại liên lạc"
                          value={phoneNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="business">
                        <input
                          type="text"
                          className="busniness_input"
                          placeholder="Địa chỉ"
                          required
                        />
                      </div>
                      <div className="text_box">
                        <textarea
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Mô tả chi tiết về công ty của bạn"
                        ></textarea>
                      </div>
                   
                      <button type="submit" className="btn_signup">
                        Đăng ký ngay
                      </button>
                    </form>
                  )}

                  <div className="sign-in-button">
                    <span className="text-white cl-b">
                      Bạn đã có tài khoản?{" "}
                    </span>
                    <a href="/" className="text-danger1">
                      Đăng nhập
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sign_footer mt-4 text-white">
            <img src="" alt="" />© 2024 <span>Green Leaf</span>. Bản quyền thuộc
            về Công ty TNHH Green Leaf.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSteps;
