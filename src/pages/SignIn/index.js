import React, {useState} from 'react';
import styled from 'styled-components'; 
import SignIn from '../../comps/Form/SignIn'
import LOGO from '../../public/logo.svg'

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
    width:495px;
    height:235px;
  }
`;

export default function SignInPage() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return (
    <PageCon>
      <Logo >
        <img src={LOGO}/>
      </Logo>
      <div>
        <SignIn />
      </div>
    </PageCon>
  )
}