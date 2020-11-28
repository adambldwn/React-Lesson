import {useContext, useRef} from 'react'
import {Link} from 'react-router-dom';
import { MovieContext } from '../context/AppContext';
import {StyledSearchInput, StyledSearchButton} from "./NavBar.style";

export const NavBar = () => {

    const {setsearchQuery} = useContext(MovieContext);
    const inputRef = useRef();
    return (
        <div style={{backgroundColor:'red'}}>
            <Link to="/"> Home </Link>
            <StyledSearchInput type="text" placeholder="Lütfen aramak istediğiniz filmi giriniz" ref={inputRef}/>
            <StyledSearchButton onClick={() => setsearchQuery(inputRef?.current?.value)}> Search </StyledSearchButton>
        </div>
    )
}
