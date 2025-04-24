import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
   const {id}= useParams();
  return (
    <div className='text-center fs-5 fw-5 m-5 p-5'>User:{id}</div>
  )
}

export default User;