import Login from "./login/Login";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Register from "./login/Register";
import Profile from "./login/Profile";

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;