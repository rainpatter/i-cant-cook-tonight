import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import { useNavigate } from "react-router-dom";
import Recipes from "./pages/Recipes/Recipes";
import Signup from "./pages/Signup/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  let [hasSearched, setHasSearched] = useState(false);
  let [recipes, setRecipes] = useState([]);
  let [chosenIngredients, setChosenIngredients] = useState([]);
  let [currentRecipe, setCurrentRecipe] = useState({});
  let [allIngredients, setAllIngredients] = useState([]);

  function onLogin(user) {
    console.log("logging in");
    setUser(user);
  }

  function onLogout() {
    setUser(null);
    localStorage.clear();
    setUserId(null);
  }

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/profile/${userId}`);
  }

  return (
    <>
      <header>
        <Header  setChosenIngredients={setChosenIngredients} setRecipes={setRecipes}/>
      </header>
      <nav>
        {user ? (
          <>
            <>
              <h3 className="profile-header" onClick={handleClick}>saved recipes</h3>
              <Logout onLogout={onLogout} />
            </>
          </>
        ) : (
          <Login onLogin={onLogin} setUserId={setUserId} />
        )}
      </nav>
      <div className="site-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                userId={userId}
                user={user}
                setHasSearched={setHasSearched}
                recipes={recipes}
                setRecipes={setRecipes}
                chosenIngredients={chosenIngredients}
                setChosenIngredients={setChosenIngredients}
                allIngredients={allIngredients}
                setAllIngredients={setAllIngredients}
                hasSearched={hasSearched}
              />
            }
          />
          {user && (
            <Route path="/profile/:id" element={<Profile userId={userId} />} />
          )}
          <Route
            path="/recipes"
            element={
              <Recipes
                userId={userId}
                user={user}
                setHasSearched={setHasSearched}
                recipes={recipes}
                setRecipes={setRecipes}
                setChosenIngredients={setChosenIngredients}
                currentRecipe={currentRecipe}
                setCurrentRecipe={setCurrentRecipe}
              />
            }
          />
          <Route
            path="/signup-user" element ={<Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
