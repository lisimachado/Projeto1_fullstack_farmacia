import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './FormNovaFarmacia.css';
import axios from 'axios';
import { IMaskInput } from 'react-imask';

export const FormNovaFarmacia = () => {

	const [razaoSocial, setRazaoSocial] = useState('');
	const [codLoja, setCodLoja] = useState('');
	const [fantasia, setFantasia] = useState('');
	const [CNPJ, setCNPJ] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');
	const [celular, setCelular] = useState('');
	const [cep, setCep] = useState('');
	const [logradouro, setLogradouro] = useState('');
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');
	const [bairro, setBairro] = useState('');
	const [cidade, setCidade] = useState('');
	const [uf, setUf] = useState('');
	const [pais, setPais] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

	//SALVAR NO LOCALSTORAGE
	const handleFormSubmit = (event) => {
		event.preventDefault();

		const novaFarmacia = {
			codLoja,
			razaoSocial,
			fantasia,
			CNPJ,
			email,
			telefone,
			celular,
			cep,
			logradouro,
			numero,
			complemento,
			bairro,
			cidade,
			uf,
			pais,
			endereco: enderecoCompleto(logradouro, numero, bairro, cidade, uf),
			latitude,
			longitude,
		}

		//PARA CONCATENAR O ENDEREÇO NO POPUP
		function enderecoCompleto(logradouro, numero, bairro, cidade, uf) {
			return `${logradouro}, ${numero}, ${bairro}, ${cidade} / ${uf}`;
		}

		try {

			const dadosFarmacia = localStorage.getItem('dadosFarmacia');
			let formularioAtualizado = [...formFarmaciaValue];

			if (dadosFarmacia) {
				formularioAtualizado = JSON.parse(dadosFarmacia);
			}

			formularioAtualizado.push(novaFarmacia);
			localStorage.setItem('dadosFarmacia', JSON.stringify(formularioAtualizado));

			setFormFarmaciaValue(formularioAtualizado);

			console.log('Dados salvos com sucesso!');
			alert('Dados salvos com sucesso!');
			limparDados(); // Limpa os dados após o envio
		} catch (error) {
			console.log(error);
		};
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
		setPais(dados.pais)
	}

	//LIMPAR OS CAMPOS DOS INPUTS
	const limparDados = () => {
		setRazaoSocial("");
		setCodLoja("");
		setFantasia("");
		setCNPJ("");
		setEmail("");
		setTelefone("");
		setCelular("");
		setCep("");
		setLogradouro("");
		setNumero("");
		setComplemento("");
		setBairro("");
		setCidade("");
		setUf("");
		setPais("");
		setLatitude("");
		setLongitude("");
	}

	//FORMULÁRIO
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
							onChange={e => setRazaoSocial(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="col-3" id="form_codigo">
						<Form.Label>Código da Loja</Form.Label>
						<Form.Control
							as={IMaskInput}
							mask="0000"
							value={codLoja}
							onChange={e => setCodLoja(e.target.value)}
							required />
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-8" id="form_fantasia">
						<Form.Label>Nome Fantasia</Form.Label>
						<Form.Control type="textarea"
							value={fantasia}
							onChange={e => setFantasia(e.target.value)}
							required />
					</Form.Group>

					<Form.Group className="col-4" id="form_CNPJ">
						<Form.Label>CNPJ</Form.Label>
						<Form.Control
							as={IMaskInput}
							mask="00.000.000/0000-00"
							inputMode="numeric"
							value={CNPJ}
							onChange={e => setCNPJ(e.target.value)}
							required
						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-6" id="form_email">
						<Form.Label>E-mail</Form.Label>
						<Form.Control type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="col-3" id="form_telefone">
						<Form.Label>Telefone</Form.Label>
						<Form.Control
							type="tel"
							as={IMaskInput}
							mask="(00)00000-0000"
							value={telefone}
							onChange={e => setTelefone(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-3">
						<Form.Label>Telefone Celular</Form.Label>
						<Form.Control
							type="tel"
							as={IMaskInput}
							mask="(00)00000-0000"
							value={celular}
							onChange={e => setCelular(e.target.value)}
							required
						/>
					</Form.Group>
				</div>

				<div className="row">
					<Form.Group className="col-3" id="form_cep">
						<Form.Label>CEP</Form.Label>
						<Form.Control
							as={IMaskInput}
							mask="00000000"
							value={cep}
							onChange={(e) => setCep(e.target.value)}
							required />
					</Form.Group>

					<Form.Group className="col-2">
						<Button id="btnCep"
							onClick={buscarCep}
							required
							variant="secondary">Buscar CEP</Button>

					</Form.Group>

					<Form.Group className="col-7" id="form_logradouro">
						<Form.Label>Logradouro</Form.Label>
						<Form.Control
							type="text"
							value={logradouro}
							onChange={e => setLogradouro(e.target.value)}
							required
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
							required
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
							value={bairro}
							onChange={e => setBairro(e.target.value)}
							required
						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-6" id="form_cidade">
						<Form.Label>Cidade</Form.Label>
						<Form.Control
							type="text"
							value={cidade}
							onChange={e => setCidade(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="col-2" id="form_uf">
						<Form.Label>Estado/UF</Form.Label>
						<Form.Control
							type="text"
							value={uf}
							onChange={e => setUf(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="col-4" id="form_pais">
						<Form.Label>País</Form.Label>
						<Form.Control
							type="text"
							value={pais}
							onChange={e => setPais(e.target.value)}
							required
						/>
					</Form.Group>
				</div>

				<div className="row d-flex justify-content-end ">
					<Form.Group className="col-6" id="form_lat">
						<Form.Label>Latitude</Form.Label>
						<Form.Control
							type="text"
							value={latitude}
							onChange={e => setLatitude(e.target.value)}
							required
						/>
					</Form.Group>

					<Form.Group className="col-6" id="form_lon">
						<Form.Label>Longitude</Form.Label>
						<Form.Control
							type="text"
							value={longitude}
							onChange={e => setLongitude(e.target.value)}
							required
						/>
					</Form.Group>

				</div>

				<div className="d-flex justify-content-end ">
					<Button
						className="btn-envio ms-auto"
						variant="secondary"
						id="btn-cadastro"
						onClick={limparDados}>
						Limpar Dados
					</Button>

					<Button
						className="btn-envio ms-auto"
						variant="success"
						type="submit"
						id="btn-cadastro"
					>
						Enviar Cadastro
					</Button>
				</div>
			</Form>

			{/* Ajuste para o footer não ficar sobrepondo o conteudo da página. */}
			<br /><br /><br />
		</container >
	);
}