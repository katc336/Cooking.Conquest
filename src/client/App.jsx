import { Typography } from "@mui/material";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import NavBar from "./NavigationBar/NavBar";
import LoginForm from "./AuthForms/LoginForm";
import RegisterForm from "./AuthForms/RegisterForm";
import MapAllRecipes from "./SeeRecipes/MapAllRecipes";
import SingleRecipe from "./SeeRecipes/SingleRecipe";
import UserDashboard from "./Dashboards/UserDashboards/UserDashboard";

import { useSelector } from "react-redux";
import UserNavBar from "./NavigationBar/UserNavBar";

function App() {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    console.log(token)
  }
  return (
    <div>
      <BrowserRouter>
        {!token ? <NavBar /> : <UserNavBar/>}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/account" element={<UserDashboard />} />
          <Route path="/recipes" element={<MapAllRecipes />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
