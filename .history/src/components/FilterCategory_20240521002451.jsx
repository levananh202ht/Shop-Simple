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
    const [nameCategory,setNameCategory] = React.useState()
    const handleChange = (category) => {
        setNameCategory((prev) => {
            if (nameCategory.includes(category)) {
                return prev.filter((item) => item !== category);
            } else {
                return [...prev, category];
            }
        });
    }
    React.useEffect(() => {
        setNameCategory([]);
    }, [listProduct.category]);

    console.log(nameCategory,"nameCategory");
    return (
        <div>
            <FormGroup>
                {
                    listCategory.map((item) => 
                        <label key={item} className="checkbox-container">
                        <input
                            type="checkbox"
                            onChange={() => handleChange(item)}
                            checked={nameCategory.includes(item)}
                        />
                        <span className="checkmark"></span>
                        {item}
                    </label>
                        // <FormControlLabel 
                        // onChange={() => handleChange(item)} 
                        // value={item} name="category" control={<Checkbox  />} 
                        // checked={nameCategory.includes(item)}
                        // label={item} />
                        
                    )
                }
            </FormGroup>
        </div>
    );
}
