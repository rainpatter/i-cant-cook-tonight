import { useNavigate } from "react-router-dom";
import './Logout.css'

export default function Logout(props) {
  const navigate = useNavigate()
  
  function handleClick() {
    props.onLogout();
    navigate("/")
  }

  return <div>
    <p className="logout-button"onClick={handleClick}>Logout</p>
    </div>;
}
