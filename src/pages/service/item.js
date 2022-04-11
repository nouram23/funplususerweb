export default function Item({ item }) {
  return (
    <div className="w-72 h-80 rounded-2xl bg-[#212121] mx-3 my-3">
      <img
        className="rounded-t-2xl h-64"
        src={item?.icon}
        alt={`Funplus ${item.name} `}
      />
      <div className="  flex justify-between  mt-4 px-4">
        <a href="product.html">
          <h3 className="md:text-lg font-medium">{item?.name}</h3>
        </a>
        <a
          className="font-black md:text-lg text-xs md:px-3  px-2 leading-5 ring-1 ring-[#9d32c2] rounded-lg hover:bg-white hover:text-[#9d32c2]"
          href="product.html"
        >
          <i className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
  );
}
