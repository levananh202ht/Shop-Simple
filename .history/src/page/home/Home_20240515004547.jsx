import { useEffect } from "react"
import { Banner } from "../../components/Banner"
import ApiService from "../../service/ApiService"


export const Home = () => {
    const loadData = async () => {
        const res = await ApiService.ApiListProduct()
        const {products} = res.data;
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
