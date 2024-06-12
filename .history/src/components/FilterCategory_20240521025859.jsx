import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterCategory({listProduct}) {
    console.log(listProduct,"listProduct123");
    const listCategory = [
        "smartphones",
        "laptops",
        "fragrances",
        "groceries",
        "skincare",
        "home-decoration",
        "motorcycle",
        "lighting",
        "furniture",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
    ]
    const uniqueCategories = Array.from(new Set(listProduct.map((item) => item.category)));
    const [nameCategory,setNameCategory] = React.useState([])
    const handleChange = (category) => {
        // Kiểm tra xem category đã được chọn trước đó chưa
        if (nameCategory.includes(category)) {
            // Nếu đã được chọn, loại bỏ khỏi danh sách filteredCategories
            setNameCategory(nameCategory.filter((cat) => cat !== category));
        } else {
            // Nếu chưa được chọn, thêm vào danh sách filteredCategories
            setNameCategory([...nameCategory, category]);
        }
    }
    // Lọc danh sách sản phẩm dựa trên các category đã được chọn
    let filteredProducts = listProduct.filter((product) => !nameCategory.includes(product.category));


    console.log(nameCategory,"nameCategory");
    return (
        <div>
            {
                    uniqueCategories.map((category) => 
                        <label key={category} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={nameCategory.includes(category)}
                                    onChange={() => handleChange(category)}
                                />
                                <span>{category}</span>
                        </label>
                        
                    )
                }
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
                    {filteredProducts.map((pro) => (
                        <ProductItem key={pro.id} pro={pro} />
                    ))}
                </div>
        </div>
    );
}
