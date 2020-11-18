import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const USTabMain = styled.div`
    max-width: 246px; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 

    @media (max-width: 1024px) {
        margin-right: 20px;
    }   
`;

const USTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 

    @media (max-width: 1024px) {
        display: none;
    }
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
    text-align: start;
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
    max-width: 200px; 
    max-height: 22px; 
    text-align: start;
    padding-left: 5px;
    font-size: 18px; 
    font-weight: 600; 
    color: #011F3B; 
    margin-bottom: 15px; 
    cursor: pointer;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }   
`; 

const DDIcon = styled.img`
    max-height: 20px;
    max-width: 20px;
    align-self: center;
    display: none;
    margin-left: 10px;

    @media (max-width: 1024px) {
        display: inline-flex;
    }   
`;

const USTab = () => {
    return <USTabMain>

        <USText>Upcoming Sessions
            <DDIcon src="/DropdownIcon.png"/>
        </USText>

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