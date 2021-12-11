import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../consts";
import Navigation from "../Nagivation";

const Register = () => {
  const [user, setUser] = useState({username: 'alice', password: 'alice123'});
  const navigate = useNavigate();
  const register = () => {
    fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(status => navigate('/profile'));
  };
  return(
      <div>
        <h1>Register</h1>
        <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            className="form-control"/>
        <input
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            type="password"
            className="form-control"/>
        <input
            onChange={(e) => setUser({...user, verifyPassword: e.target.value})}
            placeholder="verify password"
            type="password"
            className="form-control"/>
        <button
            className="btn btn-primary"
            onClick={register}>
          Register
        </button>
        <Navigation/>
      </div>
  );
};
export default Register;