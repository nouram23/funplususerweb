import { Button, Skeleton } from "antd";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ServiceItem({ id, item, isComingSoon, longText }) {
  if (item?.loading) {
    return (
      <div className="service-item md:w-56 md:h-[275px] w-36  h-48 bg-[#212121] md:p-4 p-2  md:rounded-3xl rounded-2xl hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] md:mx-3 md:my-3 xs:mx-4 xs:my-4  mx-1 my-2">
        <Skeleton.Avatar
          className="md:w-48 md:h-52  w-32 h-36"
          shape="square"
          style={{ width: "100% !important" }}
          active
        />
        <div className="mt-2 px-2 w-full">
          <Skeleton.Input active style={{ width: "100% !important" }} />
        </div>
      </div>
    );
  }

  if (longText) {
    return (
      <Link href={`/service?service_type=${id}`}>
        <div className=" md:w-56 md:h-[275px] w-36  h-48 bg-[#212121] md:p-4 p-2  md:rounded-3xl rounded-2xl hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] md:mx-3 md:my-3 xs:mx-4 xs:my-4  mx-1 my-2">
          <div className="md:w-48 md:h-52  w-32 h-36  bg-[#4A4A4A] flex items-center justify-center relative md:rounded-3xl rounded-2xl hover:bg-[#ffb9ea]">
            <img
              className="md:h-36 h-20"
              src={longText?.icon}
              alt={`Funplus ${longText.name}`}
            />
            <div className="absolute top-2 md:right-4 right-2 text-xs md:text-sm md:py-1 md:px-4 px-2 bg-gradient-to-r from-[#9d32c2] to-[#e97a34] rounded-full  ">
              {longText?.count} <i className="fa fa-university" />
            </div>
          </div>
          <div className="  flex justify-between  mt-2 px-1">
            <h3 className="md:text-base text-xs font-medium">
              {longText?.name}
            </h3>

            <div className="font-black md:text-lg text-xs md:px-3  px-2 leading-5 ring-1 ring-[#9d32c2] rounded-lg hover:bg-white hover:text-[#9d32c2]">
              <i className="fa fa-arrow-right" />
            </div>
          </div>
        </div>
      </Link>
    );
  }
  if (isComingSoon) {
    return (
      <div className="md:w-56 md:h-[275px] w-36 h-40 bg-[#212121] md:p-4 p-2  rounded-3xl hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] md:mx-3 md:my-3 xs:mx-4 xs:my-4  mx-1 my-2">
        <div className=" md:w-48 md:h-52  w-32 h-36  bg-[#4A4A4A]  flex items-center justify-center relative rounded-3xl hover:bg-[#ffb9ea]">
          <img
            className="md:h-36 h-20"
            src="assets/images/product/medium-size/coming-soon.png"
            alt="Product Images"
          />
        </div>
      </div>
    );
  }

  return (
    <Link href={`/service?service_type=${id}`}>
      <div className=" md:w-56 md:h-[275px] w-36  h-48 bg-[#212121] md:p-4 p-2  md:rounded-3xl rounded-2xl hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] md:mx-3 md:my-3 xs:mx-4 xs:my-4 mx-1 my-2">
        <div className="md:w-48 md:h-52  w-32 h-36  bg-[#4A4A4A] flex items-center justify-center relative md:rounded-3xl rounded-2xl hover:bg-[#ffb9ea]">
          <img
            className="md:h-36 h-20"
            src={item?.icon}
            alt={`Funplus ${item.name}`}
          />
          <div className="absolute top-2 md:right-4 right-2 text-xs md:text-sm md:py-1 md:px-4 px-2 bg-gradient-to-r from-[#9d32c2] to-[#e97a34] rounded-full  ">
            {item?.count} <i className="fa fa-university" />
          </div>
        </div>
        <div className="  flex justify-between  mt-2 px-2">
          <h3 className="md:text-lg font-medium">{item?.name}</h3>

          <div className="font-black md:text-lg text-xs md:px-3  px-2 leading-5 ring-1 ring-[#9d32c2] rounded-lg hover:bg-white hover:text-[#9d32c2]">
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </div>
    </Link>
  );
}
