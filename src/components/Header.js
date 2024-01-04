import React from "react";
import bindu from "../assets/bindu.jpg";

export const Header = () => {
  return (
    <div className="flex pr-[7.5rem] pl-[7.5rem] pt-8 pb-8 border-b shadow-lg">
      <div className="flex items-center">
        <p className="border border-[#F08080] bg-[#F08080] items-center text-white text-[20px] w-fit pr-[17px] pl-[17px] pt-[8px] pb-[8px] rounded-full">
          B
        </p>
        <p className="pl-2 text-[20px]">Bindu</p>
      </div>
      <img
        className="items-end ml-auto border-[3px] border-[#F08080] rounded-full"
        src={bindu}
        alt="bindu"
        width={50}
        height={30}
      />
    </div>
  );
};
