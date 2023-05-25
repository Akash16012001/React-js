import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to UpperCase","success")
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.SpeechSynthesis.speak(msg);
  }
  const handleOnChange = ()=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [text,setText] = useState("Enter text here")
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'white',color:props.mode==='dark'?'black':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-warning mx-1" onClick={speak}>Speak</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
    
  )
}
