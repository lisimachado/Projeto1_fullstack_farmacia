import React from 'react';
import { Card } from 'react-bootstrap';

export const CardMedicamento = ({ medicamento, dosagem, preco, laboratorio, imgSrc, tipo}) => {
  return (
    <Card className="bg-light my-3">
      <Card.Img variant="top" src={imgSrc} style={{ width: '200px', margin: 'auto' }}/>
			<Card.Body>
        <Card.Title>{medicamento}</Card.Title>
				<Card.Text>Laboratório: {laboratorio}</Card.Text>
        <Card.Text>Dosagem: {dosagem}</Card.Text>
				<Card.Text>Tipo: {tipo}</Card.Text>
				<Card.Text>Preço: {preco}</Card.Text>
      </Card.Body>
    </Card>
  );
};

