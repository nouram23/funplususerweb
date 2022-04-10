/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <>
      <div className="text-white bg-[#242424]">
        <div className="flex justify-between items-start lg:flex-row flex-col  lg:max-w-7xl w-4/5 mx-auto lg:py-24 py-4 sm:pl-0 pl-10">
          <div className=" ">
            <a href="index.html">
              <img
                className="sm:h-20 h-16"
                src="assets/images/logo/logo.svg"
                alt="Logo"
              />
            </a>

            <ul className="flex text-xs sm:space-x-4 space-x-2 mt-4 ">
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                <a
                  className="  hover:text-white "
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
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                <a
                  className="  hover:text-white "
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
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34] ">
                <a
                  className="  hover:text-white "
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
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                <a
                  className="  hover:text-white "
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
          <div className="cursor-default mt-3 lg:mt-0">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3 ">
              Холбоо барих
            </h3>
            <ul className="leading-7 sm:text-base text-sm">
              <li>Хаяг: Mongolia, Ulaanbaatar</li>
              <li>Утас: +(976) 0000-0000</li>
              <li>И-мэйл: funplus@gmail.com</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3">Fun Plus</h3>
            <ul className="leading-7 sm:text-base text-sm">
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Бидний тухай
                </a>
              </li>
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Нээлттэй ажлын байр
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3">Тусламж</h3>
            <ul className="leading-7 sm:text-base text-sm">
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Түгээмэл асуулт
                </a>
              </li>
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Хамтрагч байгууллагууд
                </a>
              </li>
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Үүсгэн байгуулагч
                </a>
              </li>
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Үйлчилгээний нөхцөл
                </a>
              </li>
              <li>
                <a className="hover:text-[#9d32c2]" href="#">
                  Бусад
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col  lg:justify-between lg:max-w-7xl w-4/5 mx-auto py-4 border-t-2 border-black sm:text-base text-xs text-center">
          © Copyright 2021 Fun Plus LLC
          <span className="block">
            Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах хориотой.
          </span>
        </div>
      </div>
    </>
  );
}
