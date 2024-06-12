import React from 'react'
import { useSelector } from 'react-redux'

export const ListProduct = () => {
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    return (
        <div>ListProduct</div>
    )
}
