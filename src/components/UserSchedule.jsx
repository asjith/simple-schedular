import React from "react";
import Slot from "./Slot";

const UserSchedule = ({ user }) => {
  return (
    <div className="user">
      <div className="seperater"></div>
      <h4>{user.name}</h4>
      <div>
        {user.availability.map((slot) => {
          return <Slot key={slot.start + "-" + slot.end} slot={slot} />;
        })}
      </div>
    </div>
  );
};

export default UserSchedule;
