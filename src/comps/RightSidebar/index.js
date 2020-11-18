import React, {useState, Component} from 'react'; 
import styled from 'styled-components'; 
import AccountBox from '../Account'; 
import PRTab from '../PendingRequests';
import USTab from '../UpcomingSessions'; 
import FSTab from '../FreeSession'; 

const RightSidebarContainer = styled.div`
    margin: 0;
    width: 300px; 
    height: 100vh; 
    display: flex; 
    flex-direction: column;
    background: white;
    position: fixed;
    right: 0;
    align-items: center;
    overflow: auto;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 10vh;
        flex-direction: row-reverse;
        margin-top: 12vh;
    }
`; 

const AccountBoxContainer = styled.div`
    margin: 20px 0px 20px 0px; 
`; 

const PRTabContainer = styled.div`
    margin: 0px 0px 20px 0px; 

    @media (max-width: 1024px) {
        margin: 0;
    }
`; 

const USTabContainer = styled.div`
    margin: 0px 0px 20px 0px; 

    @media (max-width: 1024px) {
        margin: 0;
    }
`;

const FSTabContainer = styled.div`
    margin: 0px 0px 75px 0px; 

    @media (max-width: 1024px) {
        display: none;
    }
`;

const RightSidebar = ({name, img}) => {
    return <RightSidebarContainer>
            <AccountBoxContainer>
                <AccountBox name={name} src={img}/> 
            </AccountBoxContainer>
            <PRTabContainer>
                <PRTab />
            </PRTabContainer>
            <USTabContainer>  
                <USTab />
            </USTabContainer>  
            <FSTabContainer>
                <FSTab />
            </FSTabContainer>
    </RightSidebarContainer>
}

RightSidebar.defaultProps = {

}

export default RightSidebar; 