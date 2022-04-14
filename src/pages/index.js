import ServiceItem from "components/ServiveItem/item";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      {/* <div className="slider-area mt-24">
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
                      <div className="slide-content  ">
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
                      <div className="slide-content  ">
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
                      <div className="slide-content  ">
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
      </div> */}
      <div className="md:mt-24 mt-20 bg-[#1a1a1a] ">
        <div className="md:max-w-7xl  max-w-xl mx-auto py-10">
          <div className="flex justify-center flex-wrap mx-auto ">
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-1.svg",
                count: 10,
                name: "Биллиард",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-2.svg",
                count: 10,
                name: "Үсчин",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-3.svg",
                count: 10,
                name: "Заал",
              }}
            />
            <ServiceItem
              longText={{
                icon: "assets/images/product/medium-size/1-4.svg",
                count: 10,
                name: "Усан бассейн",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-5.svg",
                count: 10,
                name: "Гоо сайхан",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-6.svg",
                count: 10,
                name: "Боулинг",
              }}
            />
            <ServiceItem
              longText={{
                icon: "assets/images/product/medium-size/1-7.svg",
                count: 10,
                name: "Сэтгэл судлаач",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-8.svg",
                count: 10,
                name: "Экстрем спорт",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-9.svg",
                count: 10,
                name: "Кароеке",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-10.svg",
                count: 10,
                name: "Маникюр",
              }}
            />
            <ServiceItem
              longText={{
                icon: "assets/images/product/medium-size/1-11.svg",
                count: 10,
                name: "Энтертаймент төв",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-12.svg",
                count: 10,
                name: "Пейнтбол",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-13.svg",
                count: 10,
                name: "Зургийн студи",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-14.svg",
                count: 10,
                name: "Теннис",
              }}
            />
            <ServiceItem
              item={{
                icon: "assets/images/product/medium-size/1-15.svg",
                count: 10,
                name: "Ресторан",
              }}
            />
            <ServiceItem isComingSoon={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
