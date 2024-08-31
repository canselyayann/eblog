import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="eblog-header-area header-two header--sticky">
      <div className="eblog-home-1-menu">
        <div className="eblog-site-main-logo-menu-social">
          <div className="container">
            <div className="row align-items-center plr_md--30 plr_sm--30 plr--10">
              <div className="col-xl-2 col-lg-2 col-md-7 col-sm-7 col-7 p-0">
                <div className="eblog-site-logo">
                  <Link to="/" className="logo-light">
                    <img src="public/images/logo/logo-02.svg" alt="eblog" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <nav>
                  <div className="eblog-home-1-menu">
                    <ul className="list-unstyled eblog-desktop-menu">
                      <li className="menu-item eblog-has-dropdown">
                        <Link to="/" className="eblog-dropdown-main-element active">Home</Link>
                      </li>
                      <li className="menu-item eblog-has-dropdown">
                        <Link to="#" className="eblog-dropdown-main-element">Post Details</Link>
                      </li>
                      <li className="menu-item eblog-has-dropdown">
                        <Link to="/signin" className="eblog-dropdown-main-element">Sign In</Link>
                      </li>
                      <li className="menu-item eblog-has-dropdown">
                        <Link to="/signup" className="eblog-dropdown-main-element">Sign Up</Link>
                      </li>
                      <li className="menu-item eblog-has-dropdown">
                        <Link to="#" className="eblog-dropdown-main-element">Author</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/lifestyle" className="eblog-dropdown-main-element">Life Style</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-5 col-sm-5 col-5 p-0">
                <div className="eblog-header-top-social-media">
                  <a href="#" id="search" className="eblog-header-top-search-btn search-icon action-item icon">
                    {/* SVG Icon */}
                  </a>
                  <div className="search-input-area">
                    <div className="container">
                      <div className="search-input-inner">
                        <div className="input-div">
                          <input id="searchInput1" className="search-input" type="text" placeholder="Search by keyword or #" />
                        </div>
                        <div className="search-close-icon"><i className="fa-regular fa-xmark-large rt-xmark"></i></div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="cart-bar">
                    {/* SVG Icon */}
                  </a>
                  <div className="eblog-header-top-menu-bar menu-btn">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <div className="line small"></div>
                      <div className="line big"></div>
                      <div className="line small"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
