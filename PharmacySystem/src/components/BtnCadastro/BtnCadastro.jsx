import React from 'react';
import { Button } from 'react-bootstrap';

export const BtnCadastro = () => {
  return (
    <div className="d-grid gap-4">
      <Button href="/cadastronovafarmacia" variant="outline-secondary" size="lg">
        Nova Farmácia
      </Button>
      <Button href="/cadastronovomedicamento" variant="outline-secondary" size="lg">
        Novo Medicamento
      </Button>
    </div>
  );
}

