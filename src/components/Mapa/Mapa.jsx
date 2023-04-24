import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FarmaciasContext } from '../Context/ContextFarmacias';

export function Mapa() {
	const position = [-27.6098621, -48.5483225];
	const { lojas } = useContext(FarmaciasContext);

	return (
		<MapContainer center={position} zoom={12} style={{ height: '350px' }}>

			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{lojas.map((loja) => (
				<Marker position={[loja.latitude, loja.longitude]} key={loja.cod}>
					<Popup>
						<div>
							<h5>{loja.fantasia}</h5>
							<p>Razão social: {loja.razaoSocial}</p>
							<p>CNPJ: {loja.CNPJ}</p>
							<p>Email: {loja.email}</p>
							{loja.telefone && <p>Telefone: {loja.telefone}</p>}
							<p>Celular: {loja.celular}</p>
							<p>Endereço: {loja.endereco}</p>
						</div>
					</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}