import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../../consts";
import Navigation from "../Navigation";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const login = () => {
    fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(status => {
      navigate('/profile')
    });
  }
  return (
      <div>
        <h1 className="display-1 text-center text-danger mb-1">Login</h1>
        <Navigation active='login'/>
        <div className="d-flex justify-content-center text-center">
          <div className="row mt-2">
            <div className="col-12">
              <div className="form-floating mb-2">
                <input type="text" className="form-control rounded"
                       id="floatingInput"
                       placeholder="Username"
                       value={user.username}
                       onChange={(e) => setUser(
                           {...user, username: e.target.value})}/>
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control"
                       id="floatingPassword" placeholder="Password"
                       value={user.password}
                       type="password"
                       onChange={(e) => setUser(
                           {...user, password: e.target.value})}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                  className="btn btn-danger mt-2"
                  onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <div className="text-center">Don't have an account? Click here to
              register
            </div>
            <Link to="/register">
              <button className="btn btn-danger mt-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};
export default Login;