import React, {useState} from 'react'; 
import styled from 'styled-components'; 
import sidebarlogo from '../../public/logo.svg';
import sidebarprofile from '../../public//ProfileIcon.png';
import sidebarexplore from '../../public/ExploreIcon.png';
import sidebarhistory from '../../public/HistoryIcon.png';
import sidebartutors from '../../public/TopTutorsIcon.png';
import sidebarsupport from '../../public/SupportIcon.png';
import sidebarsettings from '../../public/SettingsIcon.png';
import Search from '../../comps/Search'; 
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

const AllContainers = styled.div`
//clicked prop css here
`;

const SidebarContainer = styled(AllContainers)`
    padding: 25px 25px 0px 25px;
    flex: 0 0 200px;
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
    max-width: 160px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    font-weight: ${props=>props.clicked ? 'bold' : 'none'}; 
    color: ${props=>props.clicked ?  "#173F5F" : "#8DA1B5"}; 
    img {
        margin-left: 20px; 
    }
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

    return <SidebarContainer> 
        <Link to ='/Explore' style={{ textDecoration: 'none' }} >
            <LogoContainer> 
                <img src="/logo.svg"></img>
            </LogoContainer>
        </Link>
        <Link to ="/MyAccount" style={{ textDecoration: 'none' }} >
            <ProfileContainer>
                <img src="/ProfileIcon.png"></img>
                Profile 
            </ProfileContainer>
        </Link>
        <Link to ="/Explore" style={{ textDecoration: 'none' }}>
            <ExploreContainer>
                <img src="/ExploreIcon.png"></img>
                Explore 
            </ExploreContainer>
        </Link>
        <Link to ="/MySession" style={{ textDecoration: 'none' }}>
            <HistoryContainer>
                <img src="/HistoryIcon.png"></img>
                History 
            </HistoryContainer>
        </Link>
        <Link to="/FindATutor" style={{ textDecoration: 'none' }} >
            <TopTutorsContainer>
                <img src="/TopTutorsIcon.png"></img>
                    Find Tutors 
            </TopTutorsContainer>
        </Link>
        <Link to="/FAQ" style={{ textDecoration: 'none' }} >
            <SupportContainer>
                <img src="/SupportIcon.png"></img>
                Support
            </SupportContainer>
        </Link>
        <Link to="/EditAccount" style={{ textDecoration: 'none' }} >
            <SettingsContainer>
                <img src="/SettingsIcon.png"></img>
                Settings
            </SettingsContainer>
        </Link>
        <Link to ="/BecomeATutor" style={{ textDecoration: 'none' }} >
            <BecomeTutorContainer> 
                Become A Tutor 
            </BecomeTutorContainer>
        </Link>
        <Search />
  </SidebarContainer>
}

Sidebar.defaultProps = {
}

export default Sidebar; 