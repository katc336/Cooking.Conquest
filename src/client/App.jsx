import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import HomePage from "./HomePage/HomePage";
import NavBar from "./NavigationBar/NavBar";
import LoginForm from "./AuthForms/LoginForm";
import RegisterForm from "./AuthForms/RegisterForm";
import RecipesPage from "./SeeRecipes/AllRecipesPage/RecipesPage";
import SingleRecipe from "./SeeRecipes/SingleRecipePage/SingleRecipe";
import UserDashboard from "./Dashboards/UserDashboards/UserDashboard";
import UserNavBar from "./NavigationBar/UserNavBar";
import MyRecipes from "./MyRecipes/MyRecipes";
import WorldLore from "./WorldLore/WorldLore";
import JoinGuildPage from "./GuildPage/JoinGuildPage";
import LeadershipBoard from "./GuildPage/LeadershipBoard";
import GuildInformation from "./InformationPage/GuildInfoPage";
import UserInformationDisplay from "./InformationPage/UserInformationDisplay";
import AllGuildRecipes from "./SeeRecipes/UsersPostedRecipesPage/AllGuildRecipes";
import SingleGuildRecipe from "./SeeRecipes/UsersPostedRecipesPage/SingleGuildRecipe";
import AddRecipe from "./UserPostedRecipe/AddRecipes";
import AdminDashboard from "./Dashboards/AdminDashboards/AdminDashboard";

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
          <Route path="/information" element={<UserInformationDisplay />} />
          <Route path="/guild_information" element={<GuildInformation />} />
          <Route path="/leadership_board" element={<LeadershipBoard />} />
          <Route path="/users_recipes" element={<AllGuildRecipes/>} />
          <Route path="/users_recipes/:id" element={<SingleGuildRecipe/>} />
          <Route path="/add_recipes" element={<AddRecipe />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
