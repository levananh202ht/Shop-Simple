import { useEffect } from "react"
import { Banner } from "../../components/Banner"
import ApiService from "../../service/ApiService"
import { useDispatch } from "react-redux"
import { ListProduct, NewProduct, SaleProduct } from "../../redux/feature/productSlice"
import { TraindingProduct } from "../../components/TraindingProduct"
import { BannerCenter } from "../../components/Bannercenter"
import {  SellingProduct } from "../../components/SellingProduct"
import { FlashSaleProduct } from "../../components/FlashSaleProduct"
import { Features } from "../../components/Features"
import { BannerSale } from "../../components/BannerSale"


export const Home = () => {
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(SaleProduct(products.slice(0,8)));
        dispatch(ListProduct(products.slice(10,18)));
        dispatch(NewProduct(products.slice(20,28)));
    }
    useEffect(() => {
        loadData();
    },[])
    return (
        <div>
            <Banner />
            <FlashSaleProduct />
            <BannerSale />
            <TraindingProduct />
            <BannerCenter />
            <SellingProduct />
            <Features />
        </div>
    )
}
