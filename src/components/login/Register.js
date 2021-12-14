import React from "react"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../../consts";
import Navigation from "../Navigation";

const Register = () => {
  const [user, setUser] = useState({});
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

  return (
      <div>
        <h1 className="display-1 text-center text-danger mb-1">Register</h1>
        <Navigation active='login'/>
        <div className="d-flex justify-content-center text-center">
          <div className="row mt-2">
            <div className="col-12">
              <div className="form-floating mb-2">
                <input type="text" className="form-control" id="floatingInput"
                       placeholder="Username"
                       value={user.username}
                       onChange={(e) => setUser(
                           {...user, username: e.target.value})}/>
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-2">
                <input type="password" className="form-control"
                       id="floatingPassword" placeholder="Password"
                       value={user.password}
                       type="password"
                       onChange={(e) => setUser(
                           {...user, password: e.target.value})}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-2">
                <input type="text" className="form-control"
                       id="floatingEmail" placeholder="Email Address"
                       value={user.email}
                       onChange={(e) => setUser(
                           {...user, email: e.target.value})}/>
                <label htmlFor="floatingEmail">Email Address</label>
              </div>
              <div className="btn-group" role="group"
                   aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio"
                       id="btnradio1" autoComplete="off"
                       onClick={() => setUser({...user, role: "Fan"})}/>
                <label className="btn btn-outline-primary"
                       htmlFor="btnradio1">Fan</label>
                <input type="radio" className="btn-check" name="btnradio"
                       id="btnradio3" autoComplete="off"
                       onClick={() => setUser({...user, role: "Critic"})}/>
                <label className="btn btn-outline-primary"
                       htmlFor="btnradio3">Critic</label>
              </div>
              <br/>
              <button
                  className="btn btn-danger mt-2"
                  onClick={register}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default Register;