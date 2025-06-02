import React, { useEffect, useState } from 'react'

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(res => setCategories(res));
    }, [])


    
    return (
        <div>
            <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                {categories.map((category, i) => {
                    return (
                        <div  key={i}>
                            <button  className='categoriesBtn'>{category}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories