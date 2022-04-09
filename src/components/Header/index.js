/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-[#242424] w-full h-24 flex justify-evenly items-center smm:text-lg text-sm fixed left-0 top-0 z-20 ">
      <ul className="text-white lg:flex space-x-5 hidden">
        <li>
          <a className="hover:text-[#9d32c2]" href="#">
            Таньд санал болгох
          </a>
        </li>
        <li>
          <a className="hover:text-[#9d32c2]" href="#">
            Хамтран ажилах
          </a>
        </li>
      </ul>

      <div className="focus:outline-none">
        <a href="#" className="">
          <img
            className="sm:h-14 h-8"
            src="assets/images/logo/logo.svg"
            alt="Header Logo"
          />
        </a>
      </div>
      <div className="flex ">
        <ul className="text-white flex flex-col items-center sm:flex-row sm:items-baseline sm:space-x-4 space-y-1">
          <li className="hover:text-[#9d32c2]">
            <Link href="/auth/login">Нэвтрэх</Link>
          </li>
          <li className="">
            <a href="#">
              <button className="py-1 sm:px-4 px-2 rounded-full bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:from-[#e97a34] hover:to-[#9d32c2] hover:text-white ">
                Холбоо барих
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <input type="checkbox" className="checkbox" id="chk" />
        <label className="label" htmlFor="chk">
          <i className="fa fa-moon-o" />
          <i className="fa fa-sun-o" />
          <div className="ball" />
        </label>
      </div>
    </div>
  );
}
