import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import {useNavigate} from "react-router-dom";
import Profile from "./login/Profile";

const YourFavorites = () => {
  const [user, setUser] = useState({});
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

  useEffect(getProfile, [navigate]);

  return (
      <div>
        <h3 className="text-left mt-3">Your Favorites</h3>
        <ul className="list-group">
          {user.favorites.map(movie =>
              <li className="list-group-item">
                <img src={movie.Poster}/>
              </li>
          )}
        </ul>
      </div>
  );
};
export default YourFavorites;