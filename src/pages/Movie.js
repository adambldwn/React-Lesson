import {useContext} from 'react'
import { Card } from '../components/Card';
import {MovieContext} from '../context/AppContext';
export const Movie = () => {

    const {movieList} = useContext(MovieContext);
    
    return (
       <div style={{display: 'flex', gap: 27, justifyContent: 'center', alignItems: 'center',flexWrap: 'wrap', marginTop: 25}}>
            {
                movieList?.map((mov) => <Card MovieData={mov}/> )
            }
        </div>
    )
}
