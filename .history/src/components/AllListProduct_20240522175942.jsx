import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../service/ApiService'
import {  ListProduct } from '../redux/feature/productSlice'

import FilterCategory from './FilterCategory'

export const AllListProduct = () => {
    const dispatch = useDispatch()

    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        if(res.status === 200){
            const {products} = res.data;
            dispatch(ListProduct(products));
        }
        
    }

    useEffect(() => {
        loadData();
    },[])
    
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className=''>
                <div className='mt-4 mr-4'>
                    <div className=''>
                        <FilterCategory  />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
