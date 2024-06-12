import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import anh from "../assets/image/anh.jpg"

export const ProFile = () => {
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className='flex justify-center justify-evenly '>
                <div className='text-center'>
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
                    <div className='text-center h-60 w-60'>
                        <h1 className='text-3xl font-bold'>LE VAN ANH</h1>
                        <h3 className=''>Fronend Developer</h3>
                    </div>
                    <div>
                        <div>
                            <h1 className='mb-4 text-xl font-semibold border-b-2 border-gray-900 w-28'>EDUCATION</h1>
                            <div className='flex'>
                                <div className='mr-20'>
                                    <p>09/2021 - Present</p>
                                </div>
                                <div>
                                    <h3>Duy Tan University</h3>
                                    <p>Softwave technology</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='mb-4 text-xl font-semibold border-b-2 border-gray-900 w-28'>SKILLS</h1>
                            <div>
                                <div className='flex'>
                                    <div className='w-24 mr-20'>
                                        <p>Languages </p>
                                    </div>
                                    <div>
                                        <h3>HTML5, CSS3, Javascript </h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-24 mr-20 '>
                                        <p>Libary  </p>
                                    </div>
                                    <div>
                                        <h3>Redux, Tailwindcss, SASS/SCSS, ReactJS,  </h3>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-24 mr-20 '>
                                        <p>Others Skills  </p>
                                    </div>
                                    <div>
                                        <h3 className='w-10/12'>Visual Studio Code, Github, Postman, Read and understand documents in English, ability to work independently and research ability. </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
