import React, { useEffect } from 'react'

function GamesById({trendingGameList}) {

    useEffect(() => {
        console.log("trendingGameList", trendingGameList)
    }, [])

  return (
    <div>
        <h2 className='font-bold text-[30px] mt-5'>Popular Games</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {trendingGameList.map((item) => (
            <div className='bg-gray-300 p-3 rounded-lg pb-5 hover:scale-110 transition-all'>
                <img src={item.background_image} className='w-full h-[80%] rounded-lg object-cover'/>
                <h2 className='text-[15px] mt-2'>
                    {item.name}
                    <span className='font-bold text-green-700 p-1 ml-1'>{item.metacritic}</span>
                </h2>
                <h2 className='text-gray-600 font-bold'>★{item.rating}</h2>

            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesById