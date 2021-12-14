import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "./Navigation";
import {API_URL} from "../consts";

const OtherUser = () => {
  const params = useParams();

  // const findUserbyID = () =>
  //     fetch(`${API_URL}/users/${params.id}`, {
  //       method: 'GET',
  //       credentials: 'include',
  //       mode: "cors"
  //     })
  //     .then(res => res.json())
  //     .then(user => setUserDetails(user));
  //
  // const [userDetails, setUserDetails] = useState({favorites: ''});
  // useEffect(findUserbyID, []);

  const getAllUsers = () =>
      fetch(`${API_URL}/get-users`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors"
      }).then(res => res.json())
      .then(users => setUsers(users));

  const getUser = (userId) => {
    users.map(user => {
      if (user._id === userId) {
        setUser(user)
      }
    })
  }

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({favorites: []})
  useEffect(getAllUsers, []);
  useEffect(getUser(params.id), []);

  return (
      <div>
        {JSON.stringify(users)}
      </div>
  );
};
export default OtherUser;