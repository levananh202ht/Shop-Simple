import { useEffect } from "react"
import { Banner } from "../../components/Banner"
import ApiService from "../../service/ApiService"
import { useDispatch } from "react-redux"
import { ListProduct, NewProduct } from "../../redux/feature/productSlice"
import { TraindingProduct } from "../../components/TraindingProduct"
import { BannerCenter } from "../../components/Bannercenter"


export const Home = () => {
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(ListProduct(products.slice(0,8)));
        dispatch(NewProduct(products.slice(10,18)));
        console.log(products,"products");
    }
    useEffect(() => {
        loadData();
    },[])
    return (
        <div>
            <Banner />
            <TraindingProduct />
            <BannerCenter />
        </div>
    )
}
