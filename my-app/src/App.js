import './App.css';
import Navbar from './components/Navbar';
import Froms from './components/Froms';
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  //eslint-disable-next-line
  const [alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert ("Dark mode is enable", "success")
    
    }
    else{
      setmode  ('light')
      document.body.style.backgroundColor = 'white'
      showAlert ("Dark mode is disable", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar tittle="TextUtils" abouttext="About Text" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Froms showAlert={showAlert} mode={mode} heading="Please write some text about us"/>
    {/* <div className="container m-5">
    </div> */}
    {/* <Routes>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/">
          </Route>
    </Routes>
    </Router> */}
    {/* Ctrl+Fn short cut for Change class to class name */}
    </>
  );
}

export default App;
