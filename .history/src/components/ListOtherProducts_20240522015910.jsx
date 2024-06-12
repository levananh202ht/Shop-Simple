import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { ListProduct } from '../redux/feature/productSlice'
import ApiService from '../service/ApiService'
import { BoxProduct } from './BoxProduct'

export const ListOtherProducts = ({listProduct}) => {
    
    
    // useEffect(() => {
    //     loadData();
    // },[])
    
    console.log(listProduct,"1234890");
    return (
        <div className="container mx-auto mt-8 px-14">
        <h2 className="text-4xl font-semibold text-green-700"> Trending Products</h2>
                        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {listProduct.map((item) => (
                            <BoxProduct key={item.id} item={item} />
                            ))}
                        </div>
        </div>
    )
}
