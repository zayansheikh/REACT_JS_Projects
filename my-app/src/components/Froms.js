import React from 'react'
import {useState} from 'react'

export default function Froms(props) {
  const upClick = ()=>{
    // console.log("event is clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upper case", "success");
  }
  const lwClick = ()=>{
    // console.log("event is clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convert to lower case", "success");
  }
  const clClick = ()=>{
    // console.log("event is clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert("Text is clear", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("onChange")
    setText(event.target.value)
  }
  const handleTitleclick = () => {
    let camelCaseText = text.split(' ').map(function (word, index) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setText(camelCaseText);
    props.showAlert("Convert first letter to upper case", "success");
};
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Listen your message", "success");
}
// It is targetted by the button 'speak':
const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert("File is downloaded", "success");
}
const copyText = () =>{
  var text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert("Text is copied", "success");
}

const[text, setText] = useState("");
  


  return (
    <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={upClick}>Convert to uppercase</button>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={lwClick}>Convert to lowercase</button>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={clClick}>Clear text </button>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={handleTitleclick}>Capital first letter</button>
          <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={downloadTxtFile}>Download text</button>
          <button className="btn btn-primary p-2 my-4 m-2" onClick={copyText}>Copy text</button>
        </div>
        <div className="container">
          <h1>Your Text Summry</h1>
          <p>Total word in your para is <b><u>{text.split(" ").filter((element)=>{return element.length!==0}).length}</u></b></p>
          <p>Total character in your para is <b><u>{text.length}</u></b></p>
          <p>Minimum time to read this <b><u>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</u></b> </p>
          <h2>Prewiew</h2>
          <p>{text.length>0?text:"Enter some text above to preview it."}</p>
        </div>
    </div>
  )
}


