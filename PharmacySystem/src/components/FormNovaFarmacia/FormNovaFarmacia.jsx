import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormNovaFarmacia.css';

export const FormNovaFarmacia = ()=> {
  return (		

		<Form className="FormCadastro">
			<div className="form-group row">
				<Form.Group className="col-8" id="form_nome">
					<Form.Label>Razão Social</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-4" id="form_cnpj">
					<Form.Label>CNPJ</Form.Label>
					<Form.Control type="number" />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-7" id="form_fantasia">
					<Form.Label>Nome Fantasia</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-8" id="form_email">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" />
				</Form.Group>

				<Form.Group className="col-4" id="form_telefone">
					<Form.Label>Telefone Celular</Form.Label>
					<Form.Control type="number" />
				</Form.Group>
			</div>

			<div className="form-group row">
				<Form.Group className="col-4" id="form_cep">
					<Form.Label>CEP</Form.Label>
					<Form.Control type="number" />
				</Form.Group>

				<Form.Group className="col-8" id="form_logradouro">
					<Form.Label>Logradouro</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</div>
			<div className="form-group row">
				<Form.Group className="col-3" id="form_numero">
					<Form.Label>Número</Form.Label>
					<Form.Control type="number" />
				</Form.Group>

				<Form.Group className="col-4" id="form_complemento">
					<Form.Label>Complemento</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-5" id="form_bairro">
					<Form.Label>Bairro</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</div>
			<div className="form-group row">
				<Form.Group className="col-6" id="form_cidade">
					<Form.Label>Cidade</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-2" id="form_uf">
					<Form.Label>Estado/UF</Form.Label>
					<Form.Control type="text" />
				</Form.Group>

				<Form.Group className="col-4" id="form_pais">
					<Form.Label>País</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</div>


			<div className="d-flex justify-content-center">
				<Button 
				className="mc-auto" 
				variant="secondary"
				type="submit"
				id="btn-cadastro">
					Enviar Cadastro
				</Button>
			</div>
    </Form>
  );
}
