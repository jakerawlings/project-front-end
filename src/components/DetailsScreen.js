import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navigation from "./Navigation";

const DetailsScreen = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({Actors: ''});

  const findMovieDetailsByImdbID = () =>
      fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=852159f0`)
      .then(res => res.json())
      .then(movie => setMovieDetails(movie));
  useEffect(findMovieDetailsByImdbID, []);


  return (
      <div>
        <h1 className="display-1 text-center text-danger">Details</h1>
        <Navigation active=""></Navigation>
        <h2 className="mb-2">{movieDetails.Title} ({movieDetails.Year})</h2>
        <div className="row">
          <div className="col-8">
            <h4 className="mb-4">Directed by: {movieDetails.Director}</h4>
            <h5>Cast</h5>
            <ul className="list-group">
              {
                movieDetails.Actors.split(',').map(actor =>
                    <li className="list-group-item w-25" key={actor}>
                      {actor}
                    </li>
                )
              }
            </ul>
            <h5 className="mt-4">Plot</h5>
            <p className="mt-2">
              {movieDetails.Plot}
            </p>
            <button className="btn btn-success">
              Favorite Movie
            </button>
            <br/>
            <button className="btn btn-primary mt-2">
              Add Review
            </button>
          </div>
          <div className="col-4">
            <img src={movieDetails.Poster} height={400} width={250}/>
          </div>
        </div>
      </div>
  );
};
export default DetailsScreen;