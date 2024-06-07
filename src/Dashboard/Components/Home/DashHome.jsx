import file from "../../../../public/Group 11.png";
import file2 from "../../../../public/Rectangle 93.png";
import file3 from "../../../../public/Frame 2.png";
import "./home.css";
import { IoMdAdd } from "react-icons/io";
const DashHome = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row mx-7 gap-6 justify-between">
          <div className="card text-white w-1/3 h-48 bg-[#2C2C2C] shadow-xl">
            <div className="card-body flex flex-row">
              <div className="w-[50%]">
                <h2 className="card-title text-[#5BFFA7]">Samstag</h2>
                <h2 className="card-title text-white text-3xl font-bold">2</h2>
                <h2 className="card-title22 notititle top-6 -left-3 notification text-[#5BFFA7]">
                  Creator Event <br />
                  18:30-23:00
                </h2>
              </div>
              <div className="w-[50%]">
                <h2 className="card-title text-[#858585]">Morgen</h2>
                <h2 className="card-title22 notititle top-2  notification22 text-[#5BFFA7]">
                  All hands <br />
                  10:00
                </h2>
                <h2 className="card-title22 notititle top-4 notification22 text-[#5BFFA7]">
                  Call Marie <br />
                  14:00
                </h2>
              </div>
            </div>
          </div>
          <div className="card w-1/3 h-48 bg-[#2C2C2C] shadow-xl">
            <div className="card-body gap-0">
              <h2 className="card-title text-white text-2xl">To Do</h2>
             
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Call mit Anna vereinbaren
                  </span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Briefing Florian
                  </span>
                </label>
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio border-white checked:bg-[#5BFFA7]"
                    checked
                  />
                  <span className="label-text text-white mx-2">
                    Outreach Insta
                  </span>
                </label>
              </div>
              <button className=" btn btn-sm btn-circle bg-transparent text-white text-3xl relative left-[290px] -top-[46px]">
                <IoMdAdd></IoMdAdd>
              </button>
            </div>
          </div>
          <div class="card w-1/3 h-48 bg-[#2C2C2C] shadow-xl">
           
          </div>
        </div>
        <div className="flex flex-row justify-evenly mx-7 gap-3 ">
          <div className="w-3/4">
            <div className="card w-full h-[14rem] mb-10 bg-[#2C2C2C] shadow-xl">
              <div className="card-body grid grid-cols-7 mx-10 justify-around">
                <div>
                  <img src={file} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file2} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file2} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
                <div>
                  <img src={file} className=" w-16" alt="" />
                  <h5 className="text-white text-sm font-bold">
                    <span className="text-sm">Ordner</span> <br />
                    <span className="text-xs">Objekt</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="card w-full h-[313px] bg-[#2C2C2C] shadow-xl ">
              <div className="card-body">
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary"></span>
                  <div className="grid w-[856px] h-[89px] bg-[#5BFFA726] rounded-xl place-items-center">
                    content
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="indicator">
                  <div className="grid w-[856px]   bg-base-300 place-items-center">
                    content
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="indicator">
                  <div className="grid w-[856px]  bg-base-300 place-items-center">
                    content
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-[578px]">
            <div className="card w-full h-full bg-[#2C2C2C] shadow-xl">
              <div className="card-body">
                <img src={file3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-7 mb-5">
          <input
            type="text"
            placeholder="Suche nach Personen, Dokumenten, ..."
            name=""
            id=""
            className=" w-full  bg-[#2C2C2C] h-[38px] text-[#A3A3A3] input input-bordered"
          />
        </div>
      </div>
    </>
  );
};

export default DashHome;
