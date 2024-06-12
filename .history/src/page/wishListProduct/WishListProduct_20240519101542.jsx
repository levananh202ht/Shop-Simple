import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../../service/ApiService'
import { AiFillDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import RatingStar from '../../components/RatingStar';
import useRqAuthen from "../../hook/useRqAuthen";
import { addToCart } from '../../redux/feature/cartSlice';
import { BoxProduct } from '../../components/BoxProduct';

export const WishListProduct = () => {
    const listWish = useSelector((state) => state.cartSlice.wishlist);
    console.log(listWish,"12344566");

    return (
        <div className="container mx-auto mt-8 px-14">
        <h2 className="text-4xl font-semibold text-center text-green-70"> Trending Products</h2>
        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listWish.map((item) => (
            <BoxProduct key={item.id} item={item} />
            ))}
        </div>
        </div>
    )
}
