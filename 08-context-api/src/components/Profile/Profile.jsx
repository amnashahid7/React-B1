import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';

const Profile = () => {
    const {user}=useContext(UserContext);
    if(!user) return <div>Please login</div>
  return (
   <>
   Profile name: {user.username}
   </>
  )
}

export default Profile;