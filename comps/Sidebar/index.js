import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const SidebarContainer = styled.div`
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
    color: #8DA1B5; 
    cursor: pointer;
`;

const ExploreContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    color: #8DA1B5;
    cursor: pointer;
`;

const HistoryContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    color: #8DA1B5;
    cursor: pointer;
`;

const TopTutorsContainer = styled.div`
    max-width: 150px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    color: #8DA1B5;
    img {
        margin-left: 20px; 
    }
    cursor: pointer;
`;

const SupportContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    color: #8DA1B5;
    cursor: pointer;
`;

const SettingsContainer = styled.div`
    max-width: 130px; 
    max-height: 20px; 
    display: inline-flex; 
    align-items: center; 
    margin-top: 40px; 
    color: #8DA1B5;
    cursor: pointer;
`;

const BecomeTutorContainer = styled.div`
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
`;

const Sidebar = () => {
    return <SidebarContainer> 
        <LogoContainer>
            <img src="/CocodeSidebarLogo.png"></img>
        </LogoContainer>
        <ProfileContainer>
            <img src="/ProfileIcon.png"></img>
            Profile 
        </ProfileContainer>
        <ExploreContainer>
            <img src="/ExploreIcon.png"></img>
            Explore 
        </ExploreContainer>
        <HistoryContainer>
            <img src="/HistoryIcon.png"></img>
            History 
        </HistoryContainer>
        <TopTutorsContainer>
            <img src="/TopTutorsIcon.png"></img>
                Top Tutors 
        </TopTutorsContainer>
        <SupportContainer>
            <img src="/SupportIcon.png"></img>
            Support
        </SupportContainer>
        <SettingsContainer>
            <img src="/SettingsIcon.png"></img>
            Settings
        </SettingsContainer>
        <BecomeTutorContainer>
            Become A Tutor 
        </BecomeTutorContainer>
    </SidebarContainer>
}

Sidebar.defaultProps = {

}

export default Sidebar; 