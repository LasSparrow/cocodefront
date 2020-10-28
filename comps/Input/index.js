import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const InputBox = styled.div`
    max-width: 700px;
    max-height: 730px;
    background-color:${props=>props.bgColor ? props.bgColor: "#173F5F"};
    color: ${props=>props.fontColor ? props.fontColor: "white"};
    div{
        align-item: center;
        align-content:center;
        padding: 20px;
        margin-left: 30px;
    }
`;

const Input = styled.div`
    margin-left: 60px;
`;

const TitleBox = styled.div`
    display: flex;
    align-item: center;
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
    margin-top: 40px;
    margin-left: 40px;
    a {
        color: #018EA2;
    }
`;

const SigninForm = ({label, color, placeholder}) => {
    return <InputBox>
        <div>    
            <TitleBox>
                <FormTitle>
                    Sign In
                </FormTitle>
                <FormSubtitle>
                    Don't have an account? <a href="url">Sign Up</a>
                </FormSubtitle>
            </TitleBox>
            <Input>
                <InputLabel color={color}>
                    Eamil
                </InputLabel>
                <input type="text" placeholder={placeholder}/>
                <InputLabel color={color}>
                    Password
                </InputLabel>
                <input type="text" placeholder="Password"/>
            </Input>
        </div>
    </InputBox>
}

SigninForm.defaultProps = {
    label: "Email",
    placeholder: "Email"
}

export default SigninForm; 
