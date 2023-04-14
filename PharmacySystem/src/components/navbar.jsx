import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header__container">
      <div className="header__logo">
        <h1>Pharmacy System</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/medicamentos">Medicamentos</Link>
          </li>
          <li>
            <Link to="/farmacias">Farmácias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

