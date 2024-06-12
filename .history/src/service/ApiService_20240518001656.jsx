import axios from "axios";

const url = "https://dummyjson.com/products";

const ApiService = {
    ApiListProduct: async () => {
        return await axios(url)
    },
    ApiDetailProduct: async (id) => {
        const res =  await axios(`${url}/${id}`)
        return res.data
      }
}
export default ApiService;