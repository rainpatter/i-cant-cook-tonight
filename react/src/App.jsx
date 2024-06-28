import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import { useNavigate } from "react-router-dom";
import Recipes from "./pages/Recipes/Recipes";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  let [hasSearched, setHasSearched] = useState(false);
  let [recipes, setRecipes] = useState([]);
  let [chosenIngredients, setChosenIngredients] = useState([]);
  let [currentRecipe, setCurrentRecipe] = useState({});
  let [ allIngredients, setAllIngredients ] = useState([])
  

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

  function clickHandler() {
    setHasSearched(false)
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <nav>
        {user ? (
          <>
            <>
              <h3>{user.userInfo}</h3>
              <Logout onLogout={onLogout} />
            </>
            <button onClick={handleClick}>Profile</button>
          </>
        ) : (
          <Login onLogin={onLogin} setUserId={setUserId} />
        )}
        <Link to="/" onClick={clickHandler} >Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard userId={userId} user={user} setHasSearched={setHasSearched}
                recipes={recipes}
                setRecipes={setRecipes}
                chosenIngredients={chosenIngredients}
                setChosenIngredients={setChosenIngredients}
                allIngredients={allIngredients}
                setAllIngredients={setAllIngredients} 
                hasSearched={hasSearched}/>} />
        {user && (
          <Route path="/profile/:id" element={<Profile userId={userId} />} />
        )}
        <Route path="/recipes" element={<Recipes userId={userId} user={user} setHasSearched={setHasSearched}
          recipes={recipes}
          setRecipes={setRecipes}
          setChosenIngredients={setChosenIngredients}
          currentRecipe={currentRecipe}
          setCurrentRecipe={setCurrentRecipe}/>}/>
      </Routes>
    </>
  );
}

export default App;
