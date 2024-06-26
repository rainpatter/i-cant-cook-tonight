
import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route, Link} from 'react-router-dom'
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useState } from "react";
import Logout from "./components/Logout/Logout";


function App() {
  const [ user, setUser ] = useState(null)
  const [ userId, setUserId ] = useState(null)

  function onLogin(user) {
    console.log('logging in')
    setUser(user)
    console.log(user)
  }

  function onLogout() {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
        <header>
            <Header />
            { user ?
            <><h3>{user.userInfo}</h3><Logout onLogout={onLogout}/></>
            :
             < Login onLogin={onLogin} setUserId={setUserId}/>
            }
        </header>
        <nav>
          <Link to='/profile/:id'>Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={< Dashboard userId={userId} user={user}/>} />
          <Route path="/profile/" element={<Profile />} />
        </Routes>
    </>
  );
}

export default App;
