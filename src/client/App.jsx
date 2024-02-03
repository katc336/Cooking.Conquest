import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import ResponsiveHomePage from "./HomePage/ResponsiveHomePage";
import LoginResponsive from "./AuthForms/LoginResponsive";
import RegisterResponsive from "./AuthForms/RegisterResponsive";
import RecipesPage from "./SeeRecipes/AllRecipesPage/RecipesPage";
import SingleRecipe from "./SeeRecipes/SingleRecipePage/SingleRecipe";
import UserDashboard from "./Dashboards/UserDashboards/UserDashboard";
import NonUserNavBar from "./NavigationBar/Web/NonUserNavBar";
import UserNavBar from "./NavigationBar/Web/UserNavBar";
import MyRecipesResponsive from "./MyRecipes/MyRecipesResponsive";
import WorldLore from "./WorldLore/WorldLore";
import JoinGuildPage from "./GuildPage/Web/JoinGuildPage";
import GuildPageResponsive from "./GuildPage/GuildPageResponsive";
import GuildInformation from "./InformationPage/Web/GuildInfoPage";
import InformationResponsive from "./InformationPage/InformationResponsive";
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
        {!token ? <NonUserNavBar/> : <UserNavBar/>}
        <Routes>
          <Route path="/" element={<ResponsiveHomePage />} />
          <Route path="/login" element={<LoginResponsive />} />
          <Route path="/register" element={<RegisterResponsive />} />
          <Route path="/account" element={<UserDashboard />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
          <Route path="/my_recipes" element={<MyRecipesResponsive />} />
          <Route path="/lore" element={<WorldLore/>} />
          <Route path="/join_guild" element={<JoinGuildPage/>} />
          <Route path="/information" element={<InformationResponsive />} />
          <Route path="/guild_information" element={<GuildInformation />} />
          <Route path="/leadership_board" element={<GuildPageResponsive />} />
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
