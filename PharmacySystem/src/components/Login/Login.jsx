import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


export const FormLogin = () => {
  return (
    <Form className="formLogin">
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Usuário</Form.Label>
        <Form.Control type="email" placeholder="Digite seu usuário" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
			<div className="d-flex justify-content-end">
				<Button className="ml-auto" variant="primary" type="submit">
					Entrar
				</Button>
			</div>
    </Form>
  );
}