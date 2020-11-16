import React, {useState} from 'react';
import styled from "styled-components";
import Sidebar from './comps/Sidebar';
import RightSidebar from './comps/RightSidebar';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import ExplorePage from "./pages/Explore"; 
import BecomeATutor from './pages/BecomeATutor';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ'; 
import FindATutor from './pages/FindATutor';
import MyAccount from './pages/MyAccount';
import MySession from './pages/MySession'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsOfService from './pages/TermsofService';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';



//global styles
import './App.scss'


function App() {
  return (
    <Router>
      <Sidebar /> 
      <Switch>
      <Route path="/" exact component={SignInPage} />
      <Route path="/SignUp" component={SignUpPage} />
      <Route path="/Explore" component={ExplorePage} />
      <Route path="/BecomeATutor" component={BecomeATutor} />
      <Route path="/ContactUs" component={ContactUs} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/FindATutor" component={FindATutor} />
      <Route path="/MyAccount" component={MyAccount} />
      <Route path="/MySession" component={MySession} />
      <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
      <Route path="/TermsOfService" component={TermsOfService} />
      </Switch>
      <RightSidebar />
    </Router>
  );
}

export default App;
