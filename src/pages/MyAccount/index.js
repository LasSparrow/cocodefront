import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import EditProfPic from '../../comps/EditProfPic';
import AccountEdit from '../../comps/AccountEdit';

const MyAccountPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: #F5F5FB;
`;

const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 50px;
`;

const ProfPicContainer = styled.div`
  position: relative;
  margin: auto;
  left: -150px;
`;

const NameComp = styled.h1`
  position: relative;
  margin: auto;
  top: -120px;
  left: 260px;
`;

export default function MyAccount({name}) {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <MyAccountPage className="home">
    <Sidebar />
    <Content>
      <ProfPicContainer>
        <EditProfPic />
        <NameComp>{name}</NameComp>
      </ProfPicContainer>
      <AccountEdit />
    </Content>
  </MyAccountPage>
}

MyAccount.defaultProps = {
  name: "Adam Jameson"
}