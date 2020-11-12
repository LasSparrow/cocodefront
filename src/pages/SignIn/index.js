import React, {useState} from 'react';
import styled from 'styled-components'; 
import SignIn from '../../comps/Form/SignIn'

const PageCon = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
`;
const Logo = styled.div`
  width:50%;
  height:50%;
  img{
    width:500px;
    height:500px;
  }
`;

export default function Home() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }
  var logo = require('../../public/CocodeSidebarLogo.png')

  return <PageCon>
      <Logo>
        <img src='../../public/CocodeSidebarLogo.png'/>
      </Logo>
      <div>
        <SignIn />
      </div>
  </PageCon>
}