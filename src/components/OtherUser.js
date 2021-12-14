// import {useNavigate, useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import Navigation from "./Navigation";
// import {API_URL} from "../consts";
//
// const OtherUser = () => {
//   const params = useParams();
//   const [movieDetails, setMovieDetails] = useState({Actors: ''});
//   const [state, setState] = useState("initial")
//
//   const findMovieDetailsByImdbID = () =>
//       fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=852159f0`)
//       .then(res => res.json())
//       .then(movie => setMovieDetails(movie));
//   useEffect(findMovieDetailsByImdbID, []);
//
//   const navigate = useNavigate();
//
//   const getProfile = () => {
//     fetch(`${API_URL}/profile`, {
//       method: 'POST',
//       credentials: 'include'
//     }).then(res => res.json())
//     .then(user => {
//       setUser(user);
//     }).catch(e => navigate('/login'));
//   }
//
//   const [user, setUser] = useState({});
//   useEffect(getProfile, [navigate]);
//
//   const updateUser = () => {
//     fetch(`${API_URL}/users`, {
//       method: 'PUT',
//       credentials: 'include',
//       body: JSON.stringify(user),
//       mode: "cors",
//       headers: {'Content-Type': 'application/json'}
//     }).then(res => res.json())
//     .then(user => {
//       setUser(user);
//     }).catch(e => navigate('/login'));
//   }