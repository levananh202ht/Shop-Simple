import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../../service/ApiService'
import { AiFillDelete } from 'react-icons/ai';

export const WishListProduct = () => {
    const dispath = useDispatch();
    const listCarts = useSelector((state) => state.cartSlice.wishlist);
    console.log(listCarts,"12344566");
    return (
        <>
        {listCarts.length === 0 ? (
            <div className="p-4 m-auto">
            {/* <img src={emptyCart} className="h-48" /> */}
            <h1 className="pt-3 font-semibold text-center">Empty Cart</h1>
            </div>
        ) : (
            <div className="p-3">
            {listCarts.map((item) => (
                <div className="mt-6 space-y-2" key={item.id}>
                <div className="flex items-center gap-3 p-2 border rounded-lg">
                    <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className="h-14 w-14"
                    />
                    <div className="w-4/6">
                    <h3 className="text-lg font-bold leading-4">{item.title}</h3>
                    <div className="flex items-center py-1 space-x-2">
                        <h3 className="font-semibold">${item.price}</h3>
                    </div>
                    </div>
                    <div className="font-bold grow">
                    <span data-test="cart-item-price">
                        ${item.quantity * item.price} 
                    </span>
                    <AiFillDelete onClick={() => dispath(removeFromCart(item.id))} className="text-xl text-red-600 cursor-pointer" />
                    </div>
                </div>
                </div>
            ))}
            </div>

        )}
        </>
    )
}
