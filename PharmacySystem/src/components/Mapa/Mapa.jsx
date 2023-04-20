//VERSÃO DO MAPA QUE FUNCIONA

import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';

import 'leaflet/dist/leaflet.css';
import './Mapa.css';

export const Mapa = () => {

	//VERSÃO QUE FUNCIONA

	const mapRef = useRef(null);

	useEffect(() => {
		// Renderiza o mapa na posição e com o zoom definidos
		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

		// Adiciona o tile layer do OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);

		// Adiciona marcadores para as lojas
		const lojas = [
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
		];

		lojas.forEach((loja) => {
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

	return <div style={{ height: '300px' }} ref={mapRef}></div>;
};











//TENTATIVA DE RENDERIZAÇÃO COM ERRO NA LAT

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
// 			...lojasSalvas
// 		];

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
