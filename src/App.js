import React, {useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enable", "success");
    }

    else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");
    }
  }

  return (
    <>
    <Router>
          <Navbar title="Chithraksh TextUtils" aboutTxt="About" mode={mode} handleModeChange={handleModeChange} btnText={btnText} />
          <Alert alert={alert} />
          {/* <TextForm heading="Enter The Text" mode={mode} showAlert={showAlert} /> */}
          {/* <About/> */}
        <div className="container">
        <Switch>
          <Route exact path="/about">
            <About  handleModeChange={handleModeChange} mode={mode} />
          </Route>

          <Route exact path="/">
          <TextForm heading="Enter The Text" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
           
        </div>
        </Router>
    </>

  );
}

export default App;
