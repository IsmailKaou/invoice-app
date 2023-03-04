import React from 'react'
import { FaPrint } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const Buttons = ({ printfun, onClick }) => {

    return (
        <>
            <div className="fixed bottom-2 right-2 sm:absolute sm:right-[300px]  sm:bottom-[280px]">
                <ul className="flex flex-row gap-2 sm:flex-col items-center justify-center space-y-3">
                    <li>
                        <button className=" bg-purple-600 text-white p-4 rounded-full shadow border-2 border-purple-600 hover:bg-transparent hover:text-purple-600 font-bold  transition-all duration-500" onClick={onClick}>
                            <FaEdit />
                        </button>

                    </li>
                    <li>
                        <button className="bg-slate-900 text-white rounded-full p-4 shadow border-2 border-slate-900 hover:bg-transparent hover:text-gray-900 font-bold transition-all duration-500 " onClick={printfun}>
                            <FaPrint />
                        </button>
                    </li>
                    <li>
                        <button className="bg-slate-900 text-white rounded-full p-4 shadow border-2 border-slate-900 hover:bg-transparent hover:text-gray-900 font-bold transition-all duration-500 ">
                            <FaDownload />
                        </button>
                    </li>
                    <li>
                        <button className="bg-slate-900 text-white rounded-full p-4 shadow border-2 border-slate-900 hover:bg-transparent hover:text-gray-900 font-bold transition-all duration-500 ">
                            <FaTelegramPlane />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Buttons