import Link from "next/link";

export default function Item({ id, item }) {
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
  return (
    <Link href={`/service/booking?service=${id}`} passHref>
      <div className="xl:w-72 xl:h-80 lg:w-52 lg:h-60 md:w-48 md:h-56  w-36 h-40 rounded-2xl bg-[#212121] md:mx-3 md:my-3 xs:mx-4 xs:my-3 mx-1 my-2">
        <img
          className="rounded-t-2xl xl:h-64   lg:h-48 md:h-44  h-32"
          src={item?.icon}
          alt={`Funplus ${item.name} `}
        />
        <div className="  flex justify-between  xl:mt-4 md:mt-3 sm:mt-2 mt-1 xl:px-4 md:px-2 px-1">
          <h3 className=" xl:font-medium md:text-sm text-xs">{item?.name}</h3>

          <div className="font-black md:text-lg text-xs md:px-3  px-2 leading-5 ring-1 ring-[#9d32c2] rounded-lg hover:bg-white hover:text-[#9d32c2]">
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </div>
    </Link>
  );
}
