import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React,{useState} from 'react';
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
  }
  const [Mode,setMode] = useState('light')
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>  
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <About/> */}
    <div className="container">
      <TextForm showAlert={showAlert} mode={Mode} heading="Enter the text to analyse"/>
    </div>
    
    </>
  );
}

export default App;
