import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import Session from '../../comps/Session';

const MysessionPage = styled.div`
  width:100vw;
  height:100vh;
  display:flex;

`;

const SessionList = styled.div`
  
`;

export default function Home() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <MysessionPage>
        <Sidebar />
        <SessionList>
          My Session
          <Session />
          <Session />
          <Session />
          <Session />
        </SessionList>
    </MysessionPage>
  }