import React from "react";import { useDispatch, useSelector } from "react-redux";
import { SlPlus } from "react-icons/sl";
import { SlMinus } from "react-icons/sl";
import { AiFillDelete } from "react-icons/ai";
import { addToCart, reduceFromCart, removeFromCart } from "../redux/feature/cartSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
export const ListCartOrder = () => {

    const dispath = useDispatch();
    const listCarts = useSelector((state) => state.cartSlice.carts);
    const handleUpdateAddToCart = (item) => {
        toast.success("Thêm sản phẩm thành công", {
        duration: 1000,
        position: "top-center",
        style: {
            fontSize: "14px",
        },
        });
        dispath(addToCart(item));
    };
    console.log(listCarts,"qưtgaghs");
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
                        {/* <span className="text-xs">-17.94%</span> */}
                    </div>
                    <div className="flex items-center space-x-1">
                        <SlMinus
                        onClick={() => dispath(reduceFromCart(item.id))}
                        className="cursor-pointer"
                        />
                        <span className="font-semibold">{item.quantity}</span>
                        <SlPlus
                        className="cursor-pointer"
                        onClick={() => handleUpdateAddToCart(item)}
                        />
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
            <div className="flex justify-between mt-3">
                <h1 className="font-bold">Total: $
                    {
                    listCarts.reduce((total,product) => total + product.price * product.quantity,0)
                    }
                </h1>
                <Link 
                className='bg-white rounded-3xl hover:text-blue-400'
                to="/payment/checkout"
                navigate= {0}
                >
                Checkout
                    
                </Link>
            </div>
            </div>

        )}
        </>
    );
};

