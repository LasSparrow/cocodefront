import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const FSContainer = styled.div`
    max-width: 298px; 
    max-height: 216px; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    background-color: #F5F5FB; 
    border-radius: 10px; 
`; 

const FSIcon = styled.div`
    max-width: 39px; 
    max-height: 39px; 
    padding: 25px; 
`;

const FSMiddle = styled.div`
    max-width: 232px; 
    max-height: 38px; 
    font-size: 20px; 
    font-weight: 400; 
    color: #8DA1B5; 
    padding: 0px 25px 25px 25px; 
`;

const FSButton = styled.div`
    max-width: 252px; 
    max-height: 49px; 
    background-color: #018EA2; 
    border-radius: 10px; 
    color: #FFFFFF;
    display: flex; 
    align-items: center;
    justify-content: center; 
    font-size: 18px; 
    font-weight: 600; 
    padding: 15px 60px 15px 60px;  
    margin-bottom: 27px; 
`;

const FSTab = () => { 
    return <FSContainer>
        <FSIcon>
            <img src="/RibbonIcon.png"></img>
        </FSIcon>
        <FSMiddle>
            Struggling at school?
        </FSMiddle>
        <FSButton>
            Get a free session
        </FSButton>
    </FSContainer>
}

FSTab.defaultProps = {

}

export default FSTab; 