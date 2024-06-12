import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import anh from "../assets/image/anh.jpg"

export const ProFile = () => {
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className='flex justify-center text-center'>
                <div>
                    <img src={anh} alt="" className='mb-10 border rounded-full w-60 h-60' />
                    <div>
                        <h2 className='mb-3 text-xl font-semibold '>My Contact</h2>
                        <div className='flex items-center p-2'>
                            <MdOutlineEmail className='mr-10 text-xl font-extrabold' />
                            <p>levananh202@gmail.com</p>
                        </div>
                        <div className='flex items-center p-2'>
                            <IoCallOutline className='mr-10 text-xl font-extrabold' />
                            <p>0375863218</p>
                        </div>
                        <div className='flex items-center p-2'>
                            <FaRegAddressCard className='mr-10 text-xl font-extrabold' />
                            <p>Đà Nẵng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl font-extrabold'>LE VAN ANH</h1>
                        <h3>Fronend Developer</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
