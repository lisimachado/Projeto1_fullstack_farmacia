import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import './FormNovaFarmacia.css';
import axios from 'axios';

export const FormNovaFarmacia = () => {

	const [razaoSocial, setRazaoSocial] = useState('');
	const [codLoja, setCodLoja] = useState('');
	const [fantasia, setFantasia] = useState('');
	const [CNPJ, setCNPJ] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');
	const [cep, setCep] = useState('');
	const [logradouro, setLogradouro] = useState('');
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');
	const [bairro, setBairro] = useState('');
	const [cidade, setCidade] = useState('');
	const [uf, setUf] = useState('');
	const [pais, setPais] = useState('');

	const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

	//Salvar no localStorage

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const novafarmacia = {
			razaoSocial,
			codLoja,
			fantasia,
			CNPJ,
			email,
			telefone,
			cep,
			logradouro,
			numero,
			complemento,
			bairro,
			cidade,
			uf,
			pais,
		}

		try {
			const formularioAtualizado = [...formFarmaciaValue, novafarmacia]
			setFormFarmaciaValue(formularioAtualizado)

			localStorage.setItem("dadosFarmacia", JSON.stringify(formularioAtualizado))

			console.log("Dados salvos com sucesso!")
			alert("Dados salvos com sucesso!");
		} catch (error) {
			console.log(error)
		}
	};

	//Máscara CNPJ
	function handleCNPJChange(event) {
		const numCNPJ = event.target.value.replace(/\D/g, '').substring(0, 14);
		setCNPJ(numCNPJ);
	}


	//FUNÇÃO DE BUSCAO CEP NA API
	const buscarCep = () => {
		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then((resposta) => resposta.json())
			.then((dados) => preencherEndereco(dados));
	};

	//FUNÇÃO DE PREENCHER OS DADOS DO FORMULÁRIO
	const preencherEndereco = (dados) => {
		setLogradouro(dados.logradouro)
		setBairro(dados.bairro)
		setCidade(dados.localidade)
		setUf(dados.uf)
	}

	//Limpar os campos dos inputs
	const limparDados = () => {
		setRazaoSocial("");
		setCodLoja("");
		setFantasia("");
		setCNPJ("");
		setEmail("");
		setTelefone("");
		setCep("");
		setLogradouro("");
		setNumero("");
		setComplemento("");
		setBairro("");
		setCidade("");
		setUf("");
		setPais("");
	}

	//Formulário

	return (
		<container className="container">
			<Form className="FormCadastro"
				onSubmit={handleFormSubmit}>
				<div className="form-group row">
					<Form.Group className="col-9" id="form_nome">
						<Form.Label>Razão Social</Form.Label>
						<Form.Control
							type="text"
							value={razaoSocial}
							onChange={e => setRazaoSocial(e.target.value)} />
					</Form.Group>

					<Form.Group className="col-3" id="form_codigo">
						<Form.Label>Código da Loja</Form.Label>
						<Form.Control
							type="number"
							inputMode="numeric"
							value={codLoja}
							onChange={e => setCodLoja(e.target.value)} />
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-8" id="form_fantasia">
						<Form.Label>Nome Fantasia</Form.Label>
						<Form.Control type="textarea"
							value={fantasia}
							onChange={e => setFantasia(e.target.value)} />
					</Form.Group>

					<Form.Group className="col-4" id="form_CNPJ">
						<Form.Label>CNPJ</Form.Label>
						<Form.Control
							type="number"
							inputMode="numeric"
							maxNumber={14}
							value={CNPJ}
							onChange={e => setCNPJ(e.target.value)}

						// pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
						// value={cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')}
						// onChange={handleCNPJChange} 

						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-8" id="form_email">
						<Form.Label>E-mail</Form.Label>
						<Form.Control type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-4" id="form_telefone">
						<Form.Label>Telefone Celular</Form.Label>
						<Form.Control type="tel"
							value={telefone}
							onChange={e => setTelefone(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="row">
					<Form.Group className="col-2" id="form_cep">
						<Form.Label>CEP</Form.Label>
						<Form.Control
							type="text"
							value={cep}
							onChange={(e) => setCep(e.target.value)} />

					</Form.Group>

					<Form.Group className="col-2">
						<Button id="btnCep"
							onClick={buscarCep}
							variant="secondary">Buscar CEP</Button>
					</Form.Group>

					<Form.Group className="col-8" id="form_logradouro">
						<Form.Label>Logradouro</Form.Label>
						<Form.Control
							type="text"
							// value={endereco?.logradouro} readOnly 
							value={logradouro}
							onChange={e => setLogradouro(e.target.value)}
						/>
					</Form.Group>
				</div>

				<br />
				<div className="form-group row">
					<Form.Group className="col-3" id="form_numero">
						<Form.Label>Número</Form.Label>
						<Form.Control type="number"
							inputMode="numeric"
							value={numero}
							onChange={e => setNumero(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-4" id="form_complemento">
						<Form.Label>Complemento</Form.Label>
						<Form.Control type="text"
							value={complemento}
							onChange={e => setComplemento(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-5" id="form_bairro">
						<Form.Label>Bairro</Form.Label>
						<Form.Control
							type="text"
							// value={endereco?.bairro} readOnly 
							value={bairro}
							onChange={e => setBairro(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-6" id="form_cidade">
						<Form.Label>Cidade</Form.Label>
						<Form.Control
							type="text"
							// value={endereco?.localidade} readOnly
							value={cidade}
							onChange={e => setCidade(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-2" id="form_uf">
						<Form.Label>Estado/UF</Form.Label>
						<Form.Control
							type="text"
							// value={endereco?.uf} readOnly
							value={uf}
							onChange={e => setUf(e.target.value)}

						/>
					</Form.Group>

					<Form.Group className="col-4" id="form_pais">
						<Form.Label>País</Form.Label>
						<Form.Control type="text"
							value={pais}
							onChange={e => setPais(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="d-flex justify-content-end ">
					<Button
						className="btn-envio ms-auto"
						variant="secondary"
						type="submit"
						id="btn-cadastro"
						onClick={limparDados}>  {/*Criar função para limpar os dados */}
						Limpar Dados
					</Button>

					<Button
						className="btn-envio ms-auto"
						variant="success"
						type="submit"
						id="btn-cadastro">
						Enviar Cadastro
					</Button>
				</div>
			</Form>

			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
			<br /><br /><br />
		</container>
	);
}
