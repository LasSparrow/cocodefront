import React from 'react'; 
import styled from "styled-components";
import InPut from "../Input";
import Filter from "../../Filter";
import LOGO from '../../../public/logo.svg';

const FormContainer = styled.div`
    height:auto;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    align-content:center;  
    align-items:center;
    padding:20px 40px 20px 40px;     
`

const Logo = styled.img`
    margin-bottom:30px;
    width:224px;
    height:106px;
`

const Title = styled.div`
    font-size: 25px;
    margin-bottom:5px;
`

const InputBox = styled.div`
    div{
        display:flex;
        flex-direction:column;
        margin-top: 7px;
        text-align:left;
    }
`
const SignupForm = ({title}) => {

    return (
        <FormContainer>
                <Logo src={LOGO}/>
                <Title>
                    <div>
                        <b>{title}</b>
                    </div>
                </Title>
            <InputBox> 
                <div>
                    <InPut abel="Username" type="text" ph="Username" />
                </div>
                <div>
                    <InPut label="Email" type="email" ph="Email"/>
                </div>
                <div>
                    <InPut label="First Name" type="text" ph="First Name"/>
                </div>
                <div>
                    <InPut label="Last Name" type="text" ph="Last Name"/>
                </div>
                <div>
                    <InPut label="Password" type="password" ph="Password"/>
                </div>
            </InputBox>
            
        </FormContainer>
    )
}

SignupForm.defaultProps = {
    title: "Get Started With A Free Account!",
    
}

export default SignupForm; 