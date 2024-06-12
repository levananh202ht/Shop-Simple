import React from 'react'
import { useSelector } from 'react-redux'

export const TraindingProduct = () => {
    const listProduct = useSelector((state) => state.productSlice.product)
    console.log(listProduct,"listProduct");
    return (
        <div>TraindingProduct</div>
    )
}
