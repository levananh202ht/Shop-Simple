import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { ListFilterProduct } from '../redux/feature/productSlice';
import ApiService from '../service/ApiService';

export default function FilterCategory({listProduct}) {
    const dispatch = useDispatch()

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

    console.log(listProduct,"listProduct8888");
    const uniqueCategories = Array.from(new Set(listProduct.map((item) => item.category)));
    console.log(uniqueCategories,"uniqueCategories1223");

    const [nameCategory,setNameCategory] = React.useState([])

    const handleChange = (category) => {
        if (nameCategory.includes(category)) {
            setNameCategory(nameCategory.filter((cat) => cat !== category));
        } else {
            setNameCategory([...nameCategory, category]);
        }
    }
    let filteredProducts = listProduct.filter((product) => !nameCategory.includes(product.category));



    return (
        <div>
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
            </div>
        </div>
    );
}
