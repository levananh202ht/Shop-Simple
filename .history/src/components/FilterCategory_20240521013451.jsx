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
    const handleChange = (item) => {
        setNameCategory((prev) => {
            if (nameCategory.includes(item)) {
                return prev.filter((i) => i !== item);
            } else {
                return [...prev, item];
            }
        });
    }
    React.useEffect(() => {
        setNameCategory([]);
    }, [listProduct]);
    console.log(listProduct.title,"listProduct123");

    console.log(nameCategory,"nameCategory");
    return (
        <div>
            <FormGroup>
                {
                    listCategory.map((item) => 
                        <FormControlLabel 
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
