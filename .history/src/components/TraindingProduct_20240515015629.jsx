
import { useSelector } from 'react-redux'
import { BoxProduct } from './BoxProduct';

export const TraindingProduct = () => {
    const listProduct = useSelector((state) => state.productSlice.product)
    console.log(listProduct,"listProduct");
    return (
        <div>
            {
                listProduct.map((item) => <BoxProduct key={item.id} item={item} />)
            }
        </div>
    )
}
