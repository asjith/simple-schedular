import React from "react";
import Hour from "./Hour";

const CalendarStructure = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="structure">
      <div className="divider"></div>
      <div>
        {hours.map((hour) => {
          return <Hour key={hour} hour={hour} />;
        })}
      </div>
    </div>
  );
};

export default CalendarStructure;
