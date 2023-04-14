import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


export const FormLogin = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Endereço de E-mail</Form.Label>
        <Form.Control type="email" placeholder="Digite seu e-mail" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
			<Button variant="primary" type="submit">
        Entrar
      </Button>
      
       </Form>
  );
}