import React from 'react';
import { Button } from 'react-bootstrap';

export const BtnCadastro = () => {
  return (
    <div className="d-grid gap-4">
      <Button variant="outline-dark" size="lg">
        Nova Farmácia
      </Button>
      <Button variant="outline-dark" size="lg">
        Novo Medicamento
      </Button>
    </div>
  );
}

