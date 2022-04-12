import { Button } from "antd";

export default function TableButton({ time }) {
  return (
    <Button className="focus:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] focus:text-white border-none hover:bg-gradient-to-r from-[#9d32c2] to-[#e97a34] hover:text-white rounded-full text-black font-semibold bg-slate-50 h-10 w-32 mx-2 my-2  ">
      {time?.availableTime}{" "}
    </Button>
  );
}
