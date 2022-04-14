import Link from "next/link";

export default function Item({ item }) {
  return (
    <Link href="/service/booking">
      <div className="xl:w-72 xl:h-80 lg:w-52 lg:h-60 md:w-48 md:h-56 sm:w-40 sm:h-44 w-36 h-40 rounded-2xl bg-[#212121] md:mx-3 md:my-3 mx-1 my-2">
        <img
          className="rounded-t-2xl xl:h-64   lg:h-48 md:h-44 sm:h-36 h-32"
          src={item?.icon}
          alt={`Funplus ${item.name} `}
        />
        <div className="  flex justify-between  xl:mt-4 md:mt-3 mt-2 xl:px-4 md:px-2 px-1">
          <h3 className=" xl:font-medium md:text-sm text-xs">{item?.name}</h3>

          <div className="font-black md:text-lg text-xs md:px-3  px-2 leading-5 ring-1 ring-[#9d32c2] rounded-lg hover:bg-white hover:text-[#9d32c2]">
            <i className="fa fa-arrow-right" />
          </div>
        </div>
      </div>
    </Link>
  );
}
