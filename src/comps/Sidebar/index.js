import React, {useState} from 'react'; 
import styled from 'styled-components';
import './Sidebar.css'
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
    NavLink,
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
        <NavLink to ="/MyAccount"className="navlink" activeClassName="selected">
            <img src="/ProfileIcon.png"></img>
            Profile 
        </NavLink>
        <NavLink to ="/Explore" className="navlink" activeClassName="selected">
            <img src="/ExploreIcon.png"></img>
            Explore 
        </NavLink>
        <NavLink to ="/MySession" className="navlink" activeClassName="selected">
            <img src="/HistoryIcon.png"></img>
            History 
        </NavLink>
        <NavLink to="/FindATutor" className="navlink" activeClassName="selected">
            <img src="/TopTutorsIcon.png"></img>
                Find Tutors 
        </NavLink>
        <NavLink to="/FAQ" className="navlink" activeClassName="selected">
            <img src="/SupportIcon.png"></img>
            Support
        </NavLink>
        <NavLink to="/EditAccount" className="navlink" activeClassName="selected">
            <img src="/SettingsIcon.png"></img>
            Settings
        </NavLink>
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