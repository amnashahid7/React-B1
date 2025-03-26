import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const getName = useCallback(() => {
    return "hello";
  }, [count])

  return (
    <>
      <Navbar name="use Callback Hook" count={count} getName={getName} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
          setCount2((count2) => count2 + 2);
          console.log(getName());

        }
        }>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
