import React from "react";
import TableButton from "components/TimeTableButton";

export default function VipTimeTable({ index }) {
  let tableNum = parseInt(index?.table) + 1;
  const vipTables = [
    {
      time1: "10:30-12:30",
      time2: "12:30-14:30",
      time3: "14:30-16:30",
      time4: "16:30-18:30",
      time5: "18:30-20:30",
    },
    {
      time1: "10:30-12:30",
      time2: "12:30-14:30",
      time3: "14:30-16:30",
      time4: "16:30-18:30",
      time5: "18:30-20:30",
    },
    {
      time1: "10:30-12:30",
      time2: "12:30-14:30",
      time3: "14:30-16:30",
      time4: "16:30-18:30",
      time5: "18:30-20:30",
    },
  ];

  return (
    <div>
      <div className="text-blue-500 flex justify-center font-bold text-2xl my-6">
        VIP Ширээ {`${tableNum}`}
      </div>
      <div className="flex flex-wrap  mx-auto  md:max-w-4xl ss:max-w-2xl max-w-sm">
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
