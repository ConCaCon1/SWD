import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import classNames from "classnames";
import greenLeafLogo from "../../assets/images/Green_Leaf_Logo-removebg-preview.png";
import "./ContactUs.scss";
export default function ContactUS() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [slideIndex1, setSlideIndex1] = useState(0);
  const [slideIndex2, setSlideIndex2] = useState(0);
  const [slideIndex3, setSlideIndex3] = useState(0);

  const [isPortrait, setIsPortrait] = useState(window.innerWidth < 988);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  //==============toastify======================
  const notifySave = (event) => {
    event.preventDefault();
    toast("Đã thêm vào Yêu Thích");
  };
  const notifyCart = (event) => {
    event.preventDefault();
    toast("Đã thêm vào Giỏ Hàng");
  };
  //==============API======================
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://152.42.199.190:8888/api/Products")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.productId >= 1 && product.productId <= 8
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  //====================================
  const toggleSearch = (event) => {
    event.preventDefault();
    setIsSearchVisible(!isSearchVisible);
  };
  const toggleRightMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // setIsMenuOpen(!isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
    if (currencyOpen) setCurrencyOpen(false);
  };

  const toggleCurrency = () => {
    setCurrencyOpen(!currencyOpen);
    if (languageOpen) setLanguageOpen(false);
  };

  //====================================
  const handleMouseEnter = (submenu) => {
    setDropdownOpen(true);
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
    setActiveSubmenu(null);
  };

  //====================================
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < 988);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //====================================
  const handlePrev1 = () => {
    sliderRef1.current.slickPrev();
  };

  const handleNext1 = () => {
    sliderRef1.current.slickNext();
  };

  const handlePrev2 = () => {
    sliderRef2.current.slickPrev();
  };

  const handleNext2 = () => {
    sliderRef2.current.slickNext();
  };

  const handlePrev3 = () => {
    sliderRef3.current.slickPrev();
  };

  const handleNext3 = () => {
    sliderRef3.current.slickNext();
  };
  //====================================

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    waitForAnimate: false,
    fade: true,
  };
  const settings1 = {
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setSlideIndex1(current),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current2) => setSlideIndex2(current2),
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings3 = {
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current3) => setSlideIndex3(current3),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Contact_Us">
      <div className="header">
        <div className="header_topbar dark">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 col-4">
                <ul className="tp-list d-flex">
                  <li className="dropdown">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLanguage();
                      }}
                    >
                      Eng <i className="ml-1 fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`dropdown-menu ${languageOpen ? "show" : ""}`}
                    >
                      <li>
                        <a href="/">English</a>
                      </li>
                      <li>
                        <a href="/">French</a>
                      </li>
                      <li>
                        <a href="/">Spanish</a>
                      </li>
                      <li>
                        <a href="/">Italian</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCurrency();
                      }}
                    >
                      USD <i className="ml-1 fa fa-angle-down"></i>
                    </a>
                    <ul
                      className={`dropdown-menu ${currencyOpen ? "show" : ""}`}
                    >
                      <li>
                        <a href="/">EUR</a>
                      </li>
                      <li>
                        <a href="/">AUD</a>
                      </li>
                      <li>
                        <a href="/">GBP</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-8">
                <div className="topbar_menu text-right">
                  <ul className="d-flex justify-content-end">
                    <li>
                      <a href="order.html">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="order-tracking.html">
                        <i className="fas fa-map-marker-alt"></i> Track Order
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html" className="d-none d-md-block">
                        <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                        Favourites
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="general_header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                <a className="nav-brand" href="/">
                  <img src={greenLeafLogo} className="logo" alt="" />
                </a>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-4 col-3">
                <i className="fa fa-bars menu-toggle" onClick={toggleMenu}></i>
                <nav
                  id="navigation"
                  className={`navigation ${
                    isPortrait ? "navigation-portrait" : "navigation-landscape"
                  }`}
                >
                  <div
                    className={classNames("nav-menus-wrapper", {
                      "nav-menus-wrapper-open": isMenuOpen,
                    })}
                  >
                    <span
                      class="nav-menus-wrapper-close-button"
                      onClick={toggleMenu}
                    >
                      ✕
                    </span>
                    <ul className="nav-menu">
                      <li
                        onMouseEnter={() => handleMouseEnter("home")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/home">
                          Home
                          <i className="fa-solid fa-chevron-down arrow"></i>
                        </a>
                        <ul
                          className={`nav-dropdown ${
                            activeSubmenu === "home" ? "show" : ""
                          }`}
                        >
                          <li
                            onMouseEnter={() => setSubDropdownOpen(true)}
                            onMouseLeave={() => setSubDropdownOpen(false)}
                          >
                            <a href="/">
                              Grocery
                              <i className="fa-solid fa-chevron-right"></i>
                            </a>
                            <ul
                              className={`nav-submenu ${
                                subDropdownOpen ? "show" : ""
                              }`}
                            >
                              <li className="submenu-item">
                                <a href="/">Item 1</a>
                              </li>
                              <li className="submenu-item">
                                <a href="/">Item 2</a>
                              </li>
                              <li className="submenu-item">
                                <a href="/">Item 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/">Retail Design</a>
                          </li>
                          <li>
                            <a href="/">Organic</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        onMouseEnter={() => handleMouseEnter("product")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a href="/product">
                          Product
                          <i className="fa-solid fa-chevron-down arrow"></i>
                        </a>
                        <ul
                          className={`nav-dropdown ${
                            activeSubmenu === "product" ? "show" : ""
                          }`}
                        >
                          <li
                            onMouseEnter={() => setSubDropdownOpen(true)}
                            onMouseLeave={() => setSubDropdownOpen(false)}
                          >
                            <a href="/">
                              Grocery
                              <i className="fa-solid fa-chevron-right"></i>
                            </a>
                            <ul
                              className={`nav-submenu ${
                                subDropdownOpen ? "show" : ""
                              }`}
                            >
                              <li className="submenu-item">
                                <a href="/">Item 1</a>
                              </li>
                              <li className="submenu-item">
                                <a href="/">Item 2</a>
                              </li>
                              <li className="submenu-item">
                                <a href="/">Item 3</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/">Retail Design</a>
                          </li>
                          <li>
                            <a href="/">Organic</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="nav-overlay-panel"></div> */}
                </nav>
              </div>
              {isMenuOpen && (
                <div className="nav-overlay-panel" onClick={closeMenu}></div>
              )}
              <div className="col-lg-3 col-md-3 col-sm-5 col-5">
                <div className="general_head_right flex">
                  <ul>
                    <li>
                      <a href="/" onClick={toggleSearch}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="login-signup.html">
                        <i className="fa fa-user"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/" onClick={toggleRightMenu}>
                        <i className="fa fa-shopping-cart"></i>
                        <span className="cart_counter">0</span>
                      </a>
                    </li>
                  </ul>
                  <div
                    id="mySearch"
                    className={`blocks search_blocks ${
                      isSearchVisible ? "show" : ""
                    }`}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search entire store here..."
                      />
                      <div className="input-group-append">
                        <button className="btn search_btn" type="button">
                          <i className="ti-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_container breadcrumbs_wrap.dark">
        <div className="contaienr">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="text-center">
                <h2 className="breadcrumbs_title">Get in Touch</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb1">
                    <li className="breadcrumb-item">
                      <a href="/home">
                        <i className="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/shop">Shop</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
