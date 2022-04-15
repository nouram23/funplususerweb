export default function Product({ items }) {
  return (
    <div className="flex  items-center sm:mx-2 my-4 xl:col-span-2 col-span-3">
      <div className="2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 sm:h-20 sm:w-20 2xl:p-4  xl:p-3 lg:p-4 p-3 bg-[#ffffff]/80 rounded-2xl">
        {" "}
        <img
          className="2xl:h-14 xl:h-10 sm:h-14   "
          src={items?.url}
          alt="bg "
        />
      </div>
      <div className="s:ml-3 ml-2 font-medium">
        <p className="sm:text-base font-bold text-xs  sm:leading-5 leading-4">
          {items?.desc}
        </p>
        <p className="sm:text-sm text-[10px] 2xl:my-1"> {items?.title}</p>
      </div>
    </div>
  );
}
