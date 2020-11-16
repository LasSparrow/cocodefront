import React, {useState} from 'react';
import styled from 'styled-components'; 
import SignUp from '../../comps/Form/SignUp';
import SignupImg from '../../public/SignupImg.png';
import Button from '../../comps/Button';

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

const Submit = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    margin-top:60px;
    a {
        color: #018EA2;
        margin-left: 10px;
    }
`;

const Photo = styled.div`
    width:50%;
    padding:90px;
    img{
    width:766px;
    height:805px;
  }
`;

export default function SignUpPage() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <PageCon>
      <Form>
          <SignUp />
          <Submit>
            <div><Button text="Sign Up"/></div>
            <div>
                Already have an account? <a href="url">Sign in</a>
            </div>
        </Submit>
      </Form>
      <Photo>
        <img src={SignupImg}/>

      </Photo>
  </PageCon>
}