import React from 'react';

import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Channel = () => {
    return (
        <div className='mx-7 -z-10'>
            <div className=" my-6">
                <button className=" rounded-xl bg-[#5BFFA7] w-[187px] h-[37px] px-7 mr-5">Channel</button>
                <button className=" rounded-xl bg-[#2C2C2C] w-[187px] h-[37px] px-7 mr-5 text-[#FFFFFFB2]">Einstellungen</button>
                <button className="btn btn-sm bg-[#2C2C2C] btn-circle text-[#FFFFFFB2] border-none"><IoMdAdd /></button>

                <button></button>
            </div>
            <div className=" min-h-screen flex flex-row justify-around bg-[#2C2C2C] rounded-xl">
                {/* <div className="hero-content text-left"> */}
                <div className="overflow-x-auto h-96 w-1/3 p-9">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th className='text-[#858585]'>Gespeichert</th>
                            </tr>
                        </thead>
                        <tbody className='text-[#5BFFA7] flex flex-col'>
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
                <div className="divider divider-horizontal" style={{ width: '1px', backgroundColor: 'rgba(133, 133, 133, 0.40)' }}></div>
                <div className='w-2/3 flex flex-col justify-between'>
                    <div>
                        <h2 className=' text-white'>#allhands</h2>
                    </div>
               
                    <div className="sticky bottom-4 bg-[#2C2C2C] p-2">
                        <input type="text" className='w-full p-2 border bg-[#1E1E1EF2]  rounded' placeholder='Verfasse Nachrichten' />
                    </div>
                </div>

            </div>
        </div>
        // </div>
    );
};

export default Channel;