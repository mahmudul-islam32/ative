import React from "react";
import { IoMdAdd } from "react-icons/io";
import img1 from "../../../../public/paper-plane-top 1.png";
import img2 from "../../../../public/clip 1.png";

const Health = () => {
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
          <div className="flex flex-row mx-10 mt-10 justify-between gap-5">
            <div className="card w-[211px] h-[211px] bg-[#1E1E1E] text-primary-content">
              <div className="card-body">
                {/* <h2 className="card-title">Card title!</h2> */}
                {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div> */}
              </div>
            </div>

            <div className="card w-[400px] h-[211px] bg-[#1E1E1E] text-primary-content">
              <div className="card-body">
                {/* <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div> */}
              </div>
            </div>

            <div className="card w-[400px] h-[211px] bg-[#1E1E1E] text-primary-content">
              <div className="card-body">
                {/* <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table ">
              <tbody className="flex flex-col">
                {/* row 1 */}

                <div>
                  <td>
                    <div className="flex items-center gap-3 text-white">
                      <div className="avatar">
                        <div className="mask mask-circle w-9 h-9">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <th className="flex justify-end items-end">
                    <button className="btn btn-ghost btn-xs text-white">
                      details
                    </button>
                  </th>
                </div>

                {/* row 2 */}

                <div>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-circle w-9 h-9">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">Brice Swyre</div>
                       
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>

                  <th className="flex justify-end items-end">
                    <button className="btn btn-ghost btn-xs text-white">
                      details
                    </button>
                  </th>
                </div>
              </tbody>
            
            </table>
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
  );
};

export default Health;
