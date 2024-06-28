import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <div className="header-wrapper">
    <Link to="/"><h1>i can't cook tonight</h1></Link>
   <img src="public/egg.png" alt="" />
  </div>);
}
