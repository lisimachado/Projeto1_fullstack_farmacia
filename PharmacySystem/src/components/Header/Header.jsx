import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';

export const Header = () => {
	const location = useLocation(); // obtém a rota atual

  if (location.pathname === '/') {
    return null; // não renderiza o componente na página inicial
  }
	
  return (
    <Navbar bg="grey" variant="grey">
      <Navbar.Brand href="/">
        <img
          src={logo} 
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Nav Nav className="justify-content-end">
        <Nav.Link href="/farmacias">Farmácias</Nav.Link>
        <Nav.Link href="/medicamentos">Medicamentos</Nav.Link>
				<Nav.Link href="/cadastro">Cadastro</Nav.Link>
       
      </Nav>
    </Navbar>
  );
}







// import React from 'react';
// import logo from './logo.png';
// import './Header.css';

// export const Header = () => {
//   return (
//     <header className="header__container">
// 			<img id='logo' src={logo} alt="Logo Pharmacy Cener System" />
//      <h1>Menu de navegação</h1>
//     </header>
//   );
// }


