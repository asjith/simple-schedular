import React from "react";
import CalendarStructure from "./CalendarStructure";
import UserSchedule from "./UserSchedule";

const Schedular = ({ users }) => {
  return (
    <div className="main-container">
      <CalendarStructure />
      <div className="user-schedule">
        {users.map((user) => {
          return <UserSchedule key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Schedular;
