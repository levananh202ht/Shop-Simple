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
        console.log(e,"123456");
        const {name,checked,value} = e.target;
        setNameCategory(
            typeof checked ? value.split(",") : value
            // [name]: checked ? value : ""
        )
    }
    console.log(nameCategory,"nameCategory");
    return (
        <div>
            <FormGroup>
                {
                    listCategory.map((item) => 
                        <FormControlLabel onChange={handleChange} value={item} name="category" control={<Checkbox  />}
                        checked={nameCategory.includes(item)}
                        label={item} />
                    )
                }
            </FormGroup>
        </div>
    );
}