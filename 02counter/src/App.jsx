import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let courseName = "React";
  // let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    // console.log("clicked", counter);

  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>{courseName}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;
