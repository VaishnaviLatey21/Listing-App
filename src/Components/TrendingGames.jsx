import React, { useEffect } from 'react'

function TrendingGames({trendingGameList}) {

    useEffect(() => {
        console.log(trendingGameList)
    }, []);
  return (
    <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-[30px]'> Trending Games </h2>
    <div className='hidden md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4'>
        {trendingGameList.map((item,index) => index<4&&(
            <div className='bg-gray-300 rounded-lg p-1 hover:scale-110 transition-all cursor-pointer'>
                <img src={item.background_image} 
                className='h-[270px] rounded-lg object-cover'/>
                <h2 className='text-[20px] font-bold p-2'>{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames