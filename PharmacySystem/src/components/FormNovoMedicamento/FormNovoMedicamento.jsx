import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormNovoMedicamento.css';
import { useNavigate } from 'react-router-dom';

export const FormNovoMedicamento = () => {
	const navigate = useNavigate(); // Importando useNavigate

	//Salvar no localStorage

	const [nomeMedicamento, setNomeMedicamento] = useState('');
	const [laboratorio, setLaboratorio] = useState('');
	const [dosagem, setDosagem] = useState('');
	const [tipoMedicamento, setTipoMedicamento] = useState('');
	const [precoMedicamento, setPrecoMedicamento] = useState('');
	const [descricao, setDescricao] = useState('');

	const [formMedicamentoValue, setFormMedicamentoValue] = useState('');

	const handleFormSubmit = (event) => {
		event.preventDefault();

		const novoMedicamento = {
			nomeMedicamento,
			laboratorio,
			dosagem,
			tipoMedicamento,
			precoMedicamento,
			descricao,
		}

		try {
			const dadosMedicamentos = JSON.parse(localStorage.getItem("dadosMedicamento")) || [];
			const formularioAtualizado = [...formMedicamentoValue, novoMedicamento];
			localStorage.setItem("dadosMedicamento", JSON.stringify(formularioAtualizado));
			setFormMedicamentoValue(formularioAtualizado);

			limparDados(); // Limpa os dados após o envio
			window.alert("Dados salvos com sucesso!");

			console.log("Dados salvos com sucesso!");
			navigate("/medicamentos");
		} catch (error) {
			console.log(error);
		}
	}

	//Limpar os campos dos inputs
	const limparDados = () => {
		setNomeMedicamento("");
		setLaboratorio("");
		setDosagem("");
		setTipoMedicamento("");
		setPrecoMedicamento("");
		setDescricao("");
		window.alert("Dados limpos com sucesso!");
	};

	return (
		<fieldset>
			<Form className="FormCadastro"
				onSubmit={handleFormSubmit}>
				<div className="form-group row">
					<Form.Group className="col-7" id="form_nome_medicamento">
						<Form.Label>Nome do medicamento</Form.Label>
						<Form.Control
							type="text"
							value={nomeMedicamento}
							onChange={e => setNomeMedicamento(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-5" id="form_laboratorio">
						<Form.Label>Laboratório</Form.Label>
						<Form.Control
							type="text"
							value={laboratorio}
							onChange={e => setLaboratorio(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-3" id="form_dosagem">
						<Form.Label>Dosagem</Form.Label>
						<Form.Control
							type="text"
							value={dosagem}
							onChange={e => setDosagem(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="col-6" id="form_tipomedicamento">
						<Form.Label>Tipo de Medicamento</Form.Label>
						<Form.Select
							aria-label="Selecione o tipo de medicamento"
							value={tipoMedicamento}
							onChange={(e) => setTipoMedicamento(e.target.value)}>
							<option value="">Selecione uma opção</option>
							<option value="Medicamento controlado">Medicamento controlado</option>
							<option value="Medicamento comum">Medicamento comum</option>

						</Form.Select>
					</Form.Group>

					<Form.Group className="col-3" id="form_preco">
						<Form.Label>Valor</Form.Label>
						<Form.Control
							type="number"
							value={precoMedicamento}
							onChange={e => setPrecoMedicamento(e.target.value)}
						/>
					</Form.Group>
				</div>

				<div className="form-group row">
					<Form.Group className="col-12" id="form_descricao">
						<Form.Label>Descrição do Medicamento</Form.Label>
						<Form.Control
							type="textarea"
							value={descricao}
							onChange={e => setDescricao(e.target.value)} />
					</Form.Group>
				</div>

				<div className="d-flex justify-content-end">
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
						id="btn-cadastro">
						Enviar Cadastro
					</Button>
				</div>
			</Form> <br /> <br /> <br />
		</fieldset>
	);
}
