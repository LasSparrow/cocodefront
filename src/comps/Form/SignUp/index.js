import React from 'react'; 
import styled from "styled-components";
import InPut from "../Input";
import Filter from "../../Filter";

const FormContainer = styled.div`
    max-width:455px;
    height:auto;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 25px;
    margin-bottom:10px;
`;

const InputBox = styled.div`
    div{
        display:inline-flex;
        flex-direction:column;
        margin-top: 10px;
    }
`;

const Choose = styled.div`
    display: flex;
    margin-top: 25px;
    font-size: 18px;
    align-content:justify;
    label{
        margin-right:20px;
    }
`;

const SignupForm = ({title}) => {
    return <FormContainer>
            <Title>
                <div>
                    <b>{title}</b>
                </div>
            </Title>
        <InputBox> 
            <div>
                <InPut />
            </div>
            <div>
                <InPut label="Email" type="email" ph="Email"/>
            </div>
            <div>
                <InPut label="Password" type="password" ph="Password"/>
            </div>
        </InputBox>
        <Choose>
            <label>You are a:</label>
            <div>
                <Filter FilterName="Student" text1="Tutor"/>
            </div>
        </Choose>
    </FormContainer>
}

SignupForm.defaultProps = {
    title: "Get started with a free account!",
    
}

export default SignupForm; 