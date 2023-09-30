import React, { useEffect, useState } from 'react'
import Api from '../Services/Api';

function GenreList() {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(()=> {
        getGenreList();
    }, {})
    const getGenreList = () => {
        Api.getGenreList.then((resp) => {
            setGenreList(resp.data.results);
        })
    }



  return (
    <div>
        <h2 className='text-[30px] font-bold'>Genre</h2>
        {genreList.map((item, index) => (
            <div onClick={() => setActiveIndex(index)}
            className={`flex gap-2 items-center mb-3 cursor-pointer rounded-md hover:bg-gray-300 p-2
                            ${activeIndex==index ? 'bg-gray-300':null}`}>
                <img src= {item.image_background} className={`w-[40px] h-[40px] object-cover rounded-md hover:scale-105 ${activeIndex==index ? 'font-bold':null}`}/>
                <h3 className={`hover:font-bold transition-all ${activeIndex==index?'font-bold':null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList