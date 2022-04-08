import { useState, useMemo } from 'react';

function ShowInput() {
  const [text, setText] = useState("123");
  const [val, setVal] = useState("");

  const changeText = (e) => {
    console.log("text");
    setText(e.target.value);
  }

  const changeVal = (e) => {
    console.log("val");
    setVal(e.target.value);
  }
  
  const textAll = getText(text)

  return(
    <div>
        <input value={text} onChange={changeText} />
        <br />
        <input  value={val}  onChange={changeVal} />
        <p>{textAll}</p>
    </div>
  );
}

function getText(text){
  return text.toLowerCase();
}

export default ShowInput;