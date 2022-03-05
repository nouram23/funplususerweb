/* eslint-disable @next/next/no-img-element */

export default function Footer() {



  return (
    <>

      <div className="footer-area section-space-top-90" data-bg-image style={{ background: '#242424' }}>
        <div className="footer-top pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-widget-item">
                  <div className="footer-widget-logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo.svg"  alt="Logo" />
                    </a>
                  </div>
                  <div className="social-link with-border">
                    <ul>
                      <li>
                        <a href="#" data-tippy="Facebook" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-tippy="Pinterest" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                          <i className="fa fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-tippy="Instragram" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pt-60">
                <div className="footer-widget-item">
                  <h3 className="footer-widget-title">Холбоо барих</h3>
                  <ul className="footer-widget-list-item">
                    <li>
                      Хаяг: Mongolia, Ulaanbaatar
                    </li>
                    <li>
                      Утас: +(976) 0000-0000
                    </li>
                    <li>
                      И-мэйл: funplus@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pt-60">
                <div className="footer-widget-item">
                  <h3 className="footer-widget-title">Fun Plus</h3>
                  <ul className="footer-widget-list-item">
                    <li>
                      <a href="#">Бидний тухай</a>
                    </li>
                    <li>
                      <a href="#">Нээлттэй ажлын байр</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pt-60">
                <div className="footer-widget-item">
                  <h3 className="footer-widget-title">Тусламж</h3>
                  <ul className="footer-widget-list-item">
                    <li>
                      <a href="#">Түгээмэл асуулт</a>
                    </li>
                    <li>
                      <a href="#">Хамтрагч байгууллагууд</a>
                    </li>
                    <li>
                      <a href="#">Үүсгэн байгуулагч</a>
                    </li>
                    <li>
                      <a href="#">Үйлчилгээний нөхцөл</a>
                    </li>
                    <li>
                      <a href="#">Бусад</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright">
                  <span style={{ float: 'left' }}>
                    © Copyright 2021 Fun Plus LLC
                  </span>
                  <span style={{ float: 'right' }}>
                    Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл
                    хуулбарлах хориотой.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}