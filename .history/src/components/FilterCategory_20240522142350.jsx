import * as React from 'react';
import { BoxProduct } from './BoxProduct';

export default function FilterCategory({listProduct}) {




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
    const filteredProducts = listProduct.filter((product) => !nameCategory.includes(product.category));
    console.log(filteredProducts,"filteredProducts123");
    console.log(nameCategory,"nameCategory123");


    return (
        <div className='flex'>
            <div >
            <h2 className='mb-2 text-2xl font-bold'>Category</h2>
                {
                    uniqueCategories.map((category) => 
                        <div key={category} className='p-5 border border-gray-200 w-60' >
                            <label  className="flex items-center space-x-2 ">
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
            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {filteredProducts.map((item) => (
                    <BoxProduct key={item.id} item={item} />
                    ))}
                </div>
        </div>
    );
}
