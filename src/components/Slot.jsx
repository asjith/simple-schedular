import React from "react";

const Slot = ({ slot }) => {
  const { start, end } = slot;

  const startHour = +start.split(":")[0];
  const startMinute = +start.split(":")[1];
  const endHour = +end.split(":")[0];
  const endMinute = +end.split(":")[1];
  const duration = endHour - startHour + (endMinute - startMinute) / 60;

  return (
    <div
      className="slot"
      style={{
        height: `calc(${duration} * 4rem)`,
        top: `calc((${startMinute / 60 + startHour} * 4rem) + 3rem)`
      }}
    >
      {start} - {end}
    </div>
  );
};

export default Slot;
