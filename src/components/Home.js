import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {API_URL} from "../consts";
import MostPopular from "./MostPopular";

const Home = () => {
  const getAllUsers = () =>
      fetch(`${API_URL}/get-users`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors"
      }).then(res => res.json())
      .then(users => setUsers(users));

  const [users, setUsers] = useState({users: []})
  useEffect(getAllUsers, []);

  return (
      <div>
        <h1 className="display-1 text-center text-danger">The Movie Club</h1>
        <Navigation active="home"></Navigation>
        <MostPopular/>
        <div className="row justify-content-center">
          <Link to="/search">
            <button className="btn btn-danger">Start Browsing Movies
            </button>
          </Link>
        </div>
      </div>
  );
};
export default Home;