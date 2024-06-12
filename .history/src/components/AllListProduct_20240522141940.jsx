import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct'
import ApiService from '../service/ApiService'
import {  ListProduct } from '../redux/feature/productSlice'

import FilterCategory from './FilterCategory'

export const AllListProduct = () => {
    const dispatch = useDispatch()

    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        if(res.status === 200){
            const {products} = res.data;
            console.log(res,"123");
            dispatch(ListProduct(products));
        }
        
    }

    useEffect(() => {
        loadData();
    },[])
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    console.log(listProduct,"8888");
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className=''>
                <div className='mt-4 mr-4'>
                    <div className='p-5 border border-gray-200 w-60'>
                        <h2 className='mb-2 text-2xl font-bold'>Category</h2>
                        <FilterCategory  listProduct={listProduct} />
                    </div>
                    
                </div>
                {/* <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {listProduct.map((item) => (
                    <BoxProduct key={item.id} item={item} />
                    ))}
                </div> */}
            </div>
            {/* <div className='flex justify-center p-8' >
                <Pagination count={filterProduct.total / filterProduct.limit} color="primary"
                    onChange={(e,page) => {
                        setFilterProduct({
                            ...filterProduct,
                            skip: (page - 1) * filterProduct.limit,
                        })
                    }}
                />
            </div> */}
        </div>
    )
}
