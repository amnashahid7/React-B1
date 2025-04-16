
import { InputBox, SearchBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
  const data= useCurrencyInfo("pkr");
  console.log(data);
  

  return (
    <>
   <h1>Currency converter</h1>
   <InputBox/>
   <SearchBox/>
    </>
  )
}

export default App
