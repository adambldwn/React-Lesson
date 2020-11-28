import { CardContainer,
        StyledText,
        StyledMovieImage,
        ContainerText,
        ContainerImage,
        ContainerButton } from './Card.style';

import noImage from '../img/noImage.jpg';

import {useHistory} from 'react-router-dom';

const baseImageUrl = "https://image.tmdb.org/t/p/w500";



export const Card = ({ MovieData }) => {
    // let noImage = "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"

    let appImage = MovieData.poster_path ? baseImageUrl + MovieData.poster_path : noImage
    const history = useHistory();
    

    return (

    
        <CardContainer>

            <ContainerText>
                <StyledText>{MovieData.title}</StyledText>
            </ContainerText>

            <ContainerImage>
                <StyledMovieImage src={appImage} />
            </ContainerImage>

            <ContainerButton>
                <button onClick={() => history.push(`/detail/${MovieData.id}`)}> deneme </button>
            </ContainerButton>
            
        </CardContainer>

    )
}
