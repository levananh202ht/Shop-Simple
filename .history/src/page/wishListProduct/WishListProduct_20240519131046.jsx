import React from 'react'
import {  useSelector } from 'react-redux'

import { FavoritesList } from '../../components/FavoritesList';

export const WishListProduct = () => {
    const listWish = useSelector((state) => state.cartSlice.wishlist);
    console.log(listWish,"12344566");

    return (
        <div className="container mx-auto mt-8 px-14">
        <h2 className="text-4xl font-semibold text-center text-green-700"> Favorites list</h2>
        <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listWish.map((item) => (
            <FavoritesList key={item.id} item={item} />
            ))}
        </div>
        </div>
    )
}
