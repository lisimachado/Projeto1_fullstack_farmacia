import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';

export const Header = () => {

	const renderHome = useLocation(); // obtém a rota atual

	// if (renderHome.pathname === '/' || 'home') {
	if (renderHome.pathname === '/') {
		return null; // não renderiza o componente na página inicial
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
				<Nav.Link href="/farmacias">Farmácias</Nav.Link>
				<Nav.Link href="/medicamentos">Medicamentos</Nav.Link>
				<Nav.Link href="/cadastro">Cadastro</Nav.Link>
			</Nav>
		</Navbar>
	);
}