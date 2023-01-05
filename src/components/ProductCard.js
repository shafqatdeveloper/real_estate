
import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
  return (
    <div>
        <div  className='grid my-5 px-3 md:px-7 grid-cols-1 md:grid-cols-3 gap-6'>
        {data.map(({id,name,price,src})=>(
            <div key={id}>            
              <div className='border-2 rounded-xl border-yellow-700' >
              <img src={src} alt="" className='w-full rounded-xl' />
              <div className='py-5 px-5'>
                <h1 className='py-2 text-xl font-bold font-sans'>{name}</h1>
                <h1>Price : <span className='font-bold'> {price}</span></h1>
          <Link to={`details/${id}`}>    <button className='bg-amber-700 w-full mt-3 text-white font-bold font-sans py-1 rounded-xl' type="">Details</button></Link>
              </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCard