import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';

const ContactUsPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const Content = styled.div`
    margin: auto;
    margin-top: 25px;
    margin-left: 300px;
    margin-right: 40px;
    margin-bottom: 25px;
    padding: 20px 40px 20px 40px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
`;

export default function ContactUs() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <ContactUsPage>
    <Sidebar />
    <Content>

    </Content>
    <RightSidebar />
  </ContactUsPage>
}