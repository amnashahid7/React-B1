import React, {useId} from "react";

const InputBox = ({
    label,
    className="",
    amount,
    onAmountChange,
    selectedCurrency="usd",
    onCurrencyTypeChange,
    currenyOptions=[],
    amountDisable=false,
    currencyTypeDisable=false,
}) => {
  const containerStyle = {
    backgroundColor: "white",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    display: "flex",
  };

  const halfWidthStyle = {
    width: "50%",
  };

  const labelStyle = {
    color: "rgba(0, 0, 0, 0.4)",
    marginBottom: "0.5rem",
    display: "inline-block",
  };

  const inputStyle = {
    outline: "none",
    width: "100%",
    backgroundColor: "transparent",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
  };

  const rightBoxStyle = {
    ...halfWidthStyle,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    textAlign: "right",
  };

  const paragraphStyle = {
    color: "rgba(0, 0, 0, 0.4)",
    marginBottom: "0.5rem",
    width: "100%",
  };

  const selectStyle = {
    borderRadius: "0.5rem",
    padding: "0.25rem 0.25rem",
    backgroundColor: "#f3f4f6",
    cursor: "pointer",
    outline: "none",
  };

  const inputID= useId();
  return (
    <div style={containerStyle} className={className}>
      <div style={halfWidthStyle}>
        <label htmlFor={inputID}  style={labelStyle}>
          {label}
        </label>
        <input
        id={inputID}
        value={amount}
        onChange={(e)=>(onAmountChange(Number(e.target.value)))}
          style={inputStyle}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
        
        />
      </div>
      <div style={rightBoxStyle}>
        <p style={paragraphStyle}>Currency Type</p>
        <select
          style={selectStyle}
          value={selectedCurrency}
          disabled={currencyTypeDisable}
          onChange={(e)=>onCurrencyTypeChange(e.target.value)}
       
        >
      
          {currenyOptions.map((currency)=>{
            return(  
            <option key={currency} value={currency} >
               {currency}
               </option>)
          })}
       
        </select>
      </div>
    </div>
  );
};

export default InputBox;
