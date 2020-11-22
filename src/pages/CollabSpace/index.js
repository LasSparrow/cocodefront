import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';

const CollabSpacePage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    background: #F5F5FB;
`;

const Webcam1 = styled.div``;

const Webcam2 = styled.div``;

const Webcams = styled.div``;

const Workspace = styled.div``;

export default function CollabSpace({url}) {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <CollabSpacePage>
    <Sidebar />
    <Webcams>
        <Webcam1 />
        <Webcam2 />
    </Webcams>
    <Workspace>
        <iframe src={url} title="Collaborative Workspace"></iframe>
    </Workspace>
  </CollabSpacePage>
}

CollabSpace.defaultProps = {
  url: ""
}