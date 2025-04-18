import React, { useEffect,useState } from "react";

// https://2025-04-15.currency-api.pages.dev/v1/currencies/${currency}.json
const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://2025-04-15.currency-api.pages.dev/v1/currencies/${currency}.json`
    ).then((res) => res.json())
    .then((res)=>setData(res));
    // console.log(data[currency]);
    
  }, [currency]);
  console.log(data[currency]);
  // return data.${currency} || {};
  // return data;
  return data[currency] || {};

  
};

export default useCurrencyInfo;
