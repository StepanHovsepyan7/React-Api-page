import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Single() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [smallImages, setImages] = useState('');


    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
                setImages(res.images[0])
            });

    }, [id])

    if (!product) {
        return (

            <div role="status" className='flex items-center justify-center pt-[500px]'>
                <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    return (
        <div>
            <div className='max-w-[1440px] m-auto p-3 pt-[60px] flex items-center flex-wrap justify-center'>
                <div className='flex flex-col items-center'>
                    <img className="singleImg" src={smallImages} alt="" />
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {product.images.map((e, i) => {
                            return (
                                <img className='smallImages' onClick={() => setImages(e)} key={i} src={e} alt="" />
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='sm:mt-5'>
                        <h1 className=' text-[60px] text-red-500 title'>{product.title}</h1>
                    </div>
                    <div className='mt-5'>
                        <span className='font-bold text-[20px] title text-red-700'>Prodcut: </span>
                        <span className='text-[20px]'>{product.brand}</span><br />
                    </div>
                    <div className='mt-5'>
                        <span className='font-bold text-[20px] title text-red-700'>Category: </span>
                        <span className='text-[20px] '>{product.category}</span><br />
                    </div>
                    <div className='mt-5'>
                        <span className='font-bold text-[20px] title text-red-700'>Price: </span>
                        <span className='text-[20px]'>{product.price}$</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-white max-w-[600px] mt-5 title text-[20px]'>{product.description}</p>
                    </div>
                    <div className='mt-5 flex gap-2'>
                        <span className='font-bold text-[20px] title text-red-700'>Warranty:</span>
                        <p className='text-[20px]'>{product.warrantyInformation}</p>
                    </div>
                    <div className='mt-5 flex gap-2'>
                        <span className='font-bold text-[20px] title text-red-700'>Rating:</span>
                        <p className='text-[20px]'>{product.rating}</p>
                    </div>
                </div>

            </div>


            <div className='max-w-[1440px] m-auto p-3 pt-[60px] text-white'>
                <h2 className='title text-[50px] text-center text-red-500'>Our Reviews</h2>
                <div className='pt-10'>
                    {product.reviews.map((e, i) => {
                        return (
                            <div key={i} className='flex flex-col justify-center'>
                                <h2 className='title text-[35px] text-red-700'>{e.reviewerName}</h2>
                                <p className='text-[20px] title text-red-700'>{e.reviewerEmail}</p>
                                <p className="text-[20px] mt-5">{e.comment}</p>
                                <span>Rating: {e.rating}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Single