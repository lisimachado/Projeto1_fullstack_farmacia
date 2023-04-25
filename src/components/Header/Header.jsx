import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';
import './HeaderStyle.css';

export const Header = () => {

	const renderHome = useLocation(); // obtém a rota atual

	// não renderiza o componente na página inicial
	if (renderHome.pathname === '/' || renderHome.pathname === '/home') {
		return null;
	}

	return (
		<Navbar variant="grey">
			<Navbar.Brand style={{ marginLeft: '5%' }} href="/">
				<img
					src={logo}
					height="70"
					className="d-inline-block align-top"
					alt="Logo"
				/>
			</Navbar.Brand>
			<Nav className="ms-auto nav-with-margin" style={{ marginRight: '5%', fontWeight: 'bold' }}>
				<Nav.Link className="nav-link-menu" href="/farmacias">Farmácias</Nav.Link>
				<Nav.Link className="nav-link-menu" href="/medicamentos">Medicamentos</Nav.Link>
				<Nav.Link className="nav-link-menu" href="/cadastro">Cadastro</Nav.Link>
				<Nav.Link className="nav-link-menu" href="/faqpage">FAQ</Nav.Link>
				<Nav.Link className="nav-link-sair" href="/"> Sair </Nav.Link>

			</Nav>
		</Navbar>
	);
}