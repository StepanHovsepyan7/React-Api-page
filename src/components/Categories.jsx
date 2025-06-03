import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Categories() {

    const [categories, setCategories] = useState([]);
    const [typeProduct, setTypeProduct] = useState([]);
    const [click, setClick] = useState("");


    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(res => setCategories(res));
    }, [])


    useEffect(() => {
        if (click) {
            fetch(`https://dummyjson.com/products/category/${click}`)
                .then(res => res.json())
                .then(res => setTypeProduct(res.products));
        }
    }, [click])




    return (
        <div>
            <div className='flex flex-wrap justify-center items-center gap-[20px]'>
                {categories.map((category, i) => {
                    return (
                        <div key={i}>
                            <button
                                onClick={() => {
                                    setClick(category)
                                }}
                                className={`categoriesBtn`}>{category}</button>
                        </div>
                    )
                })}
            </div>


            <div className='max-w-[1440px] m-auto p-3 pt-[100px]'>
                <div className='flex flex-wrap justify-center gap-[20px] text-center items-center '> 
                    {typeProduct.map((e) => {
                        return (
                            <div className='w-[400px] flex ' key={e.id}>
                                <Link to={`/products/${e.id}`} key={e.id} >
                                    <Cards title={e.title} imageUrl={e.images[0]} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>



    )
}

export default Categories