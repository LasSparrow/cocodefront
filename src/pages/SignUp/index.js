import React, {useState} from 'react';
import styled from 'styled-components'; 
import SignUp from '../../comps/Form/SignUp';

const PageCon = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
`;

const Form = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;

`;

const Photo = styled.div`
  width:50%;
  img{
    width:766px;
    height:805px;
  }
`;

const Logo = styled.div`
    width:50%;
    margin-bottom:50px;
    img{
        width:224px;
        height:106px;
    }
`;

export default function Home() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <PageCon>
      <Form>
        <Logo>
            <img src="../../public/CocodeSidebarLogo.png"/>
        </Logo>
        <div>
            <SignUp />
        </div>
      </Form>
      <Photo>
        <img src='../../public/SignupImg.png.png'/>
      </Photo>
  </PageCon>
}