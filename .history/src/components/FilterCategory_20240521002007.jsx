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
    const handleChange = () => {
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
                        <FormControlLabel 
                        onChange={() => handleChange(item)} 
                        value={item} name="category" control={<Checkbox  />} 
                        label={item} />
                    )
                }
            </FormGroup>
        </div>
    );
}
