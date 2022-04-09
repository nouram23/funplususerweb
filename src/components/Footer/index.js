/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <>
      <div className="text-white bg-[#242424]">
        <div className=" flex justify-around items-center max-w-screen-2xl mx-auto">
          <div className="">
            <div className="">
              <a href="index.html">
                <img
                  className="h-20"
                  src="assets/images/logo/logo.svg"
                  alt="Logo"
                />
              </a>
            </div>

            <ul className="flex text-2xl">
              <li className="rounded-full h-6 w-6 ring-white">
                <a
                  href="#"
                  data-tippy="Facebook"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-tippy="Twitter"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-tippy="Pinterest"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-tippy="Instragram"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <h3 className="">Холбоо барих</h3>
          <ul className="">
            <li>Хаяг: Mongolia, Ulaanbaatar</li>
            <li>Утас: +(976) 0000-0000</li>
            <li>И-мэйл: funplus@gmail.com</li>
          </ul>
        </div>

        <div className="">
          <h3 className="">Fun Plus</h3>
          <ul className="">
            <li>
              <a href="#">Бидний тухай</a>
            </li>
            <li>
              <a href="#">Нээлттэй ажлын байр</a>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="">
            <h3 className="">Тусламж</h3>
            <ul className="">
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

          <div className="copyright">
            <span style={{ float: "left" }}>© Copyright 2021 Fun Plus LLC</span>
            <span style={{ float: "right" }}>
              Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах
              хориотой.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
