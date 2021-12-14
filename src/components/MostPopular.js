import {API_URL} from "../consts";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const MostPopular = () => {

  const getAllUsers = () =>
      fetch(`${API_URL}/get-users`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors"
      }).then(res => res.json())
      .then(users => setUsers(users));

  const navigate = useNavigate();

  const [users, setUsers] = useState([])
  useEffect(getAllUsers, [navigate]);

  return (
      <div>
        <h3 className="mt-3">Recent Popular Movies</h3>
            <ul className="list-group">
              {users.map(user => <li className="list-group-item">
                {user.favorites.map(movie => <li className="list-group-item">
                  <Link to={`/details/${movie.imdbID}`}>
                    <h4>{movie.Title}</h4>
                    <img src={movie.Poster} height="300px" width="225px"/>
                  </Link>
                  <Link to={`/profile/${user._id}`}>
                    <div>Favorited by {user.username}</div>
                  </Link>
                </li>)}
              </li> )}
            </ul>
      </div>
  )

}
export default MostPopular;