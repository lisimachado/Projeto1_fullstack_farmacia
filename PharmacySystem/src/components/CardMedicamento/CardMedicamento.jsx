import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import caixaMedicamento from './Img/caixaMedicamento.png';

export const CardMedicamento = ({ nomeMedicamento, dosagem, precoMedicamento, laboratorio, tipoMedicamento, descricao }) => {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(true);
	};

	return (
		<Card className="bg-light my-3">
			<Card.Body>
				<Card.Title>{nomeMedicamento}</Card.Title>
				<Card.Text>Laboratório: {laboratorio}</Card.Text>
				<Card.Text>Preço: R${precoMedicamento}</Card.Text>
				<Button variant="secondary" size="sm" onClick={handleModal} style={{ backgroundColor: '#b06d5a', border: 'none' }}>Mais detalhes</Button>
			</Card.Body>

			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{nomeMedicamento}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img variant="top" src={caixaMedicamento} style={{ width: '200px', margin: 'auto' }} />
					<h5>Dosagem: {dosagem}</h5>
					<h5>{tipoMedicamento}</h5>
					<p>{descricao}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" size="sm" onClick={() => setShowModal(false)}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	);
};









// import React from 'react';
// import { Card } from 'react-bootstrap';
// import caixaMedicamento from './Img/caixaMedicamento.png';

// export const CardMedicamento = ({ nomeMedicamento, dosagem, precoMedicamento, laboratorio, tipoMedicamento, descricao }) => {
// 	return (
// 		<Card className="bg-light my-3">
// 			<Card.Img variant="top" src={caixaMedicamento} style={{ width: '200px', margin: 'auto' }} />
// 			<Card.Body>
// 				<Card.Title>{nomeMedicamento}</Card.Title>
// 				<Card.Text>Laboratório: {laboratorio}</Card.Text>
// 				<Card.Text>Dosagem: {dosagem}</Card.Text>
// 				<Card.Text>Tipo: {tipoMedicamento}</Card.Text>
// 				<Card.Text>Preço: R${precoMedicamento}</Card.Text>
// 				<Card.Text>Descrição: {descricao}</Card.Text>
// 			</Card.Body>
// 		</Card>
// 	);
// };

