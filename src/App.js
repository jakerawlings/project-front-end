import './vendors/bootstrap.min.css'
import Login from "./components/login/Login";
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/login/Register";
import Profile from "./components/login/Profile";
import SearchScreen from "./components/SearchScreen";
import DetailsScreen from "./components/DetailsScreen";
import PrivacyPolicy from "./components/PrivacyPolicy"

function App() {
  return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
            <Route path="/search/:searchTerm" element={<SearchScreen/>}/>
            <Route path="/details/:id" element={<DetailsScreen/>}/>
            <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;