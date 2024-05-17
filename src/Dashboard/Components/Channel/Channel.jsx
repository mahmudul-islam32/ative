import React from 'react';

import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Channel = () => {
    return (
        <div className='mx-7'>
            <div className=" my-6">
                <button className=" rounded-xl bg-[#5BFFA7] w-[187px] h-[37px] px-7 mr-5">Channel</button>
                <button className=" rounded-xl bg-[#2C2C2C] w-[187px] h-[37px] px-7 mr-5 text-[#FFFFFFB2]">Einstellungen</button>
                <button className="btn btn-sm bg-[#2C2C2C] btn-circle text-[#FFFFFFB2] border-none"><IoMdAdd /></button>

                <button></button>
            </div>
            <div className=" min-h-screen flex flex-row justify-around bg-[#2C2C2C] rounded-xl">
                {/* <div className="hero-content text-left"> */}
                <div className="overflow-x-auto h-96 w-1/3 p-9">
                    <table className="table table-pin-rows">
                        <thead>
                            <tr>
                                <th className='text-[#5BFFA7]'>Gespeichert</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <Link>#allhands</Link> */}
                            <tr><td>Ant-Man</td></tr>
                            <tr><td>Aquaman</td></tr>
                            <tr><td>Asterix</td></tr>
                            <tr><td>The Atom</td></tr>
                            <tr><td>The Avengers</td></tr>
                        </tbody>

                    </table>
                </div>
                <div className="divider text-white px-11 divider-horizontal"></div>
                <div className='w-2/3 flex flex-col justify-between'>
                    <div>
                        <h2>#allhands</h2>
                    </div>
                    <div>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded' placeholder='Type a message' />
                    </div>
                </div>

            </div>
        </div>
        // </div>
    );
};

export default Channel;