import React, { useState, useRef, useEffect } from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import Slider from "react-slick";
import greenLeafLogo from "../../assets/images/Green_Leaf_Logo-removebg-preview.png";

const Home = () => {
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
  //====================================
  return (
    <div className="Home">
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
      <div className="banner">
        <div className="row">
          <div className="slider-container">
            <Slider ref={sliderRef1} {...settings}>
              <div className="item">
                <div className="d-block w-100">
                  <img
                    src="https://themezhub.net/odex-live/odex/assets/img/banner-4.png"
                    alt="Banner 1"
                  />
                  <div className="item-caption banner-caption light">
                    <h4>
                      Get <span className="theme-cl">Free Deliver</span> Your
                      Order At Home
                    </h4>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <a href="/" className="btn-theme">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="d-block w-100">
                  <img
                    src="https://themezhub.net/odex-live/odex/assets/img/banner-6.png"
                    alt="Banner 2"
                  />
                  <div className="item-caption banner-caption">
                    <h4 className="black-text">
                      Get <span className="theme-cl">Fresh</span> Fruits &
                      Vegetables
                    </h4>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <a href="/" className="btn-theme">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="d-block w-100">
                  <img
                    src="https://themezhub.net/odex-live/odex/assets/img/banner-5.png"
                    alt="Banner 3"
                  />
                  <div className="item-caption banner-caption light">
                    <h4>
                      Fresh Fruits in{" "}
                      <span className="theme-cl">Your City</span> with Free
                      Deliver
                    </h4>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <a href="/" className=" btn-theme">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="btn-wrap">
  <button
    className="prev-btn-fc"
    onClick={handlePrev1}
  >
    {/* <span>{<PreArrowIcon />}</span> */}
  </button>
  <button
    className="next-btn-fc"
    onClick={handleNext1}
  >
    {/* <span>{<NextArrowIcon />}</span> */}
  </button>
</div>

          </div>
        </div>
      </div>
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="slider-container">
                <Slider {...settings1}>
                  <div className="item-cate">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html"></a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Dairy &amp; Eggs</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Beverages</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Meat &amp; Seafood</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-5.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Fruits</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-6.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">
                            Grocery &amp; Staples
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-7.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Snacks</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-8.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Pets care</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-9.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Electornics</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-10.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Home Care</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-12.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Noodles &amp; Sauces</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_category_box border_style rounded">
                      <div className="woo_cat_thumb">
                        <a href="search-sidebar.html">
                          <img
                            src="https://themezhub.net/odex-live/odex/assets/img/c-11.png"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="woo_cat_caption">
                        <h4>
                          <a href="search-sidebar.html">Dry Snacks</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </Slider>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right ${
          isOpen ? "show" : "hide"
        }`}
        style={{ display: isOpen ? "block" : "none" }}
        id="rightMenu"
      >
        <div className="rightMenu-scroll">
          <h4 className="cart_heading">Your cart</h4>
          <button
            onClick={toggleRightMenu}
            className="w3-bar-item w3-button w3-large"
          >
            <span className="close-button">✕</span>
          </button>
          <div className="right-ch-sideBar" id="side-scroll">
            <div className="cart_select_items">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="cart_selected_single" key={index}>
                  <div className="cart_selected_single_thumb">
                    <a href="/">
                      <img
                        src="assets/img/product.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="cart_selected_single_caption">
                    <h4 className="product_title">Mahik Book pro</h4>
                    <span className="numberof_item">$15x2</span>
                    <a href="/" className="text-danger">
                      Remove
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart_subtotal">
              <h6>
                Subtotal<span className="theme-cl">$120.47</span>
              </h6>
            </div>
            <div className="cart_action">
              <ul>
                <li>
                  <a href="/" className="btn btn-go-cart btn-theme">
                    View/Edit Cart
                  </a>
                </li>
                <li>
                  <a href="/" className="btn btn-checkout">
                    Checkout Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="sec-heading-flex pl-2 pr-2">
                <div className="sec-heading-flex-one">
                  <h2>Fresh Vegetables</h2>
                </div>
                <div className="sec-heading-flex-last">
                  <a href="search-sidebar.html" className="btn btn-theme">
                    View More<i className="ti-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="slider-container">
                <ToastContainer />
                <Slider {...settings2}>
                  {products.map((product) => (
                    <div key={product.productId} className="item">
                      <div className="woo_product_grid">
                        <span className="woo_pr_tag hot">Hot</span>
                        <div className="woo_product_thumb">
                          <img
                            src={product.imageUrl}
                            className="img-fluid"
                            alt={product.name}
                          />
                        </div>
                        <div className="woo_product_caption center">
                          <div className="woo_rate">
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star filled"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="woo_title">
                            <h4 className="woo_pro_title">
                              <a href="detail-1.html">{product.name}</a>
                            </h4>
                          </div>
                          <div className="woo_price">
                            <h6>${product.price}</h6>
                          </div>
                        </div>
                        <div className="woo_product_cart hover">
                          <ul>
                            <li>
                              <a
                                href="/"
                                data-toggle="modal"
                                data-target="#viewproduct-over"
                                className="woo_cart_btn btn_cart"
                              >
                                <i className="fa fa-eye" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="add-to-cart.html"
                                className="woo_cart_btn btn_view"
                                onClick={notifyCart}
                              >
                                <i
                                  className="fa fa-shopping-cart"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="woo_cart_btn btn_save"
                                onClick={notifySave}
                              >
                                <i
                                  className="fa fa-heart"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">Miến Ngan Hải Dương Khánh Thọ </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="sec-heading-flex pl-2 pr-2">
                <div className="sec-heading-flex-one">
                  <h2>Fresh Vegetables</h2>
                </div>
                <div className="sec-heading-flex-last">
                  <a href="search-sidebar.html" className="btn btn-theme">
                    View More<i className="ti-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="slider-container">
                <Slider {...settings2}>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-banner-wrap gray section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="slider-container">
                <Slider {...settings3}>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>15% Off</p>
                          <div className="offer_title">
                            Better Offer for You
                          </div>
                          <span>Save More Thank 15%</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>40% Off</p>
                          <div className="offer_title">Super Market Deals</div>
                          <span>40% Off on All Dry Foods</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>15% Off</p>
                          <div className="offer_title">
                            Better Offer for You
                          </div>
                          <span>Drinking is Goodness for Health</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>10% Off</p>
                          <div className="offer_title">
                            Good Deals in Your City
                          </div>
                          <span>Save 10% on All Fruits</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>25% Off</p>
                          <div className="offer_title">
                            Good Offer on First Time
                          </div>
                          <span>Save 25% on Fresh Vegetables</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>30% Off</p>
                          <div className="offer_title">Super Market Deals</div>
                          <span>Save 30% on Eggs &amp; Dairy</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>15% Off</p>
                          <div className="offer_title">
                            Better Offer for You
                          </div>
                          <span>Save More Thank 15%</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>40% Off</p>
                          <div className="offer_title">Super Market Deals</div>
                          <span>40% Off on All Dry Foods</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>15% Off</p>
                          <div className="offer_title">
                            Better Offer for You
                          </div>
                          <span>Drinking is Goodness for Health</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>10% Off</p>
                          <div className="offer_title">
                            Good Deals in Your City
                          </div>
                          <span>Save 10% on All Fruits</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>25% Off</p>
                          <div className="offer_title">
                            Good Offer on First Time
                          </div>
                          <span>Save 25% on Fresh Vegetables</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="offer_item">
                      <div className="offer_item_thumb">
                        <div className="offer-overlay"></div>
                        <img
                          src="https://themezhub.net/odex-live/odex/assets/img/offer-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="offer_caption">
                        <div className="offer_bottom_caption">
                          <p>30% Off</p>
                          <div className="offer_title">Super Market Deals</div>
                          <span>Save 30% on Eggs &amp; Dairy</span>
                        </div>
                        <a
                          href="search-sidebar.html"
                          className="btn offer_box_btn"
                        >
                          Explore Now
                        </a>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="sec-heading-flex pl-2 pr-2">
                <div className="sec-heading-flex-one">
                  <h2>Fresh Vegetables</h2>
                </div>
                <div className="sec-heading-flex-last">
                  <a href="search-sidebar.html" className="btn btn-theme">
                    View More<i className="ti-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="slider-container">
                <Slider {...settings2}>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="woo_product_grid">
                      <span className="woo_pr_tag hot">Hot</span>
                      <div className="woo_product_thumb">
                        <img
                          src="https://ocop-vietnam.vn/storage/2023/11/Mien-Ngan-Hai-Duong-Khanh-Tho-Goi-120Gr-4-Sao-OCOP-768x768.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="woo_product_caption center">
                        <div className="woo_rate">
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star filled"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="woo_title">
                          <h4 className="woo_pro_title">
                            <a href="detail-1.html">
                              Miến Ngan Hải Dương Khánh Thọ{" "}
                            </a>
                          </h4>
                        </div>
                        <div className="woo_price">
                          <h6>
                            $72.47<span className="less_price">$112.10</span>
                          </h6>
                        </div>
                      </div>
                      <div className="woo_product_cart hover">
                        <ul>
                          <li>
                            <a
                              href="/"
                              data-toggle="modal"
                              data-target="#viewproduct-over"
                              className="woo_cart_btn btn_cart"
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="add-to-cart.html"
                              className="woo_cart_btn btn_view"
                            >
                              <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="woo_cart_btn btn_save"
                            >
                              <i className="fa fa-heart" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
