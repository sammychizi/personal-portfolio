import React from 'react'
import Image from 'next/image';
import shawarma from '../../public/shawarma.jpg'

interface Props {
    dish: string;
    stars: string;
    name: string;
    description : string;
    price : string;
    url : string,

  }

  
function Card({dish, stars, name, description, price, url}:Props) {
    console.log("myrurl", url)
  return (
    <div className=' h-96 w-60 m-5 flex flex-col rounded-lg '>
        
        {/* Test */}
        <div className=' bg-red-500 rounded-lg overflow-hidden'>
            <img src={"http://localhost:1337" + url} alt="Picture of the author" className='object-cover w-60 h-60' />
        </div>
        <div className='h-1/2 flex flex-col'> 
            <div className='font-semibold mt-2 flex justify-between '> 
                <div className=''>
                    {dish}
                </div>
                <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 fill-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <span className='mx-1 font-normal'>{stars}</span>
                </div>
            </div>
            <div className="font-normal text-slate-500">{name}</div>
            <div className='font-normal text-slate-500'>{description}</div>
            <div className='font-semibold'>K{price}<span className='font-light'> per meal</span></div>
        </div>

    </div>
  )
}

export default Card