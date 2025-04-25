import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {setUser}=useContext(UserContext);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password});
  }

  return (
    <div>
      Login
      <input
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <input
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
