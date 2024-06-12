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


    console.log(nameCategory,"nameCategory");
    return (
        <div>
            <FormGroup>
                {
                    listCategory.map((category) => 
                        <FormControlLabel 
                        key={category}
                        checked={nameCategory.includes(category)}
                        onChange={() => handleChange(category)} 
                        value={category} name="category" control={<Checkbox  />} 
                        label={category} />
                        
                    )
                }
            </FormGroup>
        </div>
    );
}
