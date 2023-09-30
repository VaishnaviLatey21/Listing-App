import React, { useEffect } from 'react'

function Banner({gameBanner}) {

    useEffect(() => {
        
    }, []);

  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-6 bg-gradient-to-t from-slate-800 to-transparent w-full'>
            <h2 className='text-[25px] font-bold text-white'>{gameBanner.name}</h2>
            <button className='bg-green-600 text-white p-1 px-3 rounded-md'>Start</button>
        </div>
        <img src= {gameBanner.background_image} className='md:h-[550px] w-full rounded-lg object-cover pt-2'/>

    </div>
  )
}

export default Banner