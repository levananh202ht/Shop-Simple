import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterCategory() {
    const listCategory = [
        "smartphones",
        "laptops",
        "fragrances",
        "groceries",
        "skincare",
        "home-decoration",
    ]
    const [nameCategory,setNameCategory] = React.useState({
        category:"",
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setNameCategory({
            ...nameCategory,
            [name]: value
        })
    }
    return (
        <div>
            <FormGroup>
                {
                    listCategory.map((item) => 
                        <FormControlLabel onChange={handleChange} value={item} name="category" control={<Checkbox  />} label={item} />
                    )
                }
            </FormGroup>
        </div>
    );
}