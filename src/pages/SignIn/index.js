import axios from 'axios';
import React from 'react';
import styled from 'styled-components'; 
import SignIn from '../../comps/Form/SignIn'
import LOGO from '../../public/logo.svg'
import loginUser from '../../api/auth/loginUser'; 

const PageCon = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
`;
const Logo = styled.img`
  width:30%;
  height:30%;
  padding:10%;
`;

export default function SignInPage() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }
  
  return <PageCon>
      <Logo src={LOGO} />
      <SignIn />
  </PageCon>
}