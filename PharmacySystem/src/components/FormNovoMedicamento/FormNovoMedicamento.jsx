import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormNovoMedicamento.css';

import React, { useState } from 'react';

export const FormNovoMedicamento = ()=> {

	const [preco, setPreco] = useState('');

	function handlePriceChange(event) {
    setPreco(event.target.value);
  }

  function handlePriceBlur(event) {
    const value = event.target.value;
    const formato = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const formatoPreco = formato.format(value);
    setPreco(formatoPreco);
  }
  return (		

		<Form className="FormCadastro">
			<div className="form-group row">
				<Form.Group className="col-7" id="form_nome_medicamento">
					<Form.Label>Nome do medicamento</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-5" id="form_laboratorio">
					<Form.Label>Laboratório</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-4" id="form_dosagem">
					<Form.Label>Dosagem do medicamento</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-8" id="form_descricao">
					<Form.Label>Descrição do Medicamento</Form.Label>
					<Form.Control type="textarea" />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-4" id="form_preco">
				<Form.Label>Valor</Form.Label>
				<Form.Control type="text" value={preco} onChange={handlePriceChange} onBlur={handlePriceBlur}/>
				</Form.Group>

				<Form.Group className="col-8" id="form_tipomedicamento">
					<Form.Label>Tipo de Medicamento</Form.Label>
					<Form.Select aria-label="Selecione o tipo de medicamento">
						<option value="">Selecione uma opção</option>
						<option value="controlado">Medicamento controlado</option>
						<option value="comum">Medicamento comum</option>
					</Form.Select>
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
    </Form>
  );
	}
