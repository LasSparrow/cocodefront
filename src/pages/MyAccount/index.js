import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import EditProfPic from '../../comps/EditProfPic';
import AccountEdit from '../../comps/AccountEdit';

const MyAccountPage = styled.div`
  display: flex;
`;

export default function MyAccount() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <MyAccountPage className="home">
    <Sidebar />
    <EditProfPic />
    <AccountEdit />
  </MyAccountPage>
}