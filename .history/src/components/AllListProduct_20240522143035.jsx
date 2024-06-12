import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../service/ApiService'
import {  ListProduct } from '../redux/feature/productSlice'

import { Pagination } from '@mui/material'
import FilterCategory from './FilterCategory'

export const AllListProduct = () => {
    const dispatch = useDispatch()
    const [filterProduct,setFilterProduct] = useState({
        keySearch:"",
        select:"",
        skip:0,
        limit:10,
        total:0
    })
    const loadData = async () => {
        const params = {
            q: filterProduct.keySearch,
            select: filterProduct.select,
            skip: filterProduct.skip,
            limit: filterProduct.limit
        }
        const res = await ApiService.ApiListProduct(params)
        if(res.status === 200){
            const {products,limit,skip,total} = res.data;
            console.log(res,"123");
            dispatch(ListProduct(products));
            setFilterProduct({
                ...filterProduct,
                total,
                skip,
                limit:10,
            })
        }
        
    }
    console.log(filterProduct,"ttttt");

    useEffect(() => {
        loadData();
    },[filterProduct.skip])
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    console.log(listProduct.category,"8888");
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className=''>
                <div className='mt-4 mr-4'>
                    <div className=''>
                        <h2 className='mb-2 text-2xl font-bold'>Category</h2>
                        <FilterCategory  listProduct={listProduct} />
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center p-8' >
                <Pagination count={filterProduct.total / filterProduct.limit} color="primary"
                    onChange={(e,page) => {
                        setFilterProduct({
                            ...filterProduct,
                            skip: (page - 1) * filterProduct.limit,
                        })
                    }}
                />
            </div>
        </div>
    )
}
