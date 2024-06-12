import React from 'react'

export const ListProduct = () => {
    const listProduct = useSelector((state) => state.productSlice.listProduct)
    return (
        <div>ListProduct</div>
    )
}
