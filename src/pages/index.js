import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className="slider-area">
        <div className="swiper-container main-slider swiper-arrow with-bg_white">
          <div className="swiper-wrapper">
            <div className="swiper-slide animation-style-01">
              <div
                className="slide-inner style-1 bg-height"
                data-bg-image="assets/images/slider/bg/1-1.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1  align-self-center">
                      <div className="slide-content text-white">
                        <h2 className="title">Basketball</h2>
                        <p className="short-desc">Хамгийн эрэлттэй салбар</p>
                        <div className="btn-wrap">
                          <a
                            className="btn btn-custom-size xl-size btn-pronia-primary"
                            href="javascript:void(0)"
                          >
                            Дэлгэрэнгүй
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                      <div className="inner-img">
                        <div className="scene fill">
                          <div className="expand-width" data-depth="0.2">
                            <img
                              src="assets/images/slider/inner-img/1.svg"
                              alt="Inner Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide animation-style-01">
              <div
                className="slide-inner style-1 bg-height"
                data-bg-image="assets/images/slider/bg/1-2.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                      <div className="slide-content text-white">
                        <h2 className="title">Billard </h2>
                        <p className="short-desc">Хамгийн эрэлттэй салбар</p>
                        <div className="btn-wrap">
                          <a
                            className="btn btn-custom-size xl-size btn-pronia-primary"
                            href="javascript:void(0)"
                          >
                            Дэлгэрэнгүй
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                      <div className="inner-img">
                        <div className="scene fill">
                          <div className="expand-width" data-depth="0.2">
                            <img
                              src="assets/images/slider/inner-img/2.svg"
                              alt="Inner Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide animation-style-01">
              <div
                className="slide-inner style-1 bg-height"
                data-bg-image="assets/images/slider/bg/1-3.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                      <div className="slide-content text-white">
                        <h2 className="title">Billard </h2>
                        <p className="short-desc">Хамгийн эрэлттэй салбар</p>
                        <div className="btn-wrap">
                          <a
                            className="btn btn-custom-size xl-size btn-pronia-primary"
                            href="javascript:void(0)"
                          >
                            Дэлгэрэнгүй
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                      <div className="inner-img">
                        <div className="scene fill">
                          <div className="expand-width" data-depth="0.2">
                            <img
                              src="assets/images/slider/inner-img/3.svg"
                              alt="Inner Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination d-md-none" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
      <div className="product-area section-space-top-100">
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: 30 }}>
            <h4 className="section-title mb-0">МАНАЙХТАЙ ХАМТРАГЧ</h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="featured"
                  role="tabpanel"
                  aria-labelledby="featured-tab"
                >
                  <div className="product-item-wrap row">
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-1.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            24 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="product.html">
                            <h3 className="Cwhite">Billard</h3>
                          </a>
                          <a className="Product-z1" href="product.html">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-2.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            15 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Barber</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-3.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            36 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Basketball</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-4.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            36 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Swinming Pool</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-5.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            24 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Beauty</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-6.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            15 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Bowling</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-7.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            36 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Coach</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-8.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            12 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Extreme</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-9.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            24 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Karaoke</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-10.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            15 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Manicure</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-11.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            36 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Maze</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-12.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            12 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Paintball</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    {/* NEXT LINE */}
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-13.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            24 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Photography</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-14.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            15 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">PingPong</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-15.svg"
                            alt="Product Images"
                          />
                          <div className="Tbox">
                            36 <i className="fa fa-university" />
                          </div>
                        </div>
                        <div className="product-content">
                          <a href="javascript:void(0)">
                            <h3 className="Cwhite">Restaurant</h3>
                          </a>
                          <a className="Product-z1" href="javascript:void(0)">
                            <i className="fa fa-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-4 col-sm-6">
                      <div className="product-item">
                        <div className="product-img">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/coming-soon.png"
                            alt="Product Images"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
