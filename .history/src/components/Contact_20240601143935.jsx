import React from 'react'
import { Footer } from './Footer'
import imgContact from "../assets/image/contact.webp"

export const Contact = () => {
    return (
        <div>
            <img className='relative' src={imgContact} alt=""  />
            <p className='absolute'>CONTACT US!</p>
            <div className="container mx-auto mt-20 px-14">
                <div>
                    <h2 className='mb-16 text-3xl font-bold text-center'>Our teams are here to help</h2>
                    <div className='flex justify-evenly'>
                        <div>
                            <h4 className='text-xl font-semibold text-center'>Technical support</h4>
                            <img src="" alt="" />
                            <p>Already using our products and experiencing technical issues?</p>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-center'>Pricing, billing & licensing</h4>
                            <img src="" alt="" />
                            <p>Have a pricing question or need help managing your account?</p>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-center'>Product advice</h4>
                            <img src="" alt="" />
                            <p>Evaluating our products and need advice before you buy?</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
