import axios from "axios";

const key = '87d90ccff9114f429a4faefc4ed3cc0d';

const CreateAxios = axios.create({
    baseURL : 'https://api.rawg.io/api'
});

const getGenreList = CreateAxios.get('/genres?key=' + key);
const getGameList = CreateAxios.get('/games?key=' + key);
const getGameListById=(id)=>CreateAxios.get('/games?key='+key+'&genres='+id)

export default  {
    getGenreList,
    getGameList,
    getGameListById
}

