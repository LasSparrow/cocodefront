import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import Title from '../../comps/Title';
import Input from '../../comps/Form/Input';
import Button from '../../comps/Button';

const FreeSessionPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
`;

const Content = styled.div`
    margin: auto;
    max-width: 40vw;
    height: 90vh;
    padding: 20px 40px 20px 40px;
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    text-align: start;
`;

const Center = styled.div`
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

const Text = styled.div``;

export default function FreeSession() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <FreeSessionPage>
        <Sidebar />
        <Center>
            <Title title="Get a Free Session"/>
            <Content>
                <Input label="Full Name" height="30px" fontSize="11pt" fontWeight="600" ph="Full Name"/>  
                <Input label="School Email" height="30px" fontSize="11pt" fontWeight="600" ph="School Email"/> 
                <Input label="What languages/programs are you using?" height="30px" fontSize="11pt" fontWeight="600" ph="Full Name"/>
                <Button text="Submit"/>
                <Text>By clicking submit you agree to receive regular email updates from CoCode's news subscription. You will receive a redemption code in an email shortly. The code can be used to waive the fee of a 30 minute session with any tutor. </Text>
            </Content>
        </Center>
        <RightSidebar />
    </FreeSessionPage>
  }