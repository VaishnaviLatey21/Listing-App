import React, { useEffect, useState } from 'react'
import  GenreList from '../Components/GenreList'
import Api from '../Services/Api'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GamesById from '../Components/GamesById';


function Home() {

  const [gameList, setGameList] = useState();
  const [gameListById, setGameListById] = useState([]);

  useEffect(() => {
    getGameList();
    getGameListById(4);
  }, [])

  const getGameList = () => {
    Api.getGameList.then((resp) => {
      setGameList(resp.data.results);

    })
  }

  const getGameListById = (id) => {
    Api.getGameListById(id).then((resp) => {
      console.log("Game list by genreId:", resp.data.results);
      setGameListById(resp.data.results)

    })
  }


  return (
    <div className='grid grid-cols-4 p-5'>
      <div className='h-full  hidden md:block'> 
      <GenreList genreId= {(genreId) => getGameListById(genreId)}/> 
      </div>
      <div className='col-span-4 md:col-span-3'> 
      {gameList?.length>0 ? 
      <div>
      <Banner gameBanner = {gameList[1]}/>
      <TrendingGames trendingGameList = {gameList}/>
      <GamesById trendingGameList = {gameListById} />
      </div>
       : null}
      </div>
    </div>
  )
}

export default Home