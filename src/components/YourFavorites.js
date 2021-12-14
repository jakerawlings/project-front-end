import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import {Link, useNavigate} from "react-router-dom";
import Profile from "./login/Profile";

const YourFavorites = () => {
  const navigate = useNavigate();

  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include',
      mode: "cors"
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  const [user, setUser] = useState({favorites: []});
  useEffect(getProfile, [navigate]);


  return (
      <div>
        <h3 className="text-left mt-3 text-success">Your Favorites</h3>
        <ul className="list-group">
          {user.favorites.map(movie =>
              <li className="list-group-item">
                <Link to={`/details/${movie.imdbID}`}>
                  <h4>{movie.Title}</h4>
                  <img src={movie.Poster} height="300px"/>
                </Link>
              </li>
          )}
        </ul>
      </div>
  );
};
export default YourFavorites;