import React, {useState} from "react";
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
      if (Mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "grey";
        showAlert("Dark mode has been enabled" , "success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled" , "success")
      }
  }
  return (
    <>
    <Navbar mode = {Mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    <TextForm showAlert = {showAlert} mode = {Mode} />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
