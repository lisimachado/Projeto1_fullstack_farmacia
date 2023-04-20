import { useState, useEffect } from 'react';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CardMedicamento } from '../../components/CardMedicamento/CardMedicamento';
import caixaMedicamento from '../../components/CardMedicamento/Img/caixaMedicamento.png';

const medicamentosIniciais = [
	{
		nomeMedicamento: 'Desloratadina',
		laboratorio: 'Biosintética',
		dosagem: '5mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '49,71',
		imgSrc: caixaMedicamento,
		descricao: 'A desloratadina é indicada para o alívio dos sintomas associados à rinite alérgica, como: coriza (corrimento nasal), espirros e prurido nasal (coceira no nariz), ardor e prurido ocular (coceira nos olhos), lacrimejamento, prurido do palato (coceira no céu da boca) e tosse.'
	},

	{
		nomeMedicamento: 'Aspirina',
		laboratorio: 'Bayer',
		dosagem: '500mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '10,80',
		imgSrc: caixaMedicamento,
		descricao: 'Tem ação analgésica, antitérmica e anti-inflamatória e é indicado para o alívio da dor.'
	},

	{
		nomeMedicamento: 'Ibuprofeno',
		laboratorio: 'Medley',
		dosagem: '400mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '14,70',
		imgSrc: caixaMedicamento,
		descricao: 'Ibuprofeno é um medicamento analgésico e anti-inflamatório, indicado para o alívio de dores e febre decorrentes de gripes e resfriados. Também colabora com a redução de dores de garganta, de cabeça, de dente, dor nas costas, cólicas menstruais e dores musculares.'
	},

	{
		nomeMedicamento: 'Dipirona Monoidratada',
		laboratorio: 'EMS',
		dosagem: '1g',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '17,20',
		imgSrc: caixaMedicamento,
		decricao: 'A dipirona é utilizada para alívio da dor, como outros analgésicos. Porém, como sua efetividade pode superar outros medicamentos, sem mencionar que também possui ação antitérmica, ela costuma ser indicada com mais frequência.'
	},

	{
		nomeMedicamento: 'Paracetamol',
		laboratorio: 'Ache',
		dosagem: '750mg',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '8,50',
		imgSrc: caixaMedicamento,
		descricao: 'Paracetamol é um medicamento indicado para o tratamento de febre e também colabora com auxílio temporário a dores leves e moderadas. Pode ser utilizado na redução de dores relacionadas à resfriados, como dor de cabeça e dor de garganta. Ainda é efetivo para reduzir o desconforto da dor de dente.'
	},

	{
		nomeMedicamento: 'Rivotril',
		laboratorio: 'Roche',
		dosagem: '2,5mg/mL',
		tipoMedicamento: 'Medicamento Controlado',
		precoMedicamento: '67,90',
		imgSrc: caixaMedicamento,
		descricao: 'Rivotril pertence à classe dos benzodiazepínicos, medicamentos que causam inibição leve do sistema nervoso, com consequente ação anticonvulsivante, sedativa leve, relaxante muscular e tranquilizante.'
	},

	{
		nomeMedicamento: 'Systane Complete',
		laboratorio: 'Alcon',
		dosagem: '10mL',
		tipoMedicamento: 'Medicamento Normal',
		precoMedicamento: '52,60',
		imgSrc: caixaMedicamento,
		descricao: 'O Lubrificante Oftálmico Systane Complete é indicado para o alívio temporário de ardor e irritação devido à secura dos olhos.'
	},

	{
		nomeMedicamento: 'Hexomedine',
		laboratorio: 'Sanofi',
		dosagem: '0,5mg/mL',
		tipoMedicamento: 'Medicamento Controlado',
		precoMedicamento: '74,30',
		imgSrc: caixaMedicamento,
		descricao: 'Hexomedine é um spray oral com ação antisséptica e anestésica local. O medicamento trata as inflamações da cavidade oral e garganta, inibindo a multiplicação de microrganismos presentes na mucosa em caso de faringites, aftas, estomatites e inflamação e infecção na garganta que acometem as amígdalas e faringe.'
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