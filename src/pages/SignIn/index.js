import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components'; 
import SignIn from '../../comps/Form/SignIn'
import LOGO from '../../public/logo.svg'
import loginUser from '../../api/auth/loginUser'; 
import {useHistory} from 'react-router-dom';

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
  const history = useHistory();
  console.log(history);
  const HandleBoxClick = async (email, pass)=>{
    const data = await loginUser(email, pass);
  
    if(data.access_token){
      history.push("/explore")
    } 
    
    console.log(data)
  }
  
  return <PageCon>
      <Logo src={LOGO} />
      <SignIn onClick={HandleBoxClick}/>
  </PageCon>
}