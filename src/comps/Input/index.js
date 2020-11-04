import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Button from "../../Button";

const InputBox = styled.div`
    max-width: 500px;
    max-height: 730px;
    background-color:#173F5F;
    color: white;
    input{
        width: 350px;
        height: 30px;
    }
`;

const Input = styled.div`
    align-item: center;
    align-content:center;
    padding: 60px 20px 60px 20px;
    margin-left: 10%;
`;

const TitleBox = styled.div`
    display: flex;
    align-item: center;
    margin-bottom: 50px;
`;

const InputLabel = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
`
const FormTitle = styled.div`
    font-size: 36px;
`;

const FormSubtitle = styled.p`
    font-size: 16px;
    margin-left: 40px;
    a {
        color: #018EA2;
        margin-left: 10px;
    }
`;

const SigninForm = () => {
    return <InputBox>
        <Input>    
            <TitleBox>
                <FormTitle>
                    Sign In
                </FormTitle>
                <FormSubtitle>
                    Don't have an account? <a href="url">Sign Up</a>
                </FormSubtitle>
            </TitleBox>
                <InputLabel>
                    Eamil
                </InputLabel>
                <input type="email" placeholder="Email"/>
                <InputLabel>
                    Password
                </InputLabel>
                <input type="password" placeholder="Password"/>
        </Input>
        <div><Button text="Sign Up"/></div>
    </InputBox>
}

SigninForm.defaultProps = {
    
}

export default SigninForm; 
