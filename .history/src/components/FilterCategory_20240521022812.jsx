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
    ]
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
                    listCategory.map((item) => 
                        <FormControlLabel 
                        key={item}
                        checked={nameCategory.includes(item)}
                        onChange={() => handleChange(item)} 
                        value={item} name="category" control={<Checkbox  />} 
                        label={item} />
                        
                    )
                }
            </FormGroup>
        </div>
    );
}
