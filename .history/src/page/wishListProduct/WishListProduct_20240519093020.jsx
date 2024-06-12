import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../../service/ApiService'

export const WishListProduct = () => {
    const listCarts = useSelector((state) => state.AddWishlist.Wishlist);
    console.log(listCarts,"mlo");
    return (
        <div>WishListProduct</div>
    )
}
