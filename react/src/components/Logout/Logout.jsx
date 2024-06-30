import { useNavigate } from "react-router-dom";
import "./Logout.css";

export default function Logout({onLogout}) {
  const navigate = useNavigate();

  function handleClick() {
    onLogout();
    navigate("/");
  }

  return (
    <div>
      <p className="logout-button" onClick={handleClick}>
        Logout
      </p>
    </div>
  );
}
