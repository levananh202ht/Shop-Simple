import * as React from 'react';
import { BoxProduct } from './BoxProduct';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function FilterCategory({listProduct}) {

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
    const filteredProducts = listProduct.filter((product) =>  !nameCategory.includes(product.category));
    console.log(filteredProducts,"filteredProducts123");
    console.log(nameCategory,"nameCategory123");


    return (
        <div>
            <div className='flex justify-end mb-5'>
                <div className='flex items-center mr-4 text-xl font-semibold'>Sort by:</div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value="default" >Default</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </div>
            <div className='flex gap-4'>
                <div className='' >
                    <div className='p-5 border border-gray-200 w-60'>
                    <h2 className='mb-6 text-2xl font-bold'>Category</h2>
                    {
                        uniqueCategories.map((category) => 
                            <div key={category}  >
                                <label  className="flex items-center mb-4 space-x-2 ">
                                    <input
                                        type="checkbox"
                                        checked={nameCategory.includes(category)}
                                        onChange={() => handleChange(category)}
                                    />
                                    <span>{category}</span>
                                </label>
                            </div>
                            
                        )
                    }
                    </div>
                </div>
                <div className=''>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {filteredProducts.map((item) => (
                            <BoxProduct key={item.id} item={item} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
