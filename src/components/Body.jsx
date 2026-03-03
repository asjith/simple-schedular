import React from "react";
import Schedular from "./Schedular";
import { USERS } from "../utils/constants";

const Body = () => {
  return (
    <div>
      <Schedular users={USERS} />
    </div>
  );
};

export default Body;
