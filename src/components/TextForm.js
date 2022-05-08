import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = () => {
        let downText = Text.toLowerCase();
        setText(downText)
    }
    const handleClearClick = () => {
        let clearText = ''
        setText(clearText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleInChange = (event) => {
        setText(event.target.value)
    }
    const handleClearChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState("")
  return (
    <>
    <div className = "container">
      <div className="mb-3" >
        <h1 className="my-3"  style = {{color: props.mode === "dark" ? "white" : "black"}}>{props.heading}</h1>
        <textarea placeholder = "Enter text here..." className="form-control" style = {{color: props.mode === "dark" ? "white" : "black", backgroundColor: props.mode === "dark" ? "grey" : "white"}} onChange = {handleInChange,handleOnChange,handleClearChange}  value = {Text} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" onClick = {handleUpClick} className="btn btn-warning mx-2">Convert to Upper Case</button>
      <button type="button" onClick = {handleDownClick} className="btn btn-dark mi-1 mx-2">Convert to Lower Case</button>
      <button type="button" onClick = {handleClearClick} className="btn btn-info mx-2">Clear</button>

    </div>
    <div className="container my-3" style = {{color: props.mode === "dark" ? "white" : "black"}} >
       <h1>Your Text summary</h1>
       <p>{Text.split(" ").length} words, {Text.length} characters</p>
       <p>{(0.008 * Text.split(" ").length)} Minutes read</p>
       <h2> Preview</h2>
       <p>{Text === '' ? "Enter your text to preview" : Text}</p>
    </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter your text below",
};
