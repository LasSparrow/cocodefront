import React from 'react';
import styled from 'styled-components'; 
import SignUp from '../../comps/Form/SignUp';
import SignupImg from '../../public/SignupImg.png';
import Button from '../../comps/Button';

const PageCon = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
  align-content:center;
`;

const Form = styled.div`
    width:50%;
    height:auto;
`;

const Submit = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items:center;
    a {
        color: #018EA2;
        margin-left: 10px;
    }
`;

const Photo = styled.img`
    width:50%;
    height:auto;
`;

export default function SignUpPage() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <PageCon>
      <Form>
          <SignUp />
          <Submit>
            <Button text="Sign Up"/>
            <div>
                Already have an account? <a href="url">Sign in</a>
            </div>
        </Submit>
      </Form>
      <Photo src={SignupImg} />
  </PageCon>
}