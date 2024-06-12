import React from 'react'
import { Footer } from './Footer'

export const Contact = () => {
    return (
        <div className="container mx-auto mt-20 px-14">
            <div>
                <h2 className='text-3xl font-bold text-center'>Our teams are here to help</h2>
                <div className='flex justify-evenly'>
                    <div>
                        <h4 className='text-xl font-semibold'>Technical support</h4>
                        <img src="" alt="" />
                        <p>Already using our products and experiencing technical issues?</p>
                    </div>
                    <div>
                        <h4>Pricing, billing & licensing</h4>
                        <img src="" alt="" />
                        <p>Have a pricing question or need help managing your account?</p>
                    </div>
                    <div>
                        <h4>Product advice</h4>
                        <img src="" alt="" />
                        <p>Evaluating our products and need advice before you buy?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
