import { useState, useEffect } from 'react';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CardMedicamento } from '../../components/CardMedicamento/CardMedicamento';
import caixaMedicamento from '../../components/CardMedicamento/Img/caixaMedicamento.png';
import aspirina from '../../components/CardMedicamento/Img/aspirina.png';

const medicamentosIniciais = [
	{
		nomeMedicamento: 'Desloratadina',
		laboratorio: 'Biosintética',
		dosagem: '5mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '49,71',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Aspirina',
		laboratorio: 'Bayer',
		dosagem: '500mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '10,80',
		imgSrc: aspirina
	},

	{
		nomeMedicamento: 'Ibuprofeno',
		laboratorio: 'Medley',
		dosagem: '400mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '14,70',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Dipirona Monoidratada',
		laboratorio: 'EMS',
		dosagem: '1g',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '17,20',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Paracetamol',
		laboratorio: 'Ache',
		dosagem: '750mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '8,50',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Rivotril',
		laboratorio: 'Roche',
		dosagem: '2,5mg/mL',
		tipoMedicamento: 'Medicamento Controlado',
		precoMedicamento: '67,90',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Systane Complete',
		laboratorio: 'Alcon',
		dosagem: '10mL',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '52,60',
		imgSrc: caixaMedicamento
	},

	{
		nomeMedicamento: 'Hexomedine',
		laboratorio: 'Sanofi',
		dosagem: '0,5mg/mL',
		tipoMedicamento: 'Medicamento Controlado',
		precoMedicamento: '74,30',
		imgSrc: caixaMedicamento
	},

];

export const Medicamentos = () => {

	//Para pegar dados do LocalStorage
	const [medicamentos, setMedicamentos] = useState([...medicamentosIniciais]);

	useEffect(() => {
		const dadosMedicamento = localStorage.getItem('dadosMedicamento');
		if (dadosMedicamento) {
			const medicamentosLocalStorage = JSON.parse(dadosMedicamento);
			setMedicamentos([...medicamentosIniciais, ...medicamentosLocalStorage]);
		}
	}, []);


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
			<br /><br />
		</div>
	);
};