import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {

	useEffect(() => {
    const pageContent = document.getElementById('page-content');
    const footer = document.querySelector('.footer');
    const windowHeight = window.innerHeight;

    if (pageContent?.clientHeight > windowHeight) {
      footer.style.position = 'absolute';
    } else {
      footer.style.position = 'fixed';
    }
  }, []);


  return (
    <footer className="footer"> 
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-center text-md-left">
            <p>LABPharmacy Inc © {new Date().getFullYear()}</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-right">
            Desenvolvido por Lisiane Machado Martins<br />
            Curso Senai Fullstack - Módulo I
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
