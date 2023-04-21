//VERSÃO DO MAPA QUE FUNCIONA

import React, { useRef, useEffect, useContext } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';
import { FarmaciasContext } from '../Context/ContextFarmacias';

export const Mapa = () => {

	const { farmacias } = useContext(FarmaciasContext);

	// //Para pegar dados do LocalStorage
	// const [farmacias, setFarmacias] = useState([...lojasIniciais]);//jogar no context

	// useEffect(() => { //context
	// 	const dadosFarmacia = localStorage.getItem('dadosFarmacia');
	// 	if (dadosFarmacia) {
	// 		const farmaciasLocalStorage = JSON.parse(dadosFarmacia);
	// 		setFarmacias([...lojasIniciais, ...farmaciasLocalStorage]);
	// 	}

	//}, [];

	const mapRef = useRef(null);

	useEffect(() => {
		// Renderiza o mapa na posição e com o zoom definidos
		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

		// Adiciona o tile layer do OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);


		farmacias.forEach((loja) => {
			const popupContent = (
				<div>
					<h5>{loja.fantasia}</h5>
					<p>Razão social: {loja.razaoSocial}</p>
					<p>CNPJ: {loja.CNPJ}</p>
					<p>Email: {loja.email}</p>
					<p>Telefone: {loja.telefone}</p>
					<p>Endereço: {loja.endereco}</p>
				</div>
			);
			const popupHTML = renderToString(popupContent);
			L.marker([loja.latitude, loja.longitude]).addTo(map).bindPopup(popupHTML);
		});

	}, []);

	return <div style={{ height: '300px' }} ref={mapRef}></div>;
};
