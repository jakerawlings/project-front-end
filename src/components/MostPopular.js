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
        <h4 className="text-left">Most Popular Movies</h4>
        <ul className="list-group">
          {users.map(user => {
            user.favorites.map(movie =>
                <li className="list-group-item">
                  <Link to={`/details/${movie.imdbID}`}>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster}/>
                  </Link>
                </li>
            )
          })
          }
        </ul>
      </div>
  )

}
export default MostPopular;