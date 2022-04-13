import React from "react";
import TableButton from "components/TimeTableButton";

export default function VipTimeTable({ index }) {
  let tableNum = parseInt(index?.table) + 1;
  const vipTables = [
    {
      time1: "10:30-12:30",
      time2: "10:30-12:30",
      time3: "10:30-12:30",
      time4: "10:30-12:30",
      time5: "10:30-14:30",
    },
    {
      time1: "4:30-12:30",
      time2: "30:30-12:30",
      time3: "50:30-12:30",
      time4: "70:30-12:30",
      time5: "13:30-18:30",
    },
    {
      time1: "24:30-22:30",
      time2: "50:30-82:30",
      time3: "60:20-62:90",
      time4: "20:30-12:30",
      time5: "16:30-18:30",
    },
  ];

  return (
    <div>
      <div className="text-blue-500 flex justify-center font-bold text-2xl my-6">
        VIP Ширээ {`${tableNum}`}
      </div>
      <div className="flex flex-wrap w-full">
        <TableButton
          time={{
            availableTime: vipTables[index?.table].time1,
          }}
        />
        <TableButton
          time={{
            availableTime: vipTables[index?.table].time2,
          }}
        />
        <TableButton
          time={{
            availableTime: vipTables[index?.table].time3,
          }}
        />
        <TableButton
          time={{
            availableTime: vipTables[index?.table].time4,
          }}
        />
        <TableButton
          time={{
            availableTime: vipTables[index?.table].time5,
          }}
        />
      </div>
    </div>
  );
}
