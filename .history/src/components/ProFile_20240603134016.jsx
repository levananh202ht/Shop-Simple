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
                    <img src={anh} alt="" className='border rounded-full w-80 h-80' />
                    <div>
                        <h2 className='text-xl font-semibold '>My Contact</h2>
                        <div className='flex items-center'>
                            <MdOutlineEmail className='flex items-center justify-center' />
                            <p>levananh202@gmail.com</p>
                        </div>
                        <div>
                            <IoCallOutline />
                            <p>0375863218</p>
                        </div>
                        <div>
                            <FaRegAddressCard />
                            <p>Đà Nẵng</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>LÊ VĂN ANH</h1>
                    <h3>Fronend Developer</h3>
                </div>
            </div>
        </div>
    )
}
