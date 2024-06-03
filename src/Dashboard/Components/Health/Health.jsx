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

            <div className="card w-[608px] h-[211px] bg-[#1E1E1E] text-primary-content">
              <div className="card-body">
                <svg
                  width="508"
                  height="167"
                  viewBox="0 0 508 167"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5C0 2.23858 2.23858 0 5 0H10C12.7614 0 15 2.23858 15 5V167H0V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M29 5C29 2.23858 31.2386 0 34 0H39C41.7614 0 44 2.23858 44 5V167H29V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M58 5C58 2.23858 60.2386 0 63 0H68C70.7614 0 73 2.23858 73 5V167H58V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M87 5C87 2.23858 89.2386 0 92 0H97C99.7614 0 102 2.23858 102 5V167H87V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M116 5C116 2.23858 118.239 0 121 0H126C128.761 0 131 2.23858 131 5V167H116V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M145 5C145 2.23858 147.239 0 150 0H155C157.761 0 160 2.23858 160 5V167H145V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M0 59C0 56.2386 2.23858 54 5 54H10C12.7614 54 15 56.2386 15 59V167H0V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M29 5C29 2.23858 31.2386 0 34 0H39C41.7614 0 44 2.23858 44 5V167H29V5Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M58 33C58 30.2386 60.2386 28 63 28H68C70.7614 28 73 30.2386 73 33V167H58V33Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M87 59C87 56.2386 89.2386 54 92 54H97C99.7614 54 102 56.2386 102 59V167H87V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M116 22C116 19.2386 118.239 17 121 17H126C128.761 17 131 19.2386 131 22V167H116V22Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M145 5C145 2.23858 147.239 0 150 0H155C157.761 0 160 2.23858 160 5V167H145V5Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M174 5C174 2.23858 176.239 0 179 0H184C186.761 0 189 2.23858 189 5V167H174V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M203 5C203 2.23858 205.239 0 208 0H213C215.761 0 218 2.23858 218 5V167H203V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M232 5C232 2.23858 234.239 0 237 0H242C244.761 0 247 2.23858 247 5V167H232V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M261 5C261 2.23858 263.239 0 266 0H271C273.761 0 276 2.23858 276 5V167H261V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M290 5C290 2.23858 292.239 0 295 0H300C302.761 0 305 2.23858 305 5V167H290V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M319 5C319 2.23858 321.239 0 324 0H329C331.761 0 334 2.23858 334 5V167H319V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M174 59C174 56.2386 176.239 54 179 54H184C186.761 54 189 56.2386 189 59V167H174V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M203 5C203 2.23858 205.239 0 208 0H213C215.761 0 218 2.23858 218 5V167H203V5Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M232 33C232 30.2386 234.239 28 237 28H242C244.761 28 247 30.2386 247 33V167H232V33Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M261 59C261 56.2386 263.239 54 266 54H271C273.761 54 276 56.2386 276 59V167H261V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M290 22C290 19.2386 292.239 17 295 17H300C302.761 17 305 19.2386 305 22V167H290V22Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M319 5C319 2.23858 321.239 0 324 0H329C331.761 0 334 2.23858 334 5V167H319V5Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M348 5C348 2.23858 350.239 0 353 0H358C360.761 0 363 2.23858 363 5V167H348V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M377 5C377 2.23858 379.239 0 382 0H387C389.761 0 392 2.23858 392 5V167H377V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M406 5C406 2.23858 408.239 0 411 0H416C418.761 0 421 2.23858 421 5V167H406V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M435 5C435 2.23858 437.239 0 440 0H445C447.761 0 450 2.23858 450 5V167H435V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M464 5C464 2.23858 466.239 0 469 0H474C476.761 0 479 2.23858 479 5V167H464V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M493 5C493 2.23858 495.239 0 498 0H503C505.761 0 508 2.23858 508 5V167H493V5Z"
                    fill="#858585"
                  />
                  <path
                    d="M348 59C348 56.2386 350.239 54 353 54H358C360.761 54 363 56.2386 363 59V167H348V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M377 5C377 2.23858 379.239 0 382 0H387C389.761 0 392 2.23858 392 5V167H377V5Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M406 33C406 30.2386 408.239 28 411 28H416C418.761 28 421 30.2386 421 33V167H406V33Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M435 59C435 56.2386 437.239 54 440 54H445C447.761 54 450 56.2386 450 59V167H435V59Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M464 22C464 19.2386 466.239 17 469 17H474C476.761 17 479 19.2386 479 22V167H464V22Z"
                    fill="#5BFFA7"
                  />
                  <path
                    d="M493 5C493 2.23858 495.239 0 498 0H503C505.761 0 508 2.23858 508 5V167H493V5Z"
                    fill="#5BFFA7"
                  />
                </svg>
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
