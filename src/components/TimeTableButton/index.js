import { Button } from "antd";

export default function TableButton({ time }) {
  return (
    <Button
      onClick={() => time?.setButton(time?.id)}
      className="bg-gradient-to-r focus:from-[#9d32c2] focus:to-[#e97a34] focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base "
    >
      {time?.availableTime}
    </Button>
  );
}
