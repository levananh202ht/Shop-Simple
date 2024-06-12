import { useEffect } from "react"
import { Banner } from "../../components/Banner"
import ApiService from "../../service/ApiService"
import { useDispatch } from "react-redux"
import { ListProduct } from "../../redux/feature/productSlice"


export const Home = () => {
    const dispatch = useDispatch()
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
        dispatch(ListProduct(products));
        console.log(products);
    }
    useEffect(() => {
        loadData();
    },[])
    return (
        <div>
            <Banner />
        </div>
    )
}
