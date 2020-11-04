import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const FormContainer = styled.div`
    max-width:455px;
    height:auto;
    box-sizing:border-box;
`;

const Title = styled.div`
    font-size: 25px;
    img{
        Width:224px;
        Height:106px;
    }
`;

const Input = style.div`
    font-size: 18px;
    input{
        width: 385px;
        height: 50px;
    }
`;

const SignupForm = () => {
    return <FormContainer>
            <Title>
                <div>
                    <img src="/CocodeSidebarLogo.png" />
                </div>
                <div>
                    Get started with a free account!
                </div>
            </Title>
        <Input> 
            <label>Username</label>
            <input type="text" placeholder="Username"/>
            <label>Eamil</label>
            <input type="email" placeholder="Eamil"/>
            <label>Password</label>
            <input type="password" placeholder="Password"/>
        </Input>
    
        <label>Yo are a:</label>

    </FormContainer>
}

SignupForm.defaultProps = {
    
}

export default SignupForm; 