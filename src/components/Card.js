import { CardContainer,
        StyledText,
        StyledMovieImage,
        ContainerText,
        ContainerImage,
        ContainerButton } from './Card.style';

const baseImageUrl = "https://image.tmdb.org/t/p/w500";



export const Card = ({ MovieData }) => {
    let noImage = "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"
    let appImage = MovieData.poster_path ? baseImageUrl + MovieData.poster_path : noImage
    
    console.log(MovieData.poster_path)

    return (

        <CardContainer>

            <ContainerText>
                <StyledText>{MovieData.title}</StyledText>
            </ContainerText>

            <ContainerImage>
                <StyledMovieImage src={appImage} />
            </ContainerImage>

            <ContainerButton>
                <button>deneme</button>
            </ContainerButton>
            
        </CardContainer>

    )
}
