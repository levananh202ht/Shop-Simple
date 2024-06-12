import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct'
import ApiService from '../service/ApiService'
import { ListProduct } from '../redux/feature/productSlice'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Pagination } from '@mui/material'

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


    useEffect(() => {
        loadData();
    },[])
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    return (
        <div className="container mx-auto mt-20 px-14">
            <div className='flex'>
                <div className=''>
                    <h2>Category</h2>
                    <div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox  />} label="smartphones" />
                            <FormControlLabel control={<Checkbox  />} label="laptops" />
                            <FormControlLabel control={<Checkbox  />} label="fragrances" />
                            <FormControlLabel control={<Checkbox  />} label="groceries" />
                            <FormControlLabel control={<Checkbox  />} label="home-decoration" />
                            <FormControlLabel control={<Checkbox  />} label="skincare" />
                        </FormGroup>
                    </div>
                </div>
                <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {listProduct.map((item) => (
                    <BoxProduct key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Pagination count={filterProduct.total / filterProduct.limit} color="primary" />
        </div>
    )
}
