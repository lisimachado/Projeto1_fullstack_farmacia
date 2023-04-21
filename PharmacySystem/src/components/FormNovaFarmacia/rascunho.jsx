// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
// import './FormNovaFarmacia.css';

// export const FormNovaFarmacia = () => {

// 	const [razaoSocial, setRazaoSocial] = useState('');
// 	const [latitude, setLatitude] = useState('');
// 	const [longitude, setLongitude] = useState('');

// 	const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

// 	//Salvar no localStorage

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();

// 		const novafarmacia = {
// 			razaoSocial,
// 			latlng,
// 			longitude,
// 		}

// 		try {
// 			const formularioAtualizado = [...formFarmaciaValue, novafarmacia]
// 			setFormFarmaciaValue(formularioAtualizado)

// 			localStorage.setItem("dadosFarmacia", JSON.stringify(formularioAtualizado))

// 			console.log("Dados salvos com sucesso!")
// 			alert("Dados salvos com sucesso!");
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	};

// 	//Formulário

// 	return (
// 		<container className="container">

// 			<Form className="FormCadastro"
// 				onSubmit={handleFormSubmit}>
// 						<Form.Group className="col-9" id="form_nome">
// 						<Form.Label>Razão Social</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={razaoSocial}
// 							onChange={e => setRazaoSocial(e.target.value)}
// 						/>
// 					</Form.Group>

					
// 					<Form.Group className="col-6" id="form_lat">
// 						<Form.Label>Latitude</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={latitude}
// 							onChange={e => setLatitude(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-6" id="form_lon">
// 						<Form.Label>Longitude</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={longitude}
// 							onChange={e => setLongitude(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Button
// 						className="btn-envio ms-auto"
// 						variant="success"
// 						type="submit"
// 						id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 			</Form>

// 			{/* Ajuste para o footer não ficar sobrepondo o conteudo da página. */}
// 		</container>
// 	);
// }































//VERSÃO DO MAPA QUE FUNCIONA

// import React, { useRef, useEffect, useState } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';
// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {

// 	const mapRef = useRef(null);

// 	useEffect(() => {
// 		// Renderiza o mapa na posição e com o zoom definidos
// 		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

// 		// Adiciona o tile layer do OpenStreetMap
// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// 			maxZoom: 18,
// 		}).addTo(map);

// 		// Adiciona marcadores para as lojas
// 		const lojasIniciais = [
// 			{
// 				cod: 'Loja 001',
// 				cnpj: '42.589.746/0001-00',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja01@pharmalife.com.br',
// 				telefone: '(48)8022-4000',
// 				endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
// 				latlng: [-27.5906434, -48.5506324]
// 			},
		
// 		];

// 		//Para pegar dados do LocalStorage
// 		const [farmacia, setFarmacia] = useState([...lojasIniciais]);

// 		useEffect(() => {
// 			const dadosFarmacia = localStorage.getItem('dadosFarmacia');
// 			if (dadosFarmacia) {
// 				const farmaciasLocalStorage = JSON.parse(dadosFarmacia);
// 				setFarmacia([...lojasIniciais, ...farmaciasLocalStorage]);
// 			}
// 		}, []);


// 		lojasIniciais.forEach((loja) => {
// 			const popupContent = (
// 				<div>
// 					<h5>{loja.fantasia}</h5>
// 					<p>Razão social: {loja.razaoSocial}</p>
// 					<p>CNPJ: {loja.cnpj}</p>
// 					<p>Email: {loja.email}</p>
// 					<p>Telefone: {loja.telefone}</p>
// 					<p>Endereço: {loja.endereco}</p>
// 				</div>
// 			);
// 			const popupHTML = renderToString(popupContent);
// 			L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
// 		});
// 	}, []);

// 	return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };
























// //VERSÃO DO MAPA QUE FUNCIONA

// import React, { useRef, useEffect } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';

// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {

// 	const mapRef = useRef(null);

// 	useEffect(() => {
// 		// Renderiza o mapa na posição e com o zoom definidos
// 		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

// 		// Adiciona o tile layer do OpenStreetMap
// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// 			maxZoom: 18,
// 		}).addTo(map);

// 		// Adiciona marcadores para as lojas
// 		const lojas = [
// 			{
// 				cod: 'Loja 001',
// 				cnpj: '42.589.746/0001-00',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja01@pharmalife.com.br',
// 				telefone: '(48)8022-4000',
// 				endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
// 				latlng: [-27.5906434, -48.5506324]
// 			},

// 			{
// 				cod: 'Loja 002',
// 				cnpj: '42.589.746/0002-38',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja02@pharmalife.com.br',
// 				telefone: '(48)8022-4001',
// 				endereco: 'Rod Admar Gonzaga, 1022, bairro Itacorubi, Florianópolis/SC CEP 88.220-777',
// 				latlng: [-27.5866780, -48.4989027],
// 			},

// 			{
// 				cod: 'Loja 003',
// 				cnpj: '42.589.746/0003-43',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja03@pharmalife.com.br',
// 				telefone: '(48)8022-4002',
// 				endereco: 'Rod Francisco Magno Vieira, 211, bairro Campeche, Florianópolis/SC CEP 88.051-300',
// 				latlng: [-27.6620, -48.5013],
// 			},

// 			{
// 				cod: 'Loja 004',
// 				cnpj: '42.589.746/0004-14',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja04@pharmalife.com.br',
// 				telefone: '(48)8022-4004',
// 				endereco: 'Rua Lauro Linhares, 5757, bairro Trindade, Florianópolis/SC CEP 88.193-001',
// 				latlng: [-27.5887649, -48.5224589],
// 			},

// 			{
// 				cod: 'Loja 005',
// 				cnpj: '42.589.746/0005-62',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja05@pharmalife.com.br',
// 				telefone: '(48)8022-4005',
// 				endereco: 'Rua dos Navegantes, 57, bairro Estreito, Florianópolis/SC CEP 88.200-951',
// 				latlng: [-27.5851554, -48.5784047],
// 			},

// 			{
// 				cod: 'Loja 006',
// 				cnpj: '42.589.746/0006-11',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja06@pharmalife.com.br',
// 				telefone: '(48)8022-4006',
// 				endereco: 'Rua Dep Francisco Mascarenhas, 28, bairro Coqueiros, Florianópolis/SC CEP 88.018-551',
// 				latlng: [-27.6122212, -48.5899312],
// 			},
// 		];

// 		lojas.forEach((loja) => {
// 			const popupContent = (
// 				<div>
// 					<h5>{loja.fantasia}</h5>
// 					<p>Razão social: {loja.razaoSocial}</p>
// 					<p>CNPJ: {loja.cnpj}</p>
// 					<p>Email: {loja.email}</p>
// 					<p>Telefone: {loja.telefone}</p>
// 					<p>Endereço: {loja.endereco}</p>
// 				</div>
// 			);
// 			const popupHTML = renderToString(popupContent);
// 			L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
// 		});
// 	}, []);

// 	return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };




















//PAGINA DE  FORMULARIO MEDICAMENTO FUNCIONANDO

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './FormNovoMedicamento.css';

// export const FormNovoMedicamento = () => {

// 	//Salvar no localStorage

// 	const [nomeMedicamento, setNomeMedicamento] = useState('');
// 	const [laboratorio, setLaboratorio] = useState('');
// 	const [dosagem, setDosagem] = useState('');
// 	const [tipoMedicamento, setTipoMedicamento] = useState('');
// 	const [precoMedicamento, setPrecoMedicamento] = useState('');
// 	const [descricao, setDescricao] = useState('');

// 	const [formMedicamentoValue, setFormMedicamentoValue] = useState('');

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();

// 		const novamedicamento = {
// 			nomeMedicamento,
// 			laboratorio,
// 			dosagem,
// 			tipoMedicamento,
// 			precoMedicamento,
// 			descricao,
// 		}

// 		try {
// 			const formularioAtualizado = [...formMedicamentoValue, novamedicamento]
// 			setFormMedicamentoValue(formularioAtualizado)

// 			localStorage.setItem("dadosMedicamento", JSON.stringify(formularioAtualizado))

// 			console.log("Dados salvos com sucesso!")
// 			alert("Dados salvos com sucesso!");

// 			//função callback
// 			onMedicamentoAdd(novamedicamento);

// 		} catch (error) {
// 			console.log(error)
// 		}
// 	};

// 	return (
// 		<fieldset>
// 			<Form className="FormCadastro"
// 				onSubmit={handleFormSubmit}>
// 				<div className="form-group row">
// 					<Form.Group className="col-7" id="form_nome_medicamento">
// 						<Form.Label>Nome do medicamento</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={nomeMedicamento}
// 							onChange={e => setNomeMedicamento(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-5" id="form_laboratorio">
// 						<Form.Label>Laboratório</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={laboratorio}
// 							onChange={e => setLaboratorio(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-3" id="form_dosagem">
// 						<Form.Label>Dosagem</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={dosagem}
// 							onChange={e => setDosagem(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-6" id="form_tipomedicamento">
// 						<Form.Label>Tipo de Medicamento</Form.Label>
// 						<Form.Select
// 							aria-label="Selecione o tipo de medicamento"
// 							value={tipoMedicamento}
// 							onChange={(e) => setTipoMedicamento(e.target.value)}>
// 							<option value="">Selecione uma opção</option>
// 							<option value="Medicamento controlado">Medicamento controlado</option>
// 							<option value="Medicamento comum">Medicamento comum</option>

// 						</Form.Select>
// 					</Form.Group>

// 					<Form.Group className="col-3" id="form_preco">
// 						<Form.Label>Valor</Form.Label>
// 						<Form.Control
// 							type="number"
// 							value={precoMedicamento}
// 							onChange={e => setPrecoMedicamento(e.target.value)}
// 						// 	ref={inputRef}
// 						// 	value={value}
// 						// 	onInput={onInput}
// 						//  value={preco} onChange={handlePriceChange} onBlur={handlePriceBlur} 
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-12" id="form_descricao">
// 						<Form.Label>Descrição do Medicamento</Form.Label>
// 						<Form.Control
// 							type="textarea"
// 							value={descricao}
// 							onChange={e => setDescricao(e.target.value)} />
// 					</Form.Group>
// 				</div>

// 				<div className="d-flex justify-content-end">
// 					<Button
// 						className="btn-envio ms-auto"
// 						variant="success"
// 						type="submit"
// 						id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 				</div>
// 			</Form> <br /> <br /> <br />
// 		</fieldset>
// 	);
// }





















//PÁGINA MEDICAMENTOS FUNCIONANDO
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { Row, Col } from 'react-bootstrap';
// import { CardMedicamento } from '../../components/CardMedicamento/CardMedicamento';
// import caixaMedicamento from '../../components/CardMedicamento/Img/caixaMedicamento.png';
// import aspirina from '../../components/CardMedicamento/Img/aspirina.png';


// export const Medicamentos = () => {
	
// 	const medicamentos = [

// 		{
// 			medicamento: 'Desloratadina',
// 			laboratorio: 'Biosintética',
// 			dosagem: '5mg',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 49,71',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Aspirina',
// 			laboratorio: 'Bayer',
// 			dosagem: '500mg',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 10,80',
// 			imgSrc: aspirina
// 		},

// 		{
// 			medicamento: 'Ibuprofeno',
// 			laboratorio: 'Medley',
// 			dosagem: '400mg',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 14,70',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Dipirona Monoidratada',
// 			laboratorio: 'EMS',
// 			dosagem: '1g',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 17,20',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Paracetamol',
// 			laboratorio: 'Ache',
// 			dosagem: '750mg',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 8,50',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Rivotril',
// 			laboratorio: 'Roche',
// 			dosagem: '2,5mg/mL',
// 			tipo: 'Medicamento Controlado',
// 			preco: 'R$ 67,90',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Systane Complete',
// 			laboratorio: 'Alcon',
// 			dosagem: '10mL',
// 			tipo: 'Medicamento Normal',
// 			preco: 'R$ 52,60',
// 			imgSrc: caixaMedicamento
// 		},

// 		{
// 			medicamento: 'Hexomedine',
// 			laboratorio: 'Sanofi',
// 			dosagem: '0,5mg/mL',
// 			tipo: 'Medicamento Controlado',
// 			preco: 'R$ 74,30',
// 			imgSrc: caixaMedicamento
// 		},

// 	];
// 	return (
// 		<div className="container">
// 			<h1 className="title">Medicamentos</h1>

// 			<Row>
// 				{medicamentos.map((medicamento, index) => (
// 					<Col key={index} md={4}>
// 						<CardMedicamento {...medicamento} />
// 					</Col>
// 				))}
// 			</Row>
// 			<br /><br />
// 		</div>
// 	);
// };



























//RASCUNHO DO CADASTRO DE MEDICAMENTOS
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormNovoMedicamento.css';

export const FormNovoMedicamento = () => {

	//Salvar no localStorage

	const [nomeMedicamento, setNomeMedicamento] = useState('');
	const [laboratorio, setLaboratorio] = useState('');
	

	const [formMedicamentoValue, setFormMedicamentoValue] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const novamedicamento = {
			nomeMedicamento,
			laboratorio,
			
		}

		try {
			const formularioAtualizado = [...formMedicamentoValue, novamedicamento]
			setFormMedicamentoValue(formularioAtualizado)

			localStorage.setItem("dadosMedicamento", JSON.stringify(formularioAtualizado))

			console.log("Dados salvos com sucesso!")
			alert("Dados salvos com sucesso!");
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<fieldset>
			<Form className="FormCadastro"
				onSubmit={handleFormSubmit}>
				<div className="form-group row">
					<Form.Group className="col-7" id="form_nome_medicamento">
						<Form.Label>Nome do medicamento</Form.Label>
						<Form.Control
							type="text"
							value={nomeMedicamento}
							onChange={e => setNomeMedicamento(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-5" id="form_laboratorio">
						<Form.Label>Laboratório</Form.Label>
						<Form.Control
							type="text"
							value={laboratorio}
							onChange={e => setLaboratorio(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="d-flex justify-content-end">
					<Button
						className="btn-envio ms-auto"
						variant="success"
						type="submit"
						id="btn-cadastro">
						Enviar Cadastro
					</Button>
				</div>
			</Form> <br /> <br /> <br />
		</fieldset>
	);
}

























//VERSÃO DO MAPA QUE FUNCIONA

// import React, { useRef, useEffect } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';

// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {

// 	//VERSÃO QUE FUNCIONA

// 	const mapRef = useRef(null);

// 	useEffect(() => {
// 		// Renderiza o mapa na posição e com o zoom definidos
// 		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

// 		// Adiciona o tile layer do OpenStreetMap
// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// 			maxZoom: 18,
// 		}).addTo(map);

// 		// Adiciona marcadores para as lojas
// 		const lojas = [
// 			{
// 				cod: 'Loja 001',
// 				cnpj: '42.589.746/0001-00',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja01@pharmalife.com.br',
// 				telefone: '(48)8022-4000',
// 				endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
// 				latlng: [-27.5906434, -48.5506324]
// 			},

// 			{
// 				cod: 'Loja 002',
// 				cnpj: '42.589.746/0002-38',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja02@pharmalife.com.br',
// 				telefone: '(48)8022-4001',
// 				endereco: 'Rod Admar Gonzaga, 1022, bairro Itacorubi, Florianópolis/SC CEP 88.220-777',
// 				latlng: [-27.5866780, -48.4989027],
// 			},

// 			{
// 				cod: 'Loja 003',
// 				cnpj: '42.589.746/0003-43',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja03@pharmalife.com.br',
// 				telefone: '(48)8022-4002',
// 				endereco: 'Rod Francisco Magno Vieira, 211, bairro Campeche, Florianópolis/SC CEP 88.051-300',
// 				latlng: [-27.6620, -48.5013],
// 			},

// 			{
// 				cod: 'Loja 004',
// 				cnpj: '42.589.746/0004-14',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja04@pharmalife.com.br',
// 				telefone: '(48)8022-4004',
// 				endereco: 'Rua Lauro Linhares, 5757, bairro Trindade, Florianópolis/SC CEP 88.193-001',
// 				latlng: [-27.5887649, -48.5224589],
// 			},

// 			{
// 				cod: 'Loja 005',
// 				cnpj: '42.589.746/0005-62',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja05@pharmalife.com.br',
// 				telefone: '(48)8022-4005',
// 				endereco: 'Rua dos Navegantes, 57, bairro Estreito, Florianópolis/SC CEP 88.200-951',
// 				latlng: [-27.5851554, -48.5784047],
// 			},

// 			{
// 				cod: 'Loja 006',
// 				cnpj: '42.589.746/0006-11',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja06@pharmalife.com.br',
// 				telefone: '(48)8022-4006',
// 				endereco: 'Rua Dep Francisco Mascarenhas, 28, bairro Coqueiros, Florianópolis/SC CEP 88.018-551',
// 				latlng: [-27.6122212, -48.5899312],
// 			},
// 		];

// 		lojas.forEach((loja) => {
// 			const popupContent = (
// 				<div>
// 					<h5>{loja.fantasia}</h5>
// 					<p>Razão social: {loja.razaoSocial}</p>
// 					<p>CNPJ: {loja.cnpj}</p>
// 					<p>Email: {loja.email}</p>
// 					<p>Telefone: {loja.telefone}</p>
// 					<p>Endereço: {loja.endereco}</p>
// 				</div>
// 			);
// 			const popupHTML = renderToString(popupContent);
// 			L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
// 		});
// 	}, []);

// 	return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };










///VERSÃO DO FORMULARIO FARMACIA QUE FUNCIONA

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
// import './FormNovaFarmacia.css';
// import axios from 'axios';
// import { IMaskInput } from 'react-imask';



// export const FormNovaFarmacia = () => {

// 	const [razaoSocial, setRazaoSocial] = useState('');
// 	const [codLoja, setCodLoja] = useState('');
// 	const [fantasia, setFantasia] = useState('');
// 	const [CNPJ, setCNPJ] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [telefone, setTelefone] = useState('');
// 	const [cep, setCep] = useState('');
// 	const [logradouro, setLogradouro] = useState('');
// 	const [numero, setNumero] = useState('');
// 	const [complemento, setComplemento] = useState('');
// 	const [bairro, setBairro] = useState('');
// 	const [cidade, setCidade] = useState('');
// 	const [uf, setUf] = useState('');
// 	const [pais, setPais] = useState('');

// 	const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

// 	//Salvar no localStorage

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();

// 		const novafarmacia = {
// 			codLoja,
// 			razaoSocial,
// 			fantasia,
// 			CNPJ,
// 			email,
// 			telefone,
// 			cep,
// 			logradouro,
// 			numero,
// 			complemento,
// 			bairro,
// 			cidade,
// 			uf,
// 			pais,
// 		}

// 		try {
// 			const formularioAtualizado = [...formFarmaciaValue, novafarmacia]
// 			setFormFarmaciaValue(formularioAtualizado)

// 			localStorage.setItem("dadosFarmacia", JSON.stringify(formularioAtualizado))

// 			console.log("Dados salvos com sucesso!")
// 			alert("Dados salvos com sucesso!");
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	};


// 	//FUNÇÃO DE BUSCAO CEP NA API
// 	const buscarCep = () => {
// 		fetch(`https://viacep.com.br/ws/${cep}/json/`)
// 			.then((resposta) => resposta.json())
// 			.then((dados) => preencherEndereco(dados));
// 	};

// 	//FUNÇÃO DE PREENCHER OS DADOS DO FORMULÁRIO
// 	const preencherEndereco = (dados) => {
// 		setLogradouro(dados.logradouro)
// 		setBairro(dados.bairro)
// 		setCidade(dados.localidade)
// 		setUf(dados.uf)
// 		setPais(dados.pais)
// 	}

// 	//Limpar os campos dos inputs
// 	const limparDados = () => {
// 		setRazaoSocial("");
// 		setCodLoja("");
// 		setFantasia("");
// 		setCNPJ("");
// 		setEmail("");
// 		setTelefone("");
// 		setCep("");
// 		setLogradouro("");
// 		setNumero("");
// 		setComplemento("");
// 		setBairro("");
// 		setCidade("");
// 		setUf("");
// 		setPais("");
// 	}

// 	//Formulário

// 	return (
// 		<container className="container"
// 		// //TENTATIVA PARA PEGAR DO LOCALSTORAGE
// 		// CadastroFarmacia atualizarLojas={atualizarLojas}
// 		>

// 			<Form className="FormCadastro"
// 				onSubmit={handleFormSubmit}>
// 				<div className="form-group row">
// 					<Form.Group className="col-9" id="form_nome">
// 						<Form.Label>Razão Social</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={razaoSocial}
// 							onChange={e => setRazaoSocial(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-3" id="form_codigo">
// 						<Form.Label>Código da Loja</Form.Label>
// 						<Form.Control
// 							as={IMaskInput}
// 							mask="0000"
// 							value={codLoja}
// 							onChange={e => setCodLoja(e.target.value)} />
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-8" id="form_fantasia">
// 						<Form.Label>Nome Fantasia</Form.Label>
// 						<Form.Control type="textarea"
// 							value={fantasia}
// 							onChange={e => setFantasia(e.target.value)} />
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_CNPJ">
// 						<Form.Label>CNPJ</Form.Label>
// 						<Form.Control
// 							as={IMaskInput}
// 							mask="00.000.000/0000-00"
// 							inputMode="numeric"
// 							value={CNPJ}
// 							onChange={e => setCNPJ(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-8" id="form_email">
// 						<Form.Label>E-mail</Form.Label>
// 						<Form.Control type="email"
// 							value={email}
// 							onChange={e => setEmail(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_telefone">
// 						<Form.Label>Telefone Celular</Form.Label>
// 						<Form.Control
// 							type="tel"
// 							as={IMaskInput}
// 							mask="(00)00000-0000"
// 							value={telefone}
// 							onChange={e => setTelefone(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="row">
// 					<Form.Group className="col-3" id="form_cep">
// 						<Form.Label>CEP</Form.Label>
// 						<Form.Control
// 							as={IMaskInput}
// 							mask="00000000"
// 							value={cep}
// 							onChange={(e) => setCep(e.target.value)} />
// 					</Form.Group>

// 					<Form.Group className="col-2">
// 						<Button id="btnCep"
// 							onClick={buscarCep}
// 							variant="secondary">Buscar CEP</Button>
// 					</Form.Group>

// 					<Form.Group className="col-7" id="form_logradouro">
// 						<Form.Label>Logradouro</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={logradouro}
// 							onChange={e => setLogradouro(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<br />
// 				<div className="form-group row">
// 					<Form.Group className="col-3" id="form_numero">
// 						<Form.Label>Número</Form.Label>
// 						<Form.Control type="number"
// 							inputMode="numeric"
// 							value={numero}
// 							onChange={e => setNumero(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_complemento">
// 						<Form.Label>Complemento</Form.Label>
// 						<Form.Control type="text"
// 							value={complemento}
// 							onChange={e => setComplemento(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-5" id="form_bairro">
// 						<Form.Label>Bairro</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={bairro}
// 							onChange={e => setBairro(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-6" id="form_cidade">
// 						<Form.Label>Cidade</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={cidade}
// 							onChange={e => setCidade(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-2" id="form_uf">
// 						<Form.Label>Estado/UF</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={uf}
// 							onChange={e => setUf(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_pais">
// 						<Form.Label>País</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={pais}
// 							onChange={e => setPais(e.target.value)}
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="d-flex justify-content-end ">
// 					<Button
// 						className="btn-envio ms-auto"
// 						variant="secondary"
// 						id="btn-cadastro"
// 						onClick={limparDados}>
// 						Limpar Dados
// 					</Button>

// 					<Button
// 						className="btn-envio ms-auto"
// 						variant="success"
// 						type="submit"
// 						id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 				</div>
// 			</Form>

// 			{/* Ajuste para o footer não ficar sobrepondo o conteudo da página. */}
// 			<br /><br /><br />
// 		</container>
// 	);
// }

















// import React, { useRef, useEffect, useState } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';

// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {

// 	const lojasSalvas = JSON.parse(localStorage.getItem('dadosFarmacia')) || [];
// 	const mapRef = useRef(null);

// 	useEffect(() => {

// 		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

// 		// Adiciona o tile layer do OpenStreetMap
// 		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// 			maxZoom: 18,
// 		}).addTo(map);

// 		// Adiciona marcadores para as lojas
// 		const lojas = JSON.parse(localStorage.getItem('dadosFarmacia')) || []
// 		[
// 			{
// 				cod: 'Loja 001',
// 				cnpj: '42.589.746/0001-00',
// 				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 				fantasia: 'PharmaLife',
// 				email: 'contatoloja01@pharmalife.com.br',
// 				telefone: '(48)8022-4000',
// 				endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
// 				latlng: [-27.5906434, -48.5506324]
// 			},

// 		].concat(lojasSalvas) || [];

// 		lojas.forEach((loja) => {
// 			const endereco = `${loja.endereco} ${loja.cidade} ${loja.estado}`;
// 			fetch(`https://nominatim.openstreetmap.org/search?q=${endereco}&format=jsonv2`)
// 				.then(response => response.json())
// 				.then((data) => {
// 					const latlng = [data[0].lat, data[0].lon];
// 					loja.latlng = latlng;
// 					setLojas([...lojas, loja]);
// 				})
// 				.catch((error) => {
// 					console.log(error);

// 				});

// 			const popupContent = (
// 				<div>
// 					<h5>{loja.fantasia}</h5>
// 					<p>Razão social: {loja.razaoSocial}</p>
// 					<p>CNPJ: {loja.cnpj}</p>
// 					<p>Email: {loja.email}</p>
// 					<p>Telefone: {loja.telefone}</p>
// 					<p>Endereço: {loja.endereco}</p>
// 				</div>
// 			);
// 			const popupHTML = renderToString(popupContent);
// 			L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
// 		});
// 	}, []);


// 	//VERSÃO ANTERIOR QUE FUNCIONA
// 	return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };

































///VERSÃO DO MAPA QUE TEM ALGUNS ERROS DE SINTAXE

import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';

import 'leaflet/dist/leaflet.css';
import './Mapa.css';

//IMPORTANDO COMPONENTE DE CADASTRO DE FARMACIA NA TENTATIVA DE RENDERIZAR
// import { FormNovaFarmacia } from '../FormNovaFarmacia/FormNovaFarmacia';

export const Mapa = () => {

	//TENTATIVAAAAA
	//PARA PEGAR DADOS NO LOCAL STORAGE E RENDERIZAR
	const lojasSalvas = JSON.parse(localStorage.getItem('dadosFarmacia')) || [];

	//VERSÃO QUE FUNCIONA

	const mapRef = useRef(null);

	useEffect(() => {

		//TENTATIVAAAAAAA
		// Recupera os dados do localStorage e atualiza o estado

		// Renderiza o mapa na posição e com o zoom definidos
		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

		// Adiciona o tile layer do OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);

		// Adiciona marcadores para as lojas
		const lojas = JSON.parse(localStorage.getItem('dadosFarmacia')) || []
		[
			{
				cod: 'Loja 001',
				cnpj: '42.589.746/0001-00',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja01@pharmalife.com.br',
				telefone: '(48)8022-4000',
				endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
				latlng: [-27.5906434, -48.5506324]
			},

			{
				cod: 'Loja 002',
				cnpj: '42.589.746/0002-38',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja02@pharmalife.com.br',
				telefone: '(48)8022-4001',
				endereco: 'Rod Admar Gonzaga, 1022, bairro Itacorubi, Florianópolis/SC CEP 88.220-777',
				latlng: [-27.5866780, -48.4989027],
			},

			{
				cod: 'Loja 003',
				cnpj: '42.589.746/0003-43',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja03@pharmalife.com.br',
				telefone: '(48)8022-4002',
				endereco: 'Rod Francisco Magno Vieira, 211, bairro Campeche, Florianópolis/SC CEP 88.051-300',
				latlng: [-27.6620, -48.5013],
			},

			{
				cod: 'Loja 004',
				cnpj: '42.589.746/0004-14',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja04@pharmalife.com.br',
				telefone: '(48)8022-4004',
				endereco: 'Rua Lauro Linhares, 5757, bairro Trindade, Florianópolis/SC CEP 88.193-001',
				latlng: [-27.5887649, -48.5224589],
			},

			{
				cod: 'Loja 005',
				cnpj: '42.589.746/0005-62',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja05@pharmalife.com.br',
				telefone: '(48)8022-4005',
				endereco: 'Rua dos Navegantes, 57, bairro Estreito, Florianópolis/SC CEP 88.200-951',
				latlng: [-27.5851554, -48.5784047],
			},

			{
				cod: 'Loja 006',
				cnpj: '42.589.746/0006-11',
				razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
				fantasia: 'PharmaLife',
				email: 'contatoloja06@pharmalife.com.br',
				telefone: '(48)8022-4006',
				endereco: 'Rua Dep Francisco Mascarenhas, 28, bairro Coqueiros, Florianópolis/SC CEP 88.018-551',
				latlng: [-27.6122212, -48.5899312],
			},
		]

		lojas.forEach((loja) => {
			const endereco = `${loja.endereco} ${loja.cidade} ${loja.estado}`;
			fetch(`https://nominatim.openstreetmap.org/search?q=${endereco}&format=jsonv2`)
				.then(response => response.json())
				.then((data) => {
					const latlng = [data[0].lat, data[0].lon];
					loja.latlng = latlng;
					setLojas([...lojas, loja]);
				})
				.catch((error) => {
					console.log(error);

				});

			const popupContent = (
				<div>
					<h5>{loja.fantasia}</h5>
					<p>Razão social: {loja.razaoSocial}</p>
					<p>CNPJ: {loja.cnpj}</p>
					<p>Email: {loja.email}</p>
					<p>Telefone: {loja.telefone}</p>
					<p>Endereço: {loja.endereco}</p>
				</div>
			);
			const popupHTML = renderToString(popupContent);
			L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
		});
	}, []);


	//VERSÃO ANTERIOR QUE FUNCIONA
	return <div style={{ height: '300px' }} ref={mapRef}></div>;
};











































// //CÓDIGO DO BRUNO PARA SALVAR DADOS NO LOCAL STORAGE


// function salvarDados(){
// 	// set no localStorage

// 	// criar uma lista de endereco
// 	let listaEndereco = recuperarDados()

// 	listaEndereco.push(endereco)

// 	// 1 - o nome da variável
// 	// 2 - os dados a serem armazenados nessa variável
// 	// 2.1 - você precisa converter esse valor para json
// 	localStorage.setItem("listaEndereco", JSON.stringify(listaEndereco))
// }
// function recuperarDados(){
// 	// get no localStorage
// 	return JSON.parse(localStorage.getItem("listaEndereco")) || []
// // }
// useEffect(() => {
// 	if(!!endereco.logradouro){
// 		salvarDados()
// 	}
// }, [endereco])








// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useState } from 'react';
// import './FormNovaFarmacia.css';
// import axios from 'axios';
// import { IMaskInput } from 'react-imask';

// export const FormNovaFarmacia = () => {

// 	const [razaoSocial, setRazaoSocial] = useState('');
// 	const [codLoja, setCodLoja] = useState('');
	
// 	const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

// 	//Salvar no localStorage

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();

// 		const novafarmacia = {
// 			codLoja,
// 			razaoSocial,
// 		}

// 		try {
// 			const formularioAtualizado = [...formFarmaciaValue, novafarmacia]
// 			setFormFarmaciaValue(formularioAtualizado)

// 			localStorage.setItem("dadosFarmacia", JSON.stringify(formularioAtualizado))

// 			console.log("Dados salvos com sucesso!")
// 			alert("Dados salvos com sucesso!");
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	};

	
// 	//Formulário

// 	return (
// 		<container className="container">
// 			<Form className="FormCadastro"
// 				onSubmit={handleFormSubmit}>
// 				<div className="form-group row">
// 					<Form.Group className="col-9" id="form_nome">
// 						<Form.Label>Razão Social</Form.Label>
// 						<Form.Control
// 							type="text"
// 							value={razaoSocial}
// 							onChange={e => setRazaoSocial(e.target.value)}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-3" id="form_codigo">
// 						<Form.Label>Código da Loja</Form.Label>
// 						<Form.Control
// 							as={IMaskInput}
// 							mask="0000"
// 							value={codLoja}
// 							onChange={e => setCodLoja(e.target.value)} />
// 					</Form.Group>
				

// 					<Button
// 						className="btn-envio ms-auto"
// 						variant="success"
// 						type="submit"
// 						id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 				</div>
// 			</Form>

// 		</container>
// 	);
// }













// ///PARCIAL DO MAPA FUNCIONANDO PARA O AUXILIO


// import React, { useRef, useEffect, useState } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';

// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {

// const mapRef = useRef(null);

// useEffect(() => {

// 	// Renderiza o mapa na posição e com o zoom definidos
// 	const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

// 	// Adiciona o tile layer do OpenStreetMap
// 	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// 		maxZoom: 18,
// 	}).addTo(map);

// 	// Adiciona marcadores para as lojas
// 	const lojas = [
// 		{
// 			cod: 'Loja 001',
// 			cnpj: '42.589.746/0001-00',
// 			razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 			fantasia: 'PharmaLife',
// 			email: 'contatoloja01@pharmalife.com.br',
// 			telefone: '(48)8022-4000',
// 			endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
// 			latlng: [-27.5906434, -48.5506324]
// 		},

// 		{
// 			cod: 'Loja 002',
// 			cnpj: '42.589.746/0002-38',
// 			razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// 			fantasia: 'PharmaLife',
// 			email: 'contatoloja02@pharmalife.com.br',
// 			telefone: '(48)8022-4001',
// 			endereco: 'Rod Admar Gonzaga, 1022, bairro Itacorubi, Florianópolis/SC CEP 88.220-777',
// 			latlng: [-27.5866780, -48.4989027],
// 		},


// 	lojas.forEach((loja) => {
// 		const popupContent = (
// 			<div>
// 				<h5>{loja.fantasia}</h5>
// 				<p>Razão social: {loja.razaoSocial}</p>
// 				<p>CNPJ: {loja.cnpj}</p>
// 				<p>Email: {loja.email}</p>
// 				<p>Telefone: {loja.telefone}</p>
// 				<p>Endereço: {loja.endereco}</p>
// 			</div>
// 		);
// 		const popupHTML = renderToString(popupContent);
// 		L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
// 	});
// }, []);

// return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };









// //PÁGINA DO MAPA



// import React, { useRef, useEffect } from 'react';
// import L from 'leaflet';
// import { renderToString } from 'react-dom/server';

// import 'leaflet/dist/leaflet.css';
// import './Mapa.css';

// export const Mapa = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Renderiza o mapa na posição e com o zoom definidos
//     const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

//     // Adiciona o tile layer do OpenStreetMap
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//       maxZoom: 18,
//     }).addTo(map);

//     // Adiciona marcadores para as lojas
//     const lojas = [
    

// 				{
// 					cod: 'Loja 004',
// 					cnpj: '42.589.746/0004-14',
// 					razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
					
// 				},

// 				{
// 					cod: 'Loja 005',
// 					cnpj: '42.589.746/0005-62',
// 					razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
					
// 				},

// 				{
// 					cod: 'Loja 006',
// 					cnpj: '42.589.746/0006-11',
// 					razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
					
// 				},
//     ];

//     lojas.forEach((loja) => {
//       const popupContent = (
//         <div>
//           <h5>{loja.fantasia}</h5>
//           <p>Razão social: {loja.razaoSocial}</p>
//           <p>CNPJ: {loja.cnpj}</p>
          
//         </div>
//       );
//       const popupHTML = renderToString(popupContent);
//       L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
//     });
//   }, []);

//   return <div style={{ height: '300px' }} ref={mapRef}></div>;
// };










// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';
// // import React, { useState, useEffect } from 'react';
// // import './FormNovaFarmacia.css';
// // import axios from 'axios';

// // export const FormNovaFarmacia = ()=> {

// // 	const [cnpj, setCNPJ] = useState('');
// // 	const [cep, setCep] = useState('');
	
// // 	//Salvar no localStorage

// // 	const [razaoSocial, setRazaoSocial] = useState("");
// //   const [codigo, setCodigo] = useState("");

// //   const handleFormSubmit = (event) => {
// //     event.preventDefault();
// //     localStorage.setItem("razaoSocial", razaoSocial);
// //     localStorage.setItem("codigo", codigo);
// //     alert("Dados salvos com sucesso!");
// //   };

// //   const handleRazaoSocialChange = (event) => {
// //     setRazaoSocial(event.target.value);
// //   };

// //   const handleCodigoChange = (event) => {
// //     setCodigo(event.target.value);
// //   };


// // 	//Função para utilização da API de CEP
// // 	const [endereco, setEndereco] = useState();

// //   const [formulario, setFormulario] = useState({
// //     cep: "",
// //   });

// //   const atualizarCampo = (campo, valor) => {
// //     const novosDados = { ...formulario, [campo]: valor };
// //     setFormulario(novosDados);
// // 		console.log(novosDados)
// //   };

// //   const buscarCep = () => {
// //     fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
// //       .then((resposta) => resposta.json())
// //       .then((dados) => setEndereco(dados));
// //   };

	
// // 	//Formulário

// //   return (		
// // 		<container className="container">
// // 			<Form className="FormCadastro"
// // 			onSubmit={handleFormSubmit}>
// // 				<div className="form-group row">
// // 					<Form.Group className="col-9" id="form_nome">
// // 						<Form.Label>Razão Social</Form.Label>
// // 						<Form.Control 
// // 						type="text" 
// // 						value={razaoSocial} 
// // 						onChange={handleRazaoSocialChange} />
// // 					</Form.Group>

// // 				</div>

// // 				<div className="row">
// // 					<Form.Group className="col-2" id="form_cep">
// // 						<Form.Label>CEP</Form.Label>
// // 						<Form.Control 
// // 						type="text"
// // 						value={formulario.cep}
// // 						onChange={(evento) => atualizarCampo("cep", evento.target.value)} />
// // 					</Form.Group>

// // 					<Form.Group className="col-2">
// // 						<Button id="btnCep" 
// // 						onClick={buscarCep} 
// // 						variant="secondary">Buscar CEP</Button>
// // 					</Form.Group>

// // 					<Form.Group className="col-8" id="form_logradouro">
// // 						<Form.Label>Logradouro</Form.Label>
// // 						<Form.Control 
// // 						type="text"
// // 						value={endereco?.logradouro} readOnly 
// // 						/>
// // 					</Form.Group>
// // 				</div>
// // 					<Form.Group className="col-5" id="form_bairro">
// // 						<Form.Label>Bairro</Form.Label>
// // 						<Form.Control 
// // 						type="text"
// // 						value={endereco?.bairro} readOnly 
// // 						/>
// // 					</Form.Group>
				
// // 				<div className="d-flex justify-content-end ">		
// // 					<Button 
// // 					className="btn-envio ms-auto"
// // 					variant="success"
// // 					type="submit"
// // 					id="btn-cadastro">
// // 						Enviar Cadastro
// // 					</Button>
// // 				</div>
// // 			</Form>

// // 			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
// // 			<br /><br /><br />
// // 		</container>
// //   );
// // }


































// // // import Button from 'react-bootstrap/Button';
// // // import Form from 'react-bootstrap/Form';
// // // import React, { useState, useEffect } from 'react';
// // // import './FormNovaFarmacia.css';
// // // import axios from 'axios';

// // // export const FormNovaFarmacia = ()=> {

// // // 	//Função para o campo CNPJ fique no formato correto
// // // 	// const [codLoja, setCodLoja] = useState('');
// // // 	const [cnpj, setCNPJ] = useState('');
// // // 	// const [razaoSocial, setRazaoSocial] = useState('');
// // // 	// const [fantasia, setFantasia] = useState('');
// // // 	// const [email, setEmail] = useState('');
// // // 	// const [telefone, setTelefone] = useState('');
// // // 	const [cep, setCep] = useState('');
// // // 	// const [logradouro, setLogradouro] = useState('');
// // // 	// const [numero, setNumero] = useState('');
// // // 	// const [complemento, setComplemento] = useState('');
// // // 	// const [bairro, setBairro] = useState('');
// // // 	// const [cidade, setCidade] = useState('');
// // // 	// const [uf, setUf] = useState('');
// // // 	// const [pais, setPais] = useState('');
// // // 	// const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

// // // 	//Salvar no localStorage





	

// // // // 	versão 3

// // // // 	const [validated, setValidated] = useState(false);

// // // // 	const [formValues, setFormValues] = useState({});
// // // //   const handleChange = (event) => {
// // // //     setFormValues({ ...formValues, [event.target.name]: event.target.value });
// // // //     console.log(formValues);
// // // //   };

// // // //   const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);

// // // // 	function handleSubmit(event) {
// // // //     event.preventDefault();
// // // //     event.stopPropagation();
// // // //     const form = event.currentTarget;
// // // //     if (form.checkValidity() === false) {
// // // //         setValidated(true);
// // // //     } else {
// // // //         setValidated(false);
// // // //         localStorage.setItem(`Form_${Key}`, JSON.stringify(formValues));
// // // //         setKey(Math.floor(Math.random() * 10000) + 1);
// // // //         form.reset();
// // // //     }
// // // // }




// // // 	//VERSÃO2

// // // 	// const [formValues, setFormValues] = useState({});
// // //   // const handleChange = (event) => {
// // //   //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
// // //   //   console.log(formValues);
// // //   // };

// // //   // const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);

// // //   // useEffect(() => {
// // //   //   localStorage.setItem(`Form_${key}`, JSON.stringify(formValues));
// // //   // }, [formValues, key]);

// // //   // const handleSaveToLocalStorage = () => {
// // //   //   localStorage.setItem(`Form_${key}`, JSON.stringify(formValues));
// // //   //   setKey(Math.floor(Math.random() * 10000) + 1);
// // //   // };



// // // 	//VERSÃO1

// // // 	// const [formValues, setFormValues] = useState({});
// // // 	// const handleChange = (event) => {
// // //   // 	setFormValues({ ...formValues, [event.target.name]: event.target.value });
// // // 	// console.log(formValues)
// // // 	// };

// // // 	// const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);
	

// // // 	// useEffect(() => {
// // // 	// 	localStorage.setItem(`form_${key}`, JSON.stringify(formValues));

// // // 	// }, [formValues, key]);


// // // 	// function handleSubmit(e){
// // // 	// 	e.preventDefault()
// // // 	// 	localStorage.setItem(Key, JSON.stringify(formValues));
// // // 	// 	setKey(Math.floor(Math.random() * 10000) + 1);
// // // 	// }
	

// // // 	//Máscara CNPJ
// // // 	function handleCNPJChange(event) {
// // // 		const numCNPJ = event.target.value.replace(/\D/g, '').substring(0, 14);
// // // 		setCNPJ(numCNPJ);
// // // 	}

// // // 	//Função para utilização da API de CEP
// // // 	const [endereco, setEndereco] = useState();

// // //   const [formulario, setFormulario] = useState({
// // //     cep: "",
// // //   });

// // //   const atualizarCampo = (campo, valor) => {
// // //     const novosDados = { ...formulario, [campo]: valor };
// // //     setFormulario(novosDados);
// // // 		console.log(novosDados)
// // //   };

// // //   const buscarCep = () => {
// // //     fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
// // //       .then((resposta) => resposta.json())
// // //       .then((dados) => setEndereco(dados));
// // //   };

	
// // // 	//Formulário

// // //   return (		
// // // 		<container className="container">
// // // 			<Form className="FormCadastro">
// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-9" id="form_nome">
// // // 						<Form.Label>Razão Social</Form.Label>
// // // 						<Form.Control type="text" 
// // // 						onChange={handleChange} 
// // // 						value={formValues.razaoSocial || ''}/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-3" id="form_codigo">
// // // 						<Form.Label>Código da Loja</Form.Label>
// // // 						<Form.Control 
// // // 						type="number" 
// // // 						inputMode="numeric" 
// // // 						onChange={handleChange}
// // // 						value={formValues.codLoja || ''}/>
// // // 					</Form.Group>
// // // 				</div>

// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-8" id="form_fantasia">
// // // 						<Form.Label>Nome Fantasia</Form.Label>
// // // 						<Form.Control type="textarea" 
// // // 						onChange={handleChange}
// // // 						value={formValues.fantasia || ''}/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-4" id="form_cnpj">
// // // 						<Form.Label>CNPJ</Form.Label>
// // // 						<Form.Control 
// // // 							type="text"
// // // 							maxLength={18}
// // // 							pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
// // // 							value={cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')}
// // // 							onChange={handleCNPJChange} 
// // // 						/>
// // // 					</Form.Group>
// // // 				</div>

// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-8" id="form_email">
// // // 						<Form.Label>E-mail</Form.Label>
// // // 						<Form.Control type="email" 
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-4" id="form_telefone">
// // // 						<Form.Label>Telefone Celular</Form.Label>
// // // 						<Form.Control type="tel" 
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>
// // // 				</div>

// // // 				<div className="row">
// // // 					<Form.Group className="col-2" id="form_cep">
// // // 						<Form.Label>CEP</Form.Label>
// // // 						<Form.Control 
// // // 						type="text"
// // // 						value={formulario.cep}
// // // 						onChange={(evento) => atualizarCampo("cep", evento.target.value)} />
// // // 					</Form.Group>

// // // 					<Form.Group className="col-2">
// // // 						<Button id="btnCep" 
// // // 						onClick={buscarCep} 
// // // 						variant="secondary">Buscar CEP</Button>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-8" id="form_logradouro">
// // // 						<Form.Label>Logradouro</Form.Label>
// // // 						<Form.Control 
// // // 						type="text"
// // // 						value={endereco?.logradouro} readOnly 
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>
// // // 				</div>

// // // 				<br />
// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-3" id="form_numero">
// // // 						<Form.Label>Número</Form.Label>
// // // 						<Form.Control type="number" 
// // // 						inputMode="numeric"
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-4" id="form_complemento">
// // // 						<Form.Label>Complemento</Form.Label>
// // // 						<Form.Control type="text" 
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-5" id="form_bairro">
// // // 						<Form.Label>Bairro</Form.Label>
// // // 						<Form.Control 
// // // 						type="text"
// // // 						value={endereco?.bairro} readOnly 
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>
// // // 				</div>
				
// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-6" id="form_cidade">
// // // 						<Form.Label>Cidade</Form.Label>
// // // 						<Form.Control 
// // // 						type="text"
// // // 						value={endereco?.localidade} readOnly
// // // 						onChange={handleChange} />
// // // 					</Form.Group>

// // // 					<Form.Group className="col-2" id="form_uf">
// // // 						<Form.Label>Estado/UF</Form.Label>
// // // 						<Form.Control 
// // // 						type="text"
// // // 						value={endereco?.uf} readOnly
// // // 						onChange={handleChange}
// // // 						/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-4" id="form_pais">
// // // 						<Form.Label>País</Form.Label>
// // // 						<Form.Control type="text"
// // // 						onChange={handleChange}/>
// // // 					</Form.Group>
// // // 				</div>


// // // 				<div className="d-flex justify-content-end ">		
// // // 					<Button 
// // // 					className="btn-envio ms-auto"
// // // 					variant="success"
// // // 					type="submit"
// // // 					id="btn-cadastro">
// // // 						Enviar Cadastro
// // // 					</Button>
// // // 				</div>
// // // 			</Form>

// // // 			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
// // // 			<br /><br /><br />
// // // 		</container>
// // //   );
// // // }













// // // //RASCUNHO


// // // import Button from 'react-bootstrap/Button';
// // // import Form from 'react-bootstrap/Form';
// // // import React, { useState, useEffect } from 'react';
// // // import './FormNovaFarmacia.css';
// // // import axios from 'axios';

// // // export const FormNovaFarmacia = ()=> {
	

// // // 	//Formulário

// // //   return (		
// // // 		<container className="container">
// // // 			<Form className="FormCadastro">
// // // 				<div className="form-group row">
// // // 					<Form.Group className="col-9" id="form_nome">
// // // 						<Form.Label>Razão Social</Form.Label>
// // // 						<Form.Control type="text" 
// // // 						/>
// // // 					</Form.Group>

// // // 					<Form.Group className="col-3" id="form_codigo">
// // // 						<Form.Label>Código da Loja</Form.Label>
// // // 						<Form.Control 
// // // 						type="number" 
// // // 						inputMode="numeric" 
// // // 						/>
// // // 					</Form.Group>
// // // 				</div>

// // // 				<div className="d-flex justify-content-end ">		
// // // 					<Button 
// // // 					className="btn-envio ms-auto"
// // // 					variant="success"
// // // 					type="submit"
// // // 					id="btn-cadastro">
// // // 						Enviar Cadastro
// // // 					</Button>
// // // 				</div>
// // // 			</Form>

// // // 			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
// // // 			<br /><br /><br />
// // // 		</container>
// // //   );
// // // }
