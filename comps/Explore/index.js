import React, {useState} from 'react'; 
import styled from 'styled-components';

const ImageContainer = styled.div`
    min-width: 801px; 
    min-height: 408px;
    img {
        border-radius: 10px; 
    }
    cursor: pointer; 
`;

const BigTextContainer = styled.div`
    max-width: 383px; 
    max-height: 37px; 
    font-size: 24px; 
    color: #FFFFFF; 
    position: absolute; 
    top: 0; 
    margin-top: 50px; 
    margin-left: 35px; 
`;

const SmallTextContainer = styled.div`
    max-width: 383px; 
    max-height: 37px; 
    font-size: 18px; 
    color: #FFFFFF; 
    opacity: 80%; 
    position: absolute;
    top: 0; 
    margin-top: 80px; 
    margin-left: 38px; 
    display: flex; 
    justify-content: space-bewteen; 
    word-spacing: 150px; 
`;

const IconContainer = styled.div`
    max-width: 46px; 
    max-height: 46px; 
    position: absolute; 
    top: 0; 
    margin-top: 250px; 
    margin-left: 35px; 
     
`; 

const ExploreBox = () => {
return  <ImageContainer>
        <img src="/WebDevImage.png"></img>
        <BigTextContainer>Web Development</BigTextContainer>
        <SmallTextContainer>2000Students 30Tutors</SmallTextContainer>
        <IconContainer>
            <img src="/FavouriteIcon.png"></img>
        </IconContainer>
    </ImageContainer>
}

ExploreBox.defaultProps = {

}

export default ExploreBox; 