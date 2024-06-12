import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import RatingStar from "./RatingStar"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/feature/cartSlice"
import useRqAuthen from "../hook/useRqAuthen";
import toast from "react-hot-toast"


export const BoxProduct = ({item}) => {
    const dispatch = useDispatch() 
    const isCheckAuthen = useRqAuthen();

    const {id,thumbnail,title,price,category,rating,discountPercentage} = item
    const addCart = () => {
        toast.success('Add cart success!')
        isCheckAuthen(() =>
            dispatch(
                addToCart({
                ...item,
                quantity: 1,
                })
            )
        );
    };
    return (
        <div className="border border-gray-200 font-lato">
        <div className="text-center border-b border-gray-200">
            <Link to={{ pathname: `/product/${id}` }}>
            <img src={thumbnail} alt={title} className="inline-block h-60" />
            </Link>
        </div>
        <div className="px-8 pt-4">
            <p className="text-gray-500 text-[14px] font-medium ">{category}</p>
            <Link
            className="font-semibold title hover:underline "

            to={{ pathname: `/product/${id}` }}
            >
            {title}
            </Link>
        </div>
        <div className="px-8">
            <RatingStar rating={rating} />
        </div>
        <div className="flex items-center px-8 pb-4">
            <p className="mr-5 text-base font-semibold"> 
                {
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
                }
            </p>
            <span className="line-through border-gray-900 ">
                {
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(discountPercentage)
                }
            </span>
        </div>
        <button
            type="button"
            className="flex items-center justify-center px-4 py-2 space-x-2 text-white bg-pink-500 rounded hover:bg-blue-500 w-[100%]"
            onClick={addCart}
            >
            <AiOutlineShoppingCart />
            <span>ADD TO CART</span>
            </button>
        </div>
    )
}
