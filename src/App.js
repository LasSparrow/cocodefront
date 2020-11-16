//import logo from './logo.svg';
//import './App.css';
import Page from './pages/FAQ';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom"; 

//global styles
import './App.scss'

function App() {
  return (
    <div className="App">
        <Page />
    </div>
  );
}

export default App;
