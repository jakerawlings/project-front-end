import {Link} from "react-router-dom";

const Navigation = () => {
  return(
      <div className="list-group">
        <Link to="/" className="list-group-item">
          Home
        </Link>
        <Link to="/register" className="list-group-item">
          Register
        </Link>
        <Link to="/login" className="list-group-item">
          Login
        </Link>
        <Link to="/profile" className="list-group-item">
          Profile
        </Link>
      </div>
  );
};
export default Navigation;