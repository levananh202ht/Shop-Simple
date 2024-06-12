import * as React from 'react';
import { BoxProduct } from './BoxProduct';

export default function FilterCategory({listProduct}) {




    console.log(listProduct,"listProduct8888");
    const uniqueCategories = Array.from(new Set(listProduct.map((item) => item.category)));
    console.log(uniqueCategories,"uniqueCategories1223");

    const [nameCategory,setNameCategory] = React.useState([])

    const handleChange = (category) => {
        setNameCategory((prev) =>{
            if (nameCategory.includes(category)) {
                setNameCategory(prev.filter((cat) => cat !== category));
            } else {
                setNameCategory([...prev, category]);
            }
        }
        )
        
    }
    React.useEffect(() => {
        setNameCategory([]);
    }, []);
    const filteredProducts = listProduct.filter((product) =>  !nameCategory.includes(product.category));
    console.log(filteredProducts,"filteredProducts123");
    console.log(nameCategory,"nameCategory123");


    return (
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {filteredProducts.map((item) => (
                    <BoxProduct key={item.id} item={item} />
                    ))}
                </div>
        </div>
    );
}
