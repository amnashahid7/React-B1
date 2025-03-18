
import './App.css'
import CardData from './components/CardData'

function App() {


  return (
    <>

      <h1 className="text-danger">Hello, Bootstrap in React!</h1>
      <div className="container d-flex justify-content-between">
        <CardData title="IPhone" />
        <CardData />
        <CardData />
      </div>
    </>
  )
}

export default App
