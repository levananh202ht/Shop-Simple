import * as React from 'react';

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
    console.log(nameCategory,"nameCategory123");


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
