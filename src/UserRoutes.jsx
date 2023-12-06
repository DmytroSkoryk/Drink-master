import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import MyRecipes from "./pages/MyRecipes.jsx";
import Favorites from "./pages/Favorites.jsx";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/my" element={<MyRecipes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
