export default function Product({ items, longText }) {
  if (longText) {
    return (
      <div className="flex mx-2 my-4 col-span-2">
        <div className="h-20 p-4 bg-[#ffffff]/80 rounded-2xl mr-3">
          {" "}
          <img className="h-14 w-16" src={longText?.url} alt="bg" />
        </div>
        <div className=" font-medium">
          <p className="text-base font-bold ">{longText?.title}</p>
          <p className="text-xs">{longText?.desc}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex mx-2 my-4 col-span-2">
      <div className="h-20 p-4 bg-[#ffffff]/80 rounded-2xl">
        {" "}
        <img className="h-14 w-14" src={items?.url} alt="bg" />
      </div>
      <div className="ml-3 font-medium">
        <p className="text-lg font-bold ">{items?.title}</p>
        <p className="text-xs">{items?.desc}</p>
      </div>
    </div>
  );
}
