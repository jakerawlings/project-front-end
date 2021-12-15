import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import Navigation from "./Navigation";

const OtherUser = () => {
  const params = useParams();

  let userDetails = {id: 0, favorites: []}

  const getAllUsers = () =>
      fetch(`${API_URL}/get-users`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors"
      }).then(res => res.json())
      .then(users => setUsers(users));

  const [users, setUsers] = useState([])
  useEffect(getAllUsers, []);

  return (
      <div>
        {users.map(user => {
          console.log(user._id === params.id ?
              userDetails = user : console.log("lol"))
        })}
        <h1 className="display-1 text-center text-danger">{userDetails.username}'s
          Profile</h1>
        <Navigation active=""/>
        <h3 className="text-left mt-3 text-success">{userDetails.username}'s
          Favorites</h3>
        <ul className="list-group">
          {userDetails.favorites.map(movie =>
              <li className="list-group-item">
                <Link to={`/details/${movie.imdbID}`}>
                  <h4>{movie.Title}</h4>
                  <img src={movie.Poster} height="300px"/>
                </Link>
              </li>
          )}
        </ul>
        {
          userDetails.role === "Critic" && <h3
              className="text-left mt-3 text-success">{userDetails.username}'s
            Reviews</h3>
        }
      </div>
  );
};
export default OtherUser;