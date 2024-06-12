import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct'
import ApiService from '../service/ApiService'
import { ListProduct } from '../redux/feature/productSlice'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const AllListProduct = () => {
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(ListProduct(products));
    }


    useEffect(() => {
        loadData();
    },[])
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    return (
        <div className="container flex mx-auto mt-20 px-14">
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="smartphones" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="laptops" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="fragrances" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="groceries" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="home-decoration" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="skincare" />
                </FormGroup>
            </div>
            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {listProduct.map((item) => (
                <BoxProduct key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
