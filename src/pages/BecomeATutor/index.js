import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import ApplyTutor from '../../comps/Form/ApplyTutor';

const BecomeTutorPage = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:flex-start;
`;

const Form = styled.div`
    width:60%;
    text-align:left;
    margin-left:25%;
    margin-top:5%;
`;

export default function Home() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <BecomeTutorPage>
        <Sidebar />
        <Form>
            <ApplyTutor />
        </Form>
    </BecomeTutorPage>
  }