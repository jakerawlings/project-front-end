import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Navigation from "./Navigation";
import './SearchScreen.css'

const SearchScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const movieTitle = params.searchTerm
  const [searchTerm, setSearchTerm] = useState(movieTitle);
  const [movies, setMovies] = useState([]);

  const findMovies = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=852159f0`)
      .then(res => res.json())
      .then(results => setMovies(results.Search))
    }
  }

  useEffect(findMovies, []);
  return (
      <div>
        <h1 className="display-1 text-center text-danger">Search Movies</h1>
        <Navigation active="search"></Navigation>
        <div className="container mt-3">
          <div className="row">
            <div className="col-11">
              <input className="form-control"
                     placeholder="Search for Movies"
                     onChange={(e) =>
                         setSearchTerm(e.target.value)} value={searchTerm}/>
            </div>
            <div className="col-1">
              <button className="btn btn-danger float-end" onClick={findMovies}>
                Search
              </button>
            </div>
          </div>
        </div>
        <ul className="list-group mt-2">
          {
            movies.map(movie =>
                <li className="list-group-item" key={movie.imdbID}>
                  <Link to={`/details/${movie.imdbID}`}>
                    <img src={movie.Poster} height={200} width={150}/>
                    <span className="text-danger  ms-3 mv-search-result">
                      {movie.Title}
                    </span>
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  )
};
export default SearchScreen;