
import { InputBox, SearchBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { useState } from "react";


function App() {
  // const data= useCurrencyInfo("pkr");
  // console.log("data",data);
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("pkr");

  const currencyInfo= useCurrencyInfo(from);
  console.log("currencyInfo",currencyInfo);
  
  // const options=Object.keys(currencyInfo.from);
  const options = Object.keys(currencyInfo);
console.log("options",options);

const swap=()=>{
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
}

const convert=()=>{
setConvertedAmount(amount*currencyInfo[to])
}

  return (
    <>
   <h1>Currency converter</h1>
   <div className="form-wrapper">
        <div className="form-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            convert();
            }}
          >
            <div className="input-group">
              <InputBox
                label="From"
                amount={amount}
                currenyOptions={options}
            onAmountChange={(value)=> setAmount(value)}
            onCurrencyTypeChange={(currency)=>setFrom(currency)}
            selectedCurrency={from}
              />
            </div>

            <div className="swap-button-container">
              <button
                type="button"
                className="swap-button"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="input-group">
              <InputBox
                  label="To"
                  amount={convertedAmount}
                  currenyOptions={options}
              onCurrencyTypeChange={(currency)=>setTo(currency)}
              selectedCurrency={to}
              amountDisable={true}
                />
               
            
            </div>

            <button type="submit" className="submit-button">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
