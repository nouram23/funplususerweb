/* eslint-disable @next/next/no-img-element */
export default function Recommendation({ item }) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom right, ${item?.gr1}, ${item?.gr2})`,
        }}
        className="flex flex-col  sm:h-64 h-48 w-1/2 sm:w-52 sm:mx-6 mt-3 items-center justify-center rounded-xl "
      >
        <img className="sm:h-28 h-20" src={item?.icon} alt="alt" />
        <h1 className="font-bold text-base sm:my-2 my-1"> {item?.name}</h1>
        <p className="text-center sm:text-sm text-xs px-3  ">{item?.desc}</p>
      </div>
    </>
  );
}
