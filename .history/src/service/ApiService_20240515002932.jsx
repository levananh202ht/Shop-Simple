import axios from "axios";

const url = "https://dummyjson.com/products";

const ApiService = {
    ApiListProduct: async () => {
        return await axios(url)
    }
}
export default ApiService;