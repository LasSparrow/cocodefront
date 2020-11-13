import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import Session from '../../comps/Session';

const SessionList = styled.div`

`;

export default function Home() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }
  
    return <SessionList>
        <Sidebar />
          My Session
          <Session />
          <Session />
          <Session />
          <Session />
        </SessionList>
  }