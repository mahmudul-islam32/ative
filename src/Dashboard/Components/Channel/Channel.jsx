import React from "react";

import { IoMdAdd } from "react-icons/io";
import img1 from "../../../../public/paper-plane-top 1.png";
import img2 from "../../../../public/clip 1.png";
import img3 from "../../../../public/Rectangle 177.png";

const Channel = () => {
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
      <div className=" min-h-screen -z-10 flex flex-row justify-around bg-[#2C2C2C] rounded-xl">
        {/* <div className="hero-content text-left"> */}
        <div className="overflow-x-auto h-96 w-1/3 p-9">
          <table className="table ">
            <thead>
              <tr>
                <th className="text-[#858585]">Gespeichert</th>
              </tr>
            </thead>
            <tbody className="text-[#5BFFA7] flex flex-col">
              {/* <Link>#allhands</Link> */}
              <td>#allhands</td>
              <td>#creatorevent</td>
              <td>#01campaign</td>
              <td>#berlinsquad</td>
              <td>#ukcreator</td>
            </tbody>
          </table>
        </div>
        {/* <div className="divider text-white px-11 divider-horizontal"></div> */}
        <div
          className="divider divider-horizontal"
          style={{ width: "1px", backgroundColor: "rgba(133, 133, 133, 0.40)" }}
        ></div>
        <div className="w-2/3 flex flex-col justify-between ">
          <div>
            <h2 className=" text-white">#allhands</h2>
            <div className="flex items-center justify-center min-h-screen">

              <div className="card w-[643px] h-[620px] items-center bg-[#1E1E1E] shadow-xl">
                <div className="flex flex-row justify-between gap-80 relative top-4 text-[#FFF]">
                  <h2 className="ml-auto bg-[#2C2C2C] rounded-2xl px-3 py-2">#allhands</h2>
                  <h2 className="ml-auto bg-[#2C2C2C] rounded-2xl px-3 py-2">29.03.2024, 09:41</h2>
                </div>

                <figure className="px-10 pt-10">
                  <img src={img3} alt="Shoes" className=" rounded-3xl" />
                </figure>
                <div className="card-body items-left text-left text-[#FFF]">
                  <h2 className="card-title">Today´s launch day🤩</h2>

                  <p>
                    Endlich ist es soweit und wir können gemeinsam mit euch
                    unsere neue Produktreihe launchen! Wir sind super aufgeregt
                    und können es kaum erwarten die ersten Kundenstories zu
                    sehen. Apropos Story: Wie in euren Briefings besprochen
                    startet die Kampagne heute um 17 Uhr und...
                  </p>
                  <div className="card-actions">
              
                    <a className="text-[#5BFFA7] underline" href="">
                      Mehr anzeigen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
    // </div>
  );
};

export default Channel;
