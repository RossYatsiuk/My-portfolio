import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/about" className="nav-link">About Me</NavLink>
        <NavLink to="/my-city" className="nav-link">My City</NavLink>
        <NavLink to="/my-future" className="nav-link">My Achievments</NavLink>
      </nav>
    </header>
  );
}

export default Header;
