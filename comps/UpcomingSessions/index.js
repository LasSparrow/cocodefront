import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const USTabMain = styled.div`
    max-width: 246px; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 
`;

const USTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 
`;

const USTabLeft = styled.div`
    max-width: 48px; 
    max-height: 48px; 
    display: flex; 
    justify-content: center;
    margin-right: 20px; 
`; 

const USTabText = styled.div`
    min-width: 138px; 
    max-height: 42px; 
    justify-content: center; 
    display: flex; 
    flex-direction: column; 
    h1 {
        font-size: 16px;
        font-weight: 600; 
        margin: 20px 0px -5px 0px; 
        color: #011F3B; 
    }
    p {
        font-size: 14px; 
        font-weight: 400; 
        color: #83919E; 
        margin-bottom: 20px; 
    }
`;

const USText = styled.div`
    max-width: 158px; 
    max-height: 22px; 
    font-size: 18px; 
    font-weight: 600; 
    color: #011F3B; 
    margin-bottom: 15px; 
`; 

const USTab = () => {
    return <USTabMain>

        <USText>Upcoming Sessions</USText>

        <USTabContainer>
        <USTabLeft>
            <img src="/BoxIcon.png"></img>
        </USTabLeft>
        <USTabText>
            <h1>Python Development</h1>
            <p>27 Nov 2020, Sandy Rivers</p>
        </USTabText>
        </USTabContainer>

        <USTabContainer>
        <USTabLeft>
            <img src="/BoxIcon.png"></img>
        </USTabLeft>
        <USTabText>
            <h1>Algorithms</h1>
            <p>27 Nov 2020, Sandy Rivers</p>
        </USTabText>
        </USTabContainer>

        </USTabMain>
}

USTab.defaultProps = {
}

export default USTab; 