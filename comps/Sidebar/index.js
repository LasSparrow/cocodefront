import React from 'react'; 
import styled from "styled-components"

const SidebarContainer = styled.div`
    max-width: 272px; 
    max-width: 1024px; 
    background-color: #FFFFFF; 
`;

const Sidebar = () => {
    return <SidebarContainer> 
        Hey
    </SidebarContainer>
}

Sidebar.defaultProps = {

}

export default Sidebar; 