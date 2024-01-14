import { Typography } from "@mui/material";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import NavBar from "./NavigationBar/NavBar";
import LoginForm from "./AuthForms/LoginForm";
import RegisterForm from "./AuthForms/RegisterForm";
import RecipesPage from "./SeeRecipes/AllRecipesPage/RecipesPage";
import SingleRecipe from "./SeeRecipes/SingleRecipePage/SingleRecipe";
import UserDashboard from "./Dashboards/UserDashboards/UserDashboard";

import { useSelector } from "react-redux";
import UserNavBar from "./NavigationBar/UserNavBar";
import MyRecipes from "./MyRecipes/MyRecipes";
import WorldLore from "./WorldLore/WorldLore";
import JoinGuildPage from "./GuildPage/JoinGuildPage";
import CookingConquestInfo from "./InformationPage/CookingConquestInfo";
import LeadershipBoard from "./GuildPage/LeadershipBoard";

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
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
          <Route path="/my_recipes" element={<MyRecipes />} />
          <Route path="/lore" element={<WorldLore/>} />
          <Route path="/join_guild" element={<JoinGuildPage/>} />
          <Route path="/information" element={<CookingConquestInfo />} />
          <Route path="/leadership_board" element={<LeadershipBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
