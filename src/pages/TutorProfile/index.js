import React from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';

const UserProfilePage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const Content = styled.div`
    max-width: 50vw;
    min-height: 85vh;
    margin: auto;
    margin-left: 20;
    text-align: start;
    display: flex;
    flex-direction: column;
`;

export default function ContactUs() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }
  
  return (
    <UserProfilePage>
      <Sidebar />
      <Content>
      
      </Content>
      <RightSidebar />
  </UserProfilePage>
  )
}