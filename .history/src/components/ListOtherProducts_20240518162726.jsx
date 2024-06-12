import React from 'react'
import { OtherProducts } from './OtherProducts'
import { useDispatch, useSelector } from 'react-redux'
import { ListProduct } from '../redux/feature/productSlice'

export const ListOtherProducts = ({}) => {
    const listProduct = useSelector((state) => state.productSlice.newProduct)
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(ListProduct(products.slice(10,18)));
    }
    useEffect(() => {
        loadData();
    },[])
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
