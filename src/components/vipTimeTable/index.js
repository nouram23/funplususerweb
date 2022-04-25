import React from "react";
import TableButton from "components/TimeTableButton";
import { Button } from "antd";

export default function VipTimeTable({ index }) {
  let tableNum = parseInt(index?.table) + 1;

  return (
    <div>
      <div className="text-blue-500 flex justify-center font-bold text-2xl my-6">
        VIP Ширээ {`${tableNum}`}
      </div>
      <div className="flex flex-wrap  mx-auto  md:max-w-4xl ss:max-w-2xl max-w-sm">
        <Button
          onClick={() =>
            index?.setBtnIndexes({
              ...index?.btnIndexes,
              btn1: !index?.btnIndexes.btn1,
            })
          }
          className={`  focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base `}
        >
          {index?.vipTables[index?.table].time1}
        </Button>
        <Button
          onClick={() =>
            index?.setBtnIndexes({
              ...index?.btnIndexes,
              btn2: !index?.btnIndexes.btn2,
            })
          }
          className={`  focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base `}
        >
          {index?.vipTables[index?.table].time2}
        </Button>
        <Button
          onClick={() =>
            index?.setBtnIndexes({
              ...index?.btnIndexes,
              btn3: !index?.btnIndexes.btn3,
            })
          }
          className={`  focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base `}
        >
          {index?.vipTables[index?.table].time3}
        </Button>
        <Button
          onClick={() =>
            index?.setBtnIndexes({
              ...index?.btnIndexes,
              btn4: !index?.btnIndexes.btn4,
            })
          }
          className={`  focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base `}
        >
          {index?.vipTables[index?.table].time4}
        </Button>
        <Button
          onClick={() =>
            index?.setBtnIndexes({
              ...index?.btnIndexes,
              btn5: !index?.btnIndexes.btn5,
            })
          }
          className={` focus:text-white border-none hover:text-white rounded-full text-black font-semibold bg-slate-50 ss:h-10 ss:w-32 h-7 w-24 mx-2 my-2 text-xs ss:text-base `}
        >
          {index?.vipTables[index?.table].time5}
        </Button>
        {/* <TableButton
          time={{
            availableTime: vipTables[index?.table].time5,
          }}
        /> */}
      </div>
    </div>
  );
}
