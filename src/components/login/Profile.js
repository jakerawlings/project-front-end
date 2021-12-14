import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {Link, useNavigate} from "react-router-dom";
import Navigation from "../Navigation";
import YourFavorites from "../YourFavorites";

const Profile = () => {
  const navigate = useNavigate();

  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => navigate('/login'));
  }

  const updateUser = () => {
    fetch(`${API_URL}/users`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
      mode: "cors",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .then(user => {
      setUser(user);
      logout();
    }).catch(e => navigate('/login'));
  }

  const [user, setUser] = useState({favorites: [""]});
  useEffect(getProfile, []);

  return (
      <div>
        <h1 className="display-1 text-center text-danger mb-1">Profile</h1>
        <Navigation active='profile'/>
        <div className="row mt-2">
          <div className="col-3">
            <div className="form-floating mb-2">
              <input type="text" className="form-control rounded"
                     id="floatingInput"
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
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
          <div className="col-3">
            <button
                className="btn btn-primary mb-4 mt-2" onClick={updateUser}>
              Change Username
            </button>
            <button
                className="btn btn-primary mb-4" onClick={updateUser}>
              Change Password
            </button>
            <button
                className="btn btn-primary" onClick={updateUser}>
              Change Email Address
            </button>
          </div>
        </div>
        <div>
          <YourFavorites/>
        </div>
        {
          user.role === "Critic" && <h3 className="text-left mt-3">Your Reviews</h3>
        }
      </div>
  );
};
export default Profile;