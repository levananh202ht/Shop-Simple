import axios from "axios";
// https://dummyjson.com/products/search?q={value_searchName}&limit=10&select="value_select"&skip={skip}
const url = "https://dummyjson.com/products";

const ApiService = {
    ApiListProduct: async () => {
        return await axios(`${url}`)
    },
    ApiDetailProduct: async (id) => {
        const res =  await axios(`${url}/${id}`)
        return res.data
    }
}
export default ApiService;