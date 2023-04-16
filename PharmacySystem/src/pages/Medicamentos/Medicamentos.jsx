import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CardMedicamento } from '../../components/CardMedicamento/CardMedicamento' ;
import caixaMedicamento from '../../components/CardMedicamento/Img/caixaMedicamento.png';
import aspirina from '../../components/CardMedicamento/Img/aspirina.png';


export const Medicamentos = () => {
	const medicamentos = [

		{ medicamento: 'Desloratadina',
		laboratorio: 'Biosintética',
		dosagem: '5mg', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 49,71',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Aspirina', 
		laboratorio: 'Bayer', 
		dosagem: '500mg', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 10,80', 
		imgSrc: aspirina },

		{ medicamento: 'Ibuprofeno',
		laboratorio: 'Medley',  
		dosagem: '400mg', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 14,70',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Dipirona Monoidratada', 
		laboratorio: 'EMS', 
		dosagem: '1g', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 17,20',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Paracetamol', 
		laboratorio: 'Ache', 
		dosagem: '750mg', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 8,50',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Rivotril',
		laboratorio: 'Roche',  
		dosagem: '2,5mg/mL', 
		tipo: 'Medicamento Controlado', 
		preco: 'R$ 67,90',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Systane Complete', 
		laboratorio: 'Alcon',  
		dosagem: '10mL', 
		tipo: 'Medicamento Normal', 
		preco: 'R$ 52,60',
		imgSrc: caixaMedicamento },

		{ medicamento: 'Hexomedine', 
		laboratorio: 'Sanofi',  
		dosagem: '0,5mg/mL', 
		tipo: 'Medicamento Controlado', 
		preco: 'R$ 74,30',
		imgSrc: caixaMedicamento },

];
  return (
    <div className="container">
      <h1 className="title">Medicamentos</h1>

    <Row>
      {medicamentos.map((medicamento, index) => (
        <Col key={index} md={4}>
          <CardMedicamento {...medicamento} />
        </Col>
      ))}
    </Row>
    </div>
  );
};