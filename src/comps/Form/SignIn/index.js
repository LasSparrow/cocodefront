import React from 'react'; 
import styled from "styled-components";
import Button from "../../Button";
import {Link} from 'react-router-dom'; 
import axios from 'axios'; 
import loginUser from '../../../api/auth/loginUser'; 

const InputBox = styled.div`
    width: 700px;
    height: 730px;
    background-color:#173F5F;
    box-sizing:border-box;
    color: white;
    display: flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    padding-top: 10%;
`;

const TitleBox = styled.div`
    width:auto;
    height:auto;
    display:flex;
    margin-bottom: 40px;
    font-size: 36px; 
`;

const InputForm = styled.p`
    width:auto;
    height:auto;
    font-size: 18px;
    margin-bottom: 20px;
    div{
        display:flex;
        flex-direction:column;
        margin-bottom: 40px;
        text-align:left;
        input{
            width: 535px;
            height: 70px;
            background-color:#D6D6D6;
            margin-top:10px;
            border:hidden;
        }
    } 
`

const FormSubtitle = styled.p`
    font-size: 16px;
    margin-left: 12em;
    a {
        color: #018EA2;
        margin-left: 10px;
    }
`;

const SigninBut = styled.div`
    width:auto;
    height:auto;
`;

const HandleLogin = async (e) => {
    e.preventDefault(); 
    const data = await 
  loginUser("mail@parsa.pro", "123456");
  
  
  console.log(data)

}

const SigninForm = () => {
    return <InputBox> 
            <TitleBox>
                <div>
                    Sign In
                </div>
                <FormSubtitle>
                    Don't have an account? <a href="url">Sign Up</a>
                </FormSubtitle>
            </TitleBox>
            <InputForm>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>  
            </InputForm>
                <SigninBut>
                        <Button text="Sign In" onClick={HandleLogin} />
                </SigninBut>        
    </InputBox>
}

SigninForm.defaultProps = {
    
}

export default SigninForm; 
