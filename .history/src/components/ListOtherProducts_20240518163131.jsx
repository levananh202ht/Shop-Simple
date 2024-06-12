import React, { useEffect } from 'react'
import { OtherProducts } from './OtherProducts'
import { useDispatch, useSelector } from 'react-redux'
import { ListProduct } from '../redux/feature/productSlice'
import ApiService from '../service/ApiService'

export const ListOtherProducts = ({}) => {
    
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        console.log(products,"123");
        dispatch(ListProduct(products.slice(10,18)));
    }
    useEffect(() => {
        loadData();
    },[])
    const listProduct = useSelector((state) => state.productSlice.product)
    console.log(listProduct,"1234890");
    return (
        <div className="container mx-auto mt-8 px-14">
        <h2 className="text-4xl font-semibold text-green-700"> Trending Products</h2>
                        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {listProduct.map((item) => (
                            <OtherProducts key={item.id} item={item} />
                            ))}
                        </div>
        </div>
    )
}
