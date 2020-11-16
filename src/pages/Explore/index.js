import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from '../../comps/Sidebar';
import RightSidebar from '../../comps/RightSidebar';
import ExploreBox from '../../comps/Explore'; 
import ExploreHTML from '../../comps/HTMLExplore';
import ExploreCSS from '../../comps/CSSExplore'; 
import ExplorePython from '../../comps/PythonExplore'; 
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 

const ExplorePageContainer = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
    padding-bottom: 10px; 
`;

const ContentTop = styled.div`
    max-width: 50vw; 
    max-height: 50vh; 
    display: flex;
    margin: auto;
    margin-top: 25px;
    margin-left: 520px;
    margin-bottom: -45px;
    border-radius: 30px;
`;

const ContentBottom = styled.div`
max-width: 50vw; 
max-height: 50vh; 
display: flex;
margin: auto;
margin-top: 25px;
margin-left: 520px;
margin-bottom: 25px;
border-radius: 30px;
`;

export default function ExplorePage() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <Router>
  <ExplorePageContainer>
      <Sidebar />
    <ContentTop>
        <ExploreHTML />
        <ExploreBox /> 
    </ContentTop>
    <ContentBottom>
      <ExploreCSS /> 
      <ExplorePython />
    </ContentBottom>
    <RightSidebar />
  </ExplorePageContainer>
  </Router>
}