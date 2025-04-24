import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data=useLoaderData();
    console.log(data);
  return (<>
  <h1>{data.name}</h1>
  <h1>{data.followers}</h1>
  </>
  )
}

export default Github;

export const githubInfoLoader=async()=>{
    const respone= await fetch('https://api.github.com/users/amnashahid7');
  const res= await respone.json();
  return res;
    
}