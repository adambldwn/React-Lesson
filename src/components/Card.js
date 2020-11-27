import { CardContainer, StyledCardList, StyledText, StyledMovieImage, ContainerText, ContainerImage, ContainerButton } from './Card.style';

const baseImageUrl = "https://image.tmdb.org/t/p/w500";



export const Card = ({ MovieData }) => {


    return (

        <CardContainer>

            <ContainerText>
                <StyledText>{MovieData.title}</StyledText>
            </ContainerText>

            <ContainerImage>
                <StyledMovieImage src={baseImageUrl + MovieData.poster_path} />
            </ContainerImage>

            <ContainerButton>
                <button>deneme</button>
            </ContainerButton>
            
        </CardContainer>

    )
}
