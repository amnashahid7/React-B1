import { useEffect, useState } from "react"


function App() {
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(true);
  useEffect(() => {
    console.log("component Mounted");
    return () => {
      console.log("componentg unMounted");

    }



  }, [state]);

  useEffect(() => {
    console.log("Component on updation", counter);
    return () => {
      console.log('return from the updated component',counter);

    }
  }, [counter])
  return (
    <>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <h1>{counter}</h1> : ""}
      <button onClick={() => setCounter(counter + 1)}>Click ME to increase the count</button>
    </>
  )
}

export default App
