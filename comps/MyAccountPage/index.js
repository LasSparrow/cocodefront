import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Sidebar from '../Sidebar';
import EditProfPic from '../EditProfPic';

const MyAccountPage = styled.div`
`;

const MyAccountPage = () => {

    return <MyAccountPageContainer>
        <Sidebar />
        <EditProfPic />
    </MyAccountPageContainer>
}

MyAccountPage.defaultProps = {
}

export default MyAccountPage; 