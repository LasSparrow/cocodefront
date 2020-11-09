import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const PRTabMain = styled.div`
    max-width: 246px; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 
`;

const PRTabContainer = styled.div`
    max-width: 246px; 
    max-height: 48px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    margin: 12px 0px 12px 0px; 
`;

const PRTabLeft = styled.div`
    max-width: 48px; 
    max-height: 48px; 
    display: flex; 
    justify-content: center;
    margin-right: 20px; 
`; 

const PRTabText = styled.div`
    min-width: 200px; 
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

const PRTabRight = styled.div`
    max-width: 22px; 
    max-height: 22px; 
    display: flex; 
    margin-left: -35px; 
    margin-top: -25px;
    cursor: pointer; 
    transform: ${props=>props.enlarge ? "scale(1.3)" : "scale(1)"};
    transition: 0.3s; 
`;

const PRText = styled.div`
    max-width: 200px; 
    max-height: 22px; 
    text-align: start;
    padding-left: 5px;
    font-size: 18px; 
    font-weight: 600; 
    color: #011F3B; 
    margin-bottom: 15px; 
`; 

const PRTab = () => {
    const[enlarge, setEnlarge] = useState(true); 
    return <PRTabMain>

        <PRText>Pending Requests</PRText>

        <PRTabContainer>
        <PRTabLeft>
            <img src="/PencilIcon.png"></img>
        </PRTabLeft>
        <PRTabText>
            <h1>Machine Learning</h1>
            <p>Sandy Rivers</p>
        </PRTabText>
        <PRTabRight enlarge={enlarge === 1} onMouseEnter={() =>{
            setEnlarge(1);
        }} onMouseLeave={() =>{
            setEnlarge(!enlarge);
        }}> 
            <img src="/InformationIcon.png"></img>
        </PRTabRight>
        </PRTabContainer>

        <PRTabContainer>
        <PRTabLeft>
            <img src="/PencilIcon.png"></img>
        </PRTabLeft>
        <PRTabText>
            <h1>Data Structure</h1>
            <p>Sandy Rivers</p>
        </PRTabText>
        <PRTabRight enlarge={enlarge === 3} onMouseEnter={() =>{
            setEnlarge(3);
        }} onMouseLeave={() =>{
            setEnlarge(!enlarge);
        }}>
            <img src="/InformationIcon.png"></img>
        </PRTabRight>
        </PRTabContainer>

        </PRTabMain>
}

PRTab.defaultProps = {
}

export default PRTab; 