import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterCategory() {
    const nameCategory = [
        "smartphones",
        "laptops",
        "fragrances",
        "groceries",
        "skincare",
        "home-decoration",
    ]
    console.log(nameCategory,"nameCategory");
    return (
        <div>
            <FormGroup>
                {
                    nameCategory.map((item) => 
                        <FormControlLabel control={<Checkbox  />} label={item} />
                    )
                }
            </FormGroup>
        </div>
    );
}