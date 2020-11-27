import Axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const apiKey = "7fc8d00ab1302c6aa7da237d2810116e";
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export default function AppContext(props) {
    const [movieList, setMovieList] = useState([])

    const fetchData = async() => {
        const data = await axios.get(
            baseUrl, {params: {
                api_key:apiKey,
                page:1,
                query:"star wars"
            }}
        )
        setMovieList(data.data.results)
    }
    
    useEffect(()=>{
        fetchData();
    },[])


    return (
            <MovieContext.Provider value={ {movieList} }>
                {props.children}
            </MovieContext.Provider>  
    )
}
