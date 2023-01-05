import React, { useState } from 'react'
import { products_data } from './Data'
import ProductCard from './ProductCard';

const Products = () => {
  const Data = products_data;
  const [query,setQuery] = useState("")
  // console.log(Data.filter((item)=>item.name.toLocaleLowerCase().includes(query)))
  const search= (data)=>{
    return data.filter((item)=>
    item.name.toLowerCase().includes(query)
    )
  }
  return (
    <div  className='w-full flex-col flex items-center h-full'>
      <div className='py-5 w-full flex items-center justify-center h-full'>
        <form className='flex items-center border-[3px] bg-slate-600 text-white w-min px-5 py-2 rounded-xl border-yellow-700 justify-center'>
          <label className='font-bold font-sans' htmlFor="search">Search</label>
          <input type="text" className='text-center px-5 bg-transparent focus:outline-none rounded-xl' onChange={e=>setQuery(e.target.value)} name="search" />
        </form>
      </div>
      <ProductCard data={search(Data)} />
    </div>
  )
}

export default Products