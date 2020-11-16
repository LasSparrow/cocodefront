import React, {useState} from 'react'; 
import styled from 'styled-components';
import Search from '../../comps/Search'; 
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

const SidebarContainer = styled.div`
    padding: 25px 25px 0px 25px;
    width: 200px;
    height: 100vh;
    background-color: #FFFFFF; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    position: fixed;
    img {
        margin-right: 20px; 
    }
`;

const Links = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const LogoContainer = styled.div`
    transform: ${props=>props.hovered ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s;
    min-width: 175px; 
    min-height: 84px;  
    cursor: pointer;
    padding-left: 15px;
`; 

const ProfileContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 60px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none; 
`;

const ExploreContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
`;

const HistoryContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
`;

const TopTutorsContainer = styled.div`
    max-width: 150px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
`;

const SupportContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
`;

const SettingsContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    cursor: pointer;
    user-select: none;
`;

const BecomeTutorContainer = styled.div`
    transform: ${props=>props.hoveredtwo ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s; 
    min-width: 192px; 
    min-height: 48px; 
    background-color: #173F5F;
    color: #FFFFFF; 
    border-radius: 10px; 
    font-size: 14px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    line-height; 17px; 
    margin-top: 60px; 
    cursor: pointer;
    user-select: none;
`;

const Sidebar = () => {
    const[hovered, setHovered] = useState(true); 
    const[hoveredtwo, setHoveredtwo] = useState(true); 
    const[clicked, setClicked] = useState(1);

    return <Router> 
    <Switch>
    <SidebarContainer> 
        <LogoContainer hovered={hovered} onMouseEnter={() =>{
            setHovered(!hovered);
        }} onMouseLeave={() =>{
            setHovered(!hovered); 
        }}> 
            <img src="/logo.svg"></img>
        </LogoContainer>
        <Links>
            <ProfileContainer clicked={clicked === 2} onClick={() =>{
                setClicked(2); 
            }}>
                <img src="/ProfileIcon.png"></img>
                Profile 
            </ProfileContainer>
            <ExploreContainer clicked={clicked === 1} onClick={() =>{
                setClicked(1); 
            }}>
                <img src="/ExploreIcon.png"></img>
                Explore 
            </ExploreContainer>
            <HistoryContainer clicked={clicked === 3} onClick={() =>{
                setClicked(3); 
            }}>
                <img src="/HistoryIcon.png"></img>
                Sessions 
            </HistoryContainer>
            <TopTutorsContainer clicked={clicked === 4} onClick={() =>{
                setClicked(4); 
            }}>
                <img src="/TopTutorsIcon.png"></img>
                Tutors 
            </TopTutorsContainer>
            <SupportContainer clicked={clicked === 5} onClick={() =>{
                setClicked(5); 
            }}>
                <img src="/SupportIcon.png"></img>
                Support
            </SupportContainer>
            <SettingsContainer clicked={clicked === 6} onClick={() =>{
                setClicked(6); 
            }}>
                <img src="/SettingsIcon.png"></img>
                Settings
            </SettingsContainer>
        </Links>
        <BecomeTutorContainer hoveredtwo={hoveredtwo} onMouseEnter={() =>{
            setHoveredtwo(!hoveredtwo);
        }} onMouseLeave={() =>{
            setHoveredtwo(!hoveredtwo); 
        }}> 
            Become A Tutor 
        </BecomeTutorContainer>
        <Search />
  </SidebarContainer>
  </Switch>
  </Router>
}

Sidebar.defaultProps = {
}

export default Sidebar; 