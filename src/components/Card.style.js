import styled from "styled-components";

export const CardContainer = styled.div`

width: 400px;
height: 450px;
border: 0.0625rem solid rgba(0,0,0,0.2);
border-radius: 5px;

display: flex;
align-items: center;

flex-direction: column;
transition: 0.4s;
&:hover {
    transform: scale(1.1);
    box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
}
`;

export const StyledText = styled.p`
    color: red;
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
`;

export const ContainerText = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledMovieImage = styled.img`
    width: auto;
    height: 100%;
`;

export const ContainerImage = styled.div`

    height: 75%;
`;
export const ContainerButton = styled.div`
    
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
