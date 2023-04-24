const BuscaMedicamento = ({ medicamentos }) => {
	const [busca, setBusca] = useState('');

	const handleBusca = (e) => {
		setBusca(e.target.value);
	}

	const medicamentosFiltrados = medicamentos.filter((medicamento) => {
		return medicamento.nomeMedicamento.toLowerCase().includes(busca.toLowerCase())
			|| medicamento.tipoMedicamento.toLowerCase().includes(busca.toLowerCase())
			|| medicamento.precoMedicamento.toString().includes(busca);
	});

	return (
		<>
			<Form>
				<Form.Group controlId="formBusca">
					<Form.Control type="text" placeholder="Buscar por nome, tipo ou preço" onChange={handleBusca} />
				</Form.Group>
			</Form>
			{medicamentosFiltrados.map((medicamento) => (
				<CardMedicamento
					key={medicamento.nomeMedicamento}
					nomeMedicamento={medicamento.nomeMedicamento}
					dosagem={medicamento.dosagem}
					precoMedicamento={medicamento.precoMedicamento}
					laboratorio={medicamento.laboratorio}
					tipoMedicamento={medicamento.tipoMedicamento}
					descricao={medicamento.descricao}
				/>
			))}
		</>
	);
};

const ListaMedicamentos = ({ medicamentos }) => {
	return (
		<BuscaMedicamento medicamentos={medicamentos} />
	);
};

export default ListaMedicamentos;
