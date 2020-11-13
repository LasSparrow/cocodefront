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
    padding-left:10%;
`;

const Photo = styled.div`
    width:50%;
    padding:100px;
    img{
    width:766px;
    height:805px;
  }
`;

export default function Home() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <PageCon>
      <Form>
            <SignUp />
      </Form>
      <Photo>
        <img src='../../public/SignupImg.png.png'/>
      </Photo>
  </PageCon>
}