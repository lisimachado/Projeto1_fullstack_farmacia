import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './FormNovaFarmacia.css';
import axios from 'axios';

export const FormNovaFarmacia = ()=> {

	//Função para o campo CNPJ fique no formato correto
	const [cnpj, setCNPJ] = useState('');

	function handleCNPJChange(event) {
		const numCNPJ = event.target.value.replace(/\D/g, '').substring(0, 14);
		setCNPJ(numCNPJ);
	}





	//Função para utilização da API de CEP
	const [endereco, setEndereco] = useState();

  const [formulario, setFormulario] = useState({
    cep: "",
  });

  const atualizarCampo = (campo, valor) => {
    const novosDados = { ...formulario, [campo]: valor };
    setFormulario(novosDados);
  };

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => setEndereco(dados));
  };

	







  return (		

		<Form className="FormCadastro">
			<div className="form-group row">
				<Form.Group className="col-9" id="form_nome">
					<Form.Label>Razão Social</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-3" id="form_codigo">
					<Form.Label>Código da Loja</Form.Label>
					<Form.Control type="number" inputMode="numeric"/>
				</Form.Group>
				
			</div>

			<div className="form-group row">
				<Form.Group className="col-8" id="form_fantasia">
					<Form.Label>Nome Fantasia</Form.Label>
					<Form.Control type="textarea" />
				</Form.Group>

				<Form.Group className="col-4" id="form_cnpj">
					<Form.Label>CNPJ</Form.Label>
					<Form.Control 
            type="text"
						maxLength={18}
						pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
						value={cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')}
						onChange={handleCNPJChange} 
          />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-8" id="form_email">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" />
				</Form.Group>

				<Form.Group className="col-4" id="form_telefone">
					<Form.Label>Telefone Celular</Form.Label>
					<Form.Control type="tel" />
				</Form.Group>
			</div>

			<div className=" row">
				<Form.Group className="col-2" id="form_cep">
					<Form.Label>CEP</Form.Label>
					<Form.Control 
					type="text"
          value={formulario.cep}
          onChange={(evento) => atualizarCampo("cep", evento.target.value)} />
				</Form.Group>

				<Form.Group className="col-3">
					<Button id="btnCep" onClick={buscarCep} variant="secondary">Buscar Endereço</Button>
				</Form.Group>

				<Form.Group className="col-7" id="form_logradouro">
					<Form.Label>Logradouro</Form.Label>
					<Form.Control 
					type="text"
					value={endereco?.logradouro} readOnly />
				</Form.Group>
			</div>

			<br />
			<div className="form-group row">
				<Form.Group className="col-3" id="form_numero">
					<Form.Label>Número</Form.Label>
					<Form.Control type="number" inputMode="numeric"/>
				</Form.Group>

				<Form.Group className="col-4" id="form_complemento">
					<Form.Label>Complemento</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-5" id="form_bairro">
					<Form.Label>Bairro</Form.Label>
					<Form.Control 
					type="text"
					value={endereco?.bairro} readOnly />
				</Form.Group>
			</div>
			
			<div className="form-group row">
				<Form.Group className="col-6" id="form_cidade">
					<Form.Label>Cidade</Form.Label>
					<Form.Control 
					type="text"
					value={endereco?.localidade} readOnly />
				</Form.Group>

				<Form.Group className="col-2" id="form_uf">
					<Form.Label>Estado/UF</Form.Label>
					<Form.Control 
					type="text"
					value={endereco?.uf} readOnly
					 />
				</Form.Group>

				<Form.Group className="col-4" id="form_pais">
					<Form.Label>País</Form.Label>
					<Form.Control type="text"/>
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
