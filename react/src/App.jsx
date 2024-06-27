
import Dashboard from "./pages/Dashboard/Dashboard";

import { Routes, Route, Link} from 'react-router-dom'
import Profile from "./pages/Profile/Profile";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import { useNavigate } from 'react-router-dom'

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
    setUserId(null)
  }


    const navigate = useNavigate()
    function handleClick() {
      navigate(`/profile/${userId}`)
  
    }
  

 

  return (
    <>
        <header>
            <Header />
            { user ?
            <><><h3>{user.userInfo}</h3><Logout onLogout={onLogout} /></><button onClick={handleClick}>Profile</button></>
            :
             < Login onLogin={onLogin} setUserId={setUserId}/>
            }
        </header>
        <nav>
        
        </nav>
        <Routes>
          <Route path="/" element={< Dashboard userId={userId} user={user}/>} />
          <Route path="/profile/:id" element={ <Profile userId={userId}/>}/>
        </Routes>
    </>
  );
}

export default App;
