import { useSelector } from "react-redux";
import { BoxProduct } from "./BoxProduct";


export const SellingProduct = () => {
    const listProduct = useSelector((state) => state.productSlice.newProduct)
    console.log(listProduct,"listProduct");
    return (
        <div className="container mx-auto mt-8 px-14">
        <h2 className="text-4xl font-semibold text-green-700"> Best Selling Product</h2>
        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listProduct.map((item) => (
            <BoxProduct key={item.id} item={item} />
            ))}
        </div>
        </div>
    )
}
