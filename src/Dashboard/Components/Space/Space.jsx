import React from "react";
import { IoMdAdd } from "react-icons/io";
import img1 from "../../../../public/paper-plane-top 1.png";
import img2 from "../../../../public/clip 1.png";

const Space = () => {
  return (
    <div className="mx-7 -z-10">
      <div className=" my-6">
        <button className=" rounded-xl bg-[#5BFFA7] w-[187px] h-[37px] px-7 mr-5">
          Channel
        </button>
        <button className=" rounded-xl bg-[#2C2C2C] w-[187px] h-[37px] px-7 mr-5 text-[#FFFFFFB2]">
          Einstellungen
        </button>
        <button className="btn btn-sm bg-[#2C2C2C] btn-circle text-[#FFFFFFB2] border-none">
          <IoMdAdd />
        </button>

        <button></button>
      </div>
      <div className=" min-h-screen flex flex-row justify-around bg-[#2C2C2C] rounded-xl">
        <div className="w-full flex flex-col justify-between ">
          <div></div>

          <div className="sticky bottom-4 bg-[#2C2C2C] p-2">
            <input
              type="text"
              className="w-full px-9 py-2 border bg-[#1E1E1EF2]  rounded"
              placeholder="Verfasse Nachrichten"
            />
            <div className="flex flex-row relative justify-between -top-9 px-2">
              <img className="" src={img2} alt="" />
              <img className="" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
