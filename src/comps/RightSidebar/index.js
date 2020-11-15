import React, {useState, Component} from 'react'; 
import styled from 'styled-components'; 
import AccountBox from '../Account'; 
import PRTab from '../PendingRequests';
import USTab from '../UpcomingSessions'; 
import FSTab from '../FreeSession'; 

const AllContainers = styled.div`
//clicked prop css here
`;

const RightSidebarContainer = styled(AllContainers)`
    width: 300px; 
    height: 100vh; 
    display: flex; 
    flex-direction: column;
    padding: 0px 5px 0px 5px;
    margin-left: 20px;
    background: white;
    position: fixed;
    right: 0;
    align-items: center;
`; 

const AccountBoxContainer = styled.div`
    margin: 20px 0px 20px 0px; 
`; 

const PRTabContainer = styled.div`
    margin: 0px 0px 20px 0px; 
`; 

const USTabContainer = styled.div`
    margin: 0px 0px 20px 0px; 
`;

const FSTabContainer = styled.div`
    margin: 0px 0px 75px 0px; 
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