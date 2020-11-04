import React, {useState, Component} from 'react'; 
import styled from 'styled-components'; 
import AccountBox from '../Account'; 
import PRTab from '../PendingRequests';
import USTab from '../UpcomingSessions'; 
import FSTab from '../FreeSession'; 


const RightSidebarContainer = styled.div`
    max-width: 363px; 
    max-height: 1024px; 
    display: flex; 
    flex-direction: column;
    margin-left: 20px;
`; 

const AccountBoxContainer = styled.div`
    margin: 20px 0px 60px 0px; 
`; 

const PRTabContainer = styled.div`
    margin: 0px 0px 40px 0px; 
`; 

const USTabContainer = styled.div`
    margin: 0px 0px 40px 0px; 
`;

const FSTabContainer = styled.div`
    margin: 0px 0px 75px 0px; 
`;

const RightSidebar = () => {
    return <RightSidebarContainer>
            <AccountBoxContainer>
                <AccountBox /> 
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