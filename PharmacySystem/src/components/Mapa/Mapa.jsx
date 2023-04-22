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
	const mapInstance = useRef(null);

	useEffect(() => {

		//ALTERAÇÃO INCLUIDA
		// Remove o mapa existente antes de inicializar um novo mapa
		if (mapInstance.current) {
			mapInstance.current.remove();
		}



		// Renderiza o mapa na posição e com o zoom definidos
		const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 11);

		// Adiciona o tile layer do OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 18,
		}).addTo(map);

		//ALTERAÇÃO INCLUIDA
		// Remove todos os marcadores do mapa
		map.eachLayer((layer) => {
			if (layer instanceof L.Marker) {
				layer.remove();
			}
		});



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

		mapInstance.current = map;
	}, [farmacias]);

	return <div style={{ height: '300px' }} ref={mapRef}></div>;
};














// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function Mapa({ dadosFormulario }) {
// 	const position = [-27.595202634079133, -48.580079726079106];

// 	return (
// 		<MapContainer
// 			center={position}
// 			zoom={13}
// 			scrollWheelZoom={false}
// 		>
// 			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// 			{Object.keys(dadosFormulario).map((indexLoja) => {
// 				const loja = dadosFormulario[indexLojaEmpresa];

// 				return (
// 					<Marker position={[loja.inputLatitude, loja.inputLongitude]}>
// 						<Popup>
// 							<b>Razão Social:</b> {loja.inputRazaoSocial} <br />
// 							<b>CNPJ:</b> {loja.inputCNPJ} <br />
// 							<b>Nome Fantasia:</b> {loja.inputFantasia} <br />
// 							<b>Email:</b> {loja.inputEmail} <br />
// 							<b>Telefone:</b> {loja.inputTelefone} <br />
// 							<b>Celular:</b> {loja.inputCelular} <br />
// 						</Popup>
// 					</Marker>
// 				);
// 			})}
// 		</MapContainer>
// 	);
// }














/// 
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // exemplo da documentação https://react-leaflet.js.org/
// // o detalhe importante: PRECISA adicionar uma classe do leaflet no index.css (mesmo que não vá usar)

// // .leaflet-container {
// //   width: 350px;
// //   height: 350px;
// // }

// // não testei com outros valores, mas sei que assim funciona

// export default function FarmaciasApp() {
// 	const position = [51.505, -0.09];

// 	return (
// 		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
// 			<TileLayer
// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
// 				url="https://%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
// 			/>
// 			<Marker position={position}>
// 				<Popup>
// 					A pretty CSS3 popup. <br /> Easily customizable.
// 				</Popup>
// 			</Marker>
// 		</MapContainer>
// 	);
// }























