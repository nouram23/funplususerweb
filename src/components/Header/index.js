/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="main-header-area">
      <div className="header-middle py-30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                <div className="header-contact d-none d-lg-flex">
                  <a href="#">Таньд санал болгох　</a>
                  <a href="#">Хамтран ажилах</a>
                </div>
                <a href="index.html" className="header-logo">
                  <img src="assets/images/logo/logo.svg" alt="Header Logo" />
                </a>
                <div className="header-right">
                  <ul>
                    <li>
                      <a href="/auth/login">Нэвтрэх</a>
                    </li>
                    <li className="Cont1">
                      <a href="#">Холбоо барих</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <input type="checkbox" className="checkbox" id="chk" />
                  <label className="label" htmlFor="chk">
                    <i className="fa fa-moon-o" />
                    <i className="fa fa-sun-o" />
                    <div className="ball" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="header-sticky py-4 py-lg-0"
        style={{ background: "#242424" }}
      >
        <div className="container">
          <div className="header-nav position-relative">
            <div className="row align-items-center">
              <div className="col-lg-3 col-6">
                <a href="#" className="header-logo">
                  <img
                    src="assets/images/logo/logo.svg"
                    alt="Header Logo"
                    style={{ padding: 0 }}
                  />
                </a>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="main-menu">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <a href="#">Таньд санал болгох</a>
                      </li>
                      <li>
                        <a href="#">Хамтран ажилах</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="header-right">
                  <ul>
                    <li>
                      <a href="#">Нэвтрэх</a>
                    </li>
                    <li className="Cont1">
                      <a href="#">Холбоо барих</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
