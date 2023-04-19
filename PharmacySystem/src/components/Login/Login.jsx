import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (email.trim() === '') {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password.trim() === '') {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (isValid) {
      // redireciona para a página com lista de farmácias
      window.location.href = '/farmacias';
    }
  };

  return (
    <Form className="formLogin" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Usuário</Form.Label>
        <Form.Control
          type="email"
          placeholder="Digite seu usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={emailError}
        />
        <Form.Control.Feedback type="invalid">
          E-mail é obrigatório.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={passwordError}
					minLength={8}
        />
        <Form.Control.Feedback type="invalid">
          Senha é obrigatória.
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button 
				className="ml-auto" 
				variant="primary" 
				type="submit">
          Entrar
        </Button>
      </div>
    </Form>
  );
};



// import Button from 'react-bootstrap/Button';
// import Form from "react-bootstrap/Form";

// export const FormLogin = () => {
//   return (
//     <Form className="formLogin">
//       <Form.Group className="mb-3" controlId="formEmail">
//         <Form.Label>Usuário</Form.Label>
//         <Form.Control type="email" placeholder="Digite seu usuário" />
//         <Form.Text className="text-muted">
          
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formPassword">
//         <Form.Label>Senha</Form.Label>
//         <Form.Control type="password" placeholder="Digite sua senha" />
//       </Form.Group>
// 			<div className="d-flex justify-content-end">
// 				<Button className="ml-auto" variant="primary" type="submit">
// 					Entrar
// 				</Button>
// 			</div>
//     </Form>
//   );
// }