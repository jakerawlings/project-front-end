import Navigation from "./Navigation";
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div>
        <h1 className="display-1 text-center text-danger">The Movie Club</h1>
        <Navigation active="home"></Navigation>
        <h4 className="text-left">Most Popular Movies</h4>
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