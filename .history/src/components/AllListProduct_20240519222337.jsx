import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct'
import ApiService from '../service/ApiService'
import { ListProduct } from '../redux/feature/productSlice'

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const AllListProduct = () => {
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(ListProduct(products));
    }


    const [checked, setChecked] = React.useState([true, false]);

    // const handleChange1 = (event) => {
    //     setChecked([event.target.checked, event.target.checked]);
    // };

    const handleChangeSmartPhones = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChangeFragrances = (event) => {
        setChecked([checked[2], event.target.checked]);
    };
    const handleChangeGroceries = (event) => {
        setChecked([checked[3], event.target.checked]);
    };
    const handleChangeDecoration = (event) => {
        setChecked([checked[4], event.target.checked]);
    };
    const handleChangeSkincare = (event) => {
        setChecked([checked[5], event.target.checked]);
    };
    const handleChangeLaptops = (event) => {
        setChecked([checked[6], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
            label="smartphones"
            control={<Checkbox checked={checked[1]} onChange={handleChangeSmartPhones} />}
        />
        <FormControlLabel
            label="fragrances"
            control={<Checkbox checked={checked[2]} onChange={handleChangeFragrances} />}
        />
        <FormControlLabel
            label="groceries"
            control={<Checkbox checked={checked[3]} onChange={handleChangeGroceries} />}
        />
        <FormControlLabel
            label="home-decoration"
            control={<Checkbox checked={checked[4]} onChange={handleChangeDecoration} />}
        />
        <FormControlLabel
            label="skincare"
            control={<Checkbox checked={checked[5]} onChange={handleChangeSkincare} />}
        />
        <FormControlLabel
            label="laptops"
            control={<Checkbox checked={checked[6]} onChange={handleChangeLaptops} />}
        />
        </Box>
    );

    useEffect(() => {
        loadData();
    },[])
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    return (
        <div className="container flex mx-auto mt-20 px-14">
            <div>
                {/* <FormControlLabel
                    label="Parent"
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                    />
                    }
                /> */}
                {children}
            </div>
            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {listProduct.map((item) => (
                <BoxProduct key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
