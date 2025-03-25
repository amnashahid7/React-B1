import React, { useRef, useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();


  const getNumValue = () => {
    let one = inputOne.current;
    console.log(one);
    console.log("number value", value);
    console.log(inputOne.current);
    inputOne.current.style.width = "200px";
    one.style.height = "200px"


  }
  const getTextValue = () => {
    console.log("text value", value);
    console.log(inputTwo.current);
  }
  return (
    <>
      <input
        ref={inputOne}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "50px" }}
      />
      <input
        ref={inputTwo}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => getNumValue()}>get number</button>
      <button onClick={() => getTextValue()}>get text</button>
    </>
  )
}

export default App;
