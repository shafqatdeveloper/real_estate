import React from 'react'

const FilterCard = ({data}) => {
  return (
    <div>
    <div  className='grid my-5 font-sans px-3 md:px-7 grid-cols-1 md:grid-cols-4 gap-6'>
      {data.map((item)=>{
        const {id,src,name,price,beds,marla,type} = item;
        return(
          <div key={id}>
            <div key={id} className='border-2 rounded-xl border-yellow-700' >
            <img src={src} alt="" className='w-full rounded-xl' />
            <div className='py-5 px-5'>
              <h1 className='py-2 text-xl font-bold font-sans'>{name}</h1>
              <h1>Price : <span className='font-bold text-lg'> $ {price}</span></h1>
              <h1 className="py-2">Property Type : <span className='font-bold text-lg'> {type}</span></h1>

              <div className="flex items-center justify-between">
              <h1>Beds : <span className='font-bold text-lg'> {beds}</span></h1>
              <h1>Marla : <span className='font-bold text-lg'> {marla}</span></h1>
              </div>
            </div>
          </div>
          </div>
        )
      })}
    </div>
    </div>

  )
}

export default FilterCard