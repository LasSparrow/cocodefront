import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const AllContainers = styled.div`
//clicked prop css here
`;

const SidebarContainer = styled(AllContainers)`
    max-width: 272px; 
    max-width: 1024px; 
    background-color: #FFFFFF; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    img {
        margin-right: 20px; 
    }
`;

const LogoContainer = styled.div`
    transform: ${props=>props.hovered ? "scale(1)" : "scale(1.1)"};
    transition: 0.5s;
    max-width: 175px; 
    max-height: 84px;  
    cursor: pointer;
`; 

const ProfileContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 60px; 
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

    return <SidebarContainer> 
        <LogoContainer hovered={hovered} onMouseEnter={() =>{
            setHovered(!hovered);
        }} onMouseLeave={() =>{
            setHovered(!hovered); 
        }}> 
            <img src="/CocodeSidebarLogo.png"></img>
        </LogoContainer>
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
            History 
        </HistoryContainer>
        <TopTutorsContainer clicked={clicked === 4} onClick={() =>{
            setClicked(4); 
        }}>
            <img src="/TopTutorsIcon.png"></img>
                Top Tutors 
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
        <BecomeTutorContainer hoveredtwo={hoveredtwo} onMouseEnter={() =>{
            setHoveredtwo(!hoveredtwo);
        }} onMouseLeave={() =>{
            setHoveredtwo(!hoveredtwo); 
        }}> 
            Become A Tutor 
        </BecomeTutorContainer>
    </SidebarContainer>
}

Sidebar.defaultProps = {
}

export default Sidebar; 