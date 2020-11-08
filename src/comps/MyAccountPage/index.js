import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Sidebar from '../Sidebar';
import EditProfPic from '../EditProfPic';

const MyAccountPageContainer = styled.div`
    display: flex;
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