export default function Recommendation({ item }) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom right, ${item?.gr1}, ${item?.gr2})`,
        }}
        className="flex flex-col h-64 w-52  items-center justify-center rounded-xl "
      >
        <img className="h-28" src={item?.icon} alt="alt" />
        <h1 className="font-bold text-base my-2"> {item?.name}</h1>
        <p className="text-center text-sm px-3  ">{item?.desc}</p>
      </div>
    </>
  );
}
