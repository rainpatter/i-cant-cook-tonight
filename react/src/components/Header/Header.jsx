import "./Header.css";
import { Link } from "react-router-dom";
import Image from './egg.png'

export default function Header({ setRecipes, setChosenIngredients }) {
  function clickHandler() {
    setChosenIngredients([]);
    setRecipes([]);
  }

  return (
    <div className="header-wrapper">
      <Link onClick={clickHandler} to="/">
        <h1>i can't cook tonight</h1>
      </Link>
      <img src={Image} alt="" />
    </div>
  );
}
