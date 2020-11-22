//import logo from './logo.svg';
//import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link,} from "react-router-dom"; 
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
import EditAccount from './pages/EditAccount'; 
import TutorProfile from './pages/TutorProfile';
import SessionRequested from './pages/SessionRequested'; 
import Page from './pages/CollabSpace';

//global styles
import './App.scss'
import StudentSessionRequested from './comps/Calendar';


function App() {
  return (
    <Router>
          <Switch>
            <Page/>
            <Route path="/" exact component={SignInPage} />
            <Route path="/SignUp" component={SignUpPage} />
            <Route path="/Explore" component={ExplorePage} />
            <Route path="/BecomeATutor" component={BecomeATutor} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/FindATutor" component={FindATutor} />
            <Route path="/TutorProfile" component={TutorProfile} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/MySession" component={MySession} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/TermsOfService" component={TermsOfService} />
            <Route path="/SessionRequested" component={SessionRequested} />
            <Route path="/EditAccount" component={EditAccount} />
            <Route path="/StudentSessionRequested" component={StudentSessionRequested} /> 
          </Switch>
    </Router>
  );
}

export default App;
