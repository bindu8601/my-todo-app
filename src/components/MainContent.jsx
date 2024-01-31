import React from "react";
import { Calender } from "./Calender";
import { AllTasks } from "./AllTasks";

export const MainContent = () => {
  return (
    <div className="flex">
      <Calender />
      <AllTasks />
    </div>
  );
};
