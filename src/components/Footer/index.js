/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Footer() {
  const [data, setData] = React.useState({});

  React.useEffect(async () => {
    const response = await fetch("/api/footerInfo");
    const info = await response.json();
    setData(info);
  }, []);

  return (
    <>
      <div className="text-white bg-[#242424]">
        <div className="flex justify-evenly  md:text-left  text-center md:items-start items-center md:flex-row flex-col  lg:max-w-7xl w-11/12 mx-auto lg:py-24 sm:py-14 py-4 ">
          <div className=" ">
            <Link href="/">
              <a>
                <img
                  className="lg:h-20 h-16"
                  src="/assets/images/logo/logo.svg"
                  alt="Logo"
                />
              </a>
            </Link>

            <ul className="flex text-xs lg:space-x-4 space-x-2 mt-4 ">
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                <Link href="https://www.facebook.com/Funplus.mn/?ref=py_c">
                  <a
                    className="  hover:text-white "
                    target="_blank"
                    data-tippy="Facebook"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </Link>
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
              <li className=" rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34] ">
                <a
                  className="  hover:text-white "
                  href="#"
                  data-tippy="Discord"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay={50}
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="fa-brands fa-discord"></i>
                </a>
              </li>
              <li className="rounded-full h-8 w-8 leading-8 text-center border-none bg-gradient-to-r from-[#9d32c2] to-[#e97a34]">
                <Link href="https://www.instagram.com/fun.plusofficial/">
                  <a
                    className="  hover:text-white "
                    target="_blank"
                    data-tippy="Instragram"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay={50}
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="cursor-default mt-3 md:mt-0 opacity-90">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3 ">
              Холбоо барих
            </h3>
            <ul className="leading-7 lg:text-base text-sm space-y-2">
              <li>Хаяг: {data.location}</li>
              <li>Утас: {data.phone}</li>
              <li>И-мэйл: {data.email}</li>
            </ul>
          </div>

          <div className="opacity-90">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3">Fun Plus</h3>
            <ul className="leading-7 lg:text-base text-sm">
              <li>
                <Link href="/job-application">
                  <a className="hover:text-[#9d32c2]">Нээлттэй ажлын байр</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="opacity-90">
            <h3 className="font-medium sm:text-lg lg:mb-6 mb-3">Тусламж</h3>
            <ul className="leading-7 lg:text-base text-sm space-y-2">
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
                <Link href="/serviceCondition" className="hover:text-[#9d32c2]">
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="opacity-90 flex lg:flex-row flex-col  lg:justify-between lg:max-w-7xl w-4/5 mx-auto py-4 border-t-2 border-black md:text-base text-xs text-center">
          © Copyright 2021 Fun Plus LLC
          <span className="block">
            Зохиогчийн эрх хуулиар хамгаалагдсан. Мэдээлэл хуулбарлах хориотой.
          </span>
        </div>
      </div>
    </>
  );
}
