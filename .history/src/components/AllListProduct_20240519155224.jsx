import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct'

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
        <div className="container mx-auto mt-8 px-14">
            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {listProduct.map((item) => (
                <BoxProduct key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
