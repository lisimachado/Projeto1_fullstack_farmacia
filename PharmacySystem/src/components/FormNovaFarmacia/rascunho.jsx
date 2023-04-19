











import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import './FormNovaFarmacia.css';
import axios from 'axios';

export const FormNovaFarmacia = ()=> {

	const [cnpj, setCNPJ] = useState('');
	const [cep, setCep] = useState('');
	
	//Salvar no localStorage

	const [razaoSocial, setRazaoSocial] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("razaoSocial", razaoSocial);
    localStorage.setItem("codigo", codigo);
    alert("Dados salvos com sucesso!");
  };

  const handleRazaoSocialChange = (event) => {
    setRazaoSocial(event.target.value);
  };

  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
  };


	//Função para utilização da API de CEP
	const [endereco, setEndereco] = useState();

  const [formulario, setFormulario] = useState({
    cep: "",
  });

  const atualizarCampo = (campo, valor) => {
    const novosDados = { ...formulario, [campo]: valor };
    setFormulario(novosDados);
		console.log(novosDados)
  };

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => setEndereco(dados));
  };

	
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
						onChange={handleRazaoSocialChange} />
					</Form.Group>

				</div>

				<div className="row">
					<Form.Group className="col-2" id="form_cep">
						<Form.Label>CEP</Form.Label>
						<Form.Control 
						type="text"
						value={formulario.cep}
						onChange={(evento) => atualizarCampo("cep", evento.target.value)} />
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
						value={endereco?.logradouro} readOnly 
						/>
					</Form.Group>
				</div>
					<Form.Group className="col-5" id="form_bairro">
						<Form.Label>Bairro</Form.Label>
						<Form.Control 
						type="text"
						value={endereco?.bairro} readOnly 
						/>
					</Form.Group>
				
				<div className="d-flex justify-content-end ">		
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


































// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useState, useEffect } from 'react';
// import './FormNovaFarmacia.css';
// import axios from 'axios';

// export const FormNovaFarmacia = ()=> {

// 	//Função para o campo CNPJ fique no formato correto
// 	// const [codLoja, setCodLoja] = useState('');
// 	const [cnpj, setCNPJ] = useState('');
// 	// const [razaoSocial, setRazaoSocial] = useState('');
// 	// const [fantasia, setFantasia] = useState('');
// 	// const [email, setEmail] = useState('');
// 	// const [telefone, setTelefone] = useState('');
// 	const [cep, setCep] = useState('');
// 	// const [logradouro, setLogradouro] = useState('');
// 	// const [numero, setNumero] = useState('');
// 	// const [complemento, setComplemento] = useState('');
// 	// const [bairro, setBairro] = useState('');
// 	// const [cidade, setCidade] = useState('');
// 	// const [uf, setUf] = useState('');
// 	// const [pais, setPais] = useState('');
// 	// const [formFarmaciaValue, setFormFarmaciaValue] = useState('');

// 	//Salvar no localStorage





	

// // 	versão 3

// // 	const [validated, setValidated] = useState(false);

// // 	const [formValues, setFormValues] = useState({});
// //   const handleChange = (event) => {
// //     setFormValues({ ...formValues, [event.target.name]: event.target.value });
// //     console.log(formValues);
// //   };

// //   const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);

// // 	function handleSubmit(event) {
// //     event.preventDefault();
// //     event.stopPropagation();
// //     const form = event.currentTarget;
// //     if (form.checkValidity() === false) {
// //         setValidated(true);
// //     } else {
// //         setValidated(false);
// //         localStorage.setItem(`Form_${Key}`, JSON.stringify(formValues));
// //         setKey(Math.floor(Math.random() * 10000) + 1);
// //         form.reset();
// //     }
// // }




// 	//VERSÃO2

// 	// const [formValues, setFormValues] = useState({});
//   // const handleChange = (event) => {
//   //   setFormValues({ ...formValues, [event.target.name]: event.target.value });
//   //   console.log(formValues);
//   // };

//   // const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);

//   // useEffect(() => {
//   //   localStorage.setItem(`Form_${key}`, JSON.stringify(formValues));
//   // }, [formValues, key]);

//   // const handleSaveToLocalStorage = () => {
//   //   localStorage.setItem(`Form_${key}`, JSON.stringify(formValues));
//   //   setKey(Math.floor(Math.random() * 10000) + 1);
//   // };



// 	//VERSÃO1

// 	// const [formValues, setFormValues] = useState({});
// 	// const handleChange = (event) => {
//   // 	setFormValues({ ...formValues, [event.target.name]: event.target.value });
// 	// console.log(formValues)
// 	// };

// 	// const [key, setKey] = useState(Math.floor(Math.random() * 10000) + 1);
	

// 	// useEffect(() => {
// 	// 	localStorage.setItem(`form_${key}`, JSON.stringify(formValues));

// 	// }, [formValues, key]);


// 	// function handleSubmit(e){
// 	// 	e.preventDefault()
// 	// 	localStorage.setItem(Key, JSON.stringify(formValues));
// 	// 	setKey(Math.floor(Math.random() * 10000) + 1);
// 	// }
	

// 	//Máscara CNPJ
// 	function handleCNPJChange(event) {
// 		const numCNPJ = event.target.value.replace(/\D/g, '').substring(0, 14);
// 		setCNPJ(numCNPJ);
// 	}

// 	//Função para utilização da API de CEP
// 	const [endereco, setEndereco] = useState();

//   const [formulario, setFormulario] = useState({
//     cep: "",
//   });

//   const atualizarCampo = (campo, valor) => {
//     const novosDados = { ...formulario, [campo]: valor };
//     setFormulario(novosDados);
// 		console.log(novosDados)
//   };

//   const buscarCep = () => {
//     fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
//       .then((resposta) => resposta.json())
//       .then((dados) => setEndereco(dados));
//   };

	
// 	//Formulário

//   return (		
// 		<container className="container">
// 			<Form className="FormCadastro">
// 				<div className="form-group row">
// 					<Form.Group className="col-9" id="form_nome">
// 						<Form.Label>Razão Social</Form.Label>
// 						<Form.Control type="text" 
// 						onChange={handleChange} 
// 						value={formValues.razaoSocial || ''}/>
// 					</Form.Group>

// 					<Form.Group className="col-3" id="form_codigo">
// 						<Form.Label>Código da Loja</Form.Label>
// 						<Form.Control 
// 						type="number" 
// 						inputMode="numeric" 
// 						onChange={handleChange}
// 						value={formValues.codLoja || ''}/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-8" id="form_fantasia">
// 						<Form.Label>Nome Fantasia</Form.Label>
// 						<Form.Control type="textarea" 
// 						onChange={handleChange}
// 						value={formValues.fantasia || ''}/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_cnpj">
// 						<Form.Label>CNPJ</Form.Label>
// 						<Form.Control 
// 							type="text"
// 							maxLength={18}
// 							pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
// 							value={cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')}
// 							onChange={handleCNPJChange} 
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="form-group row">
// 					<Form.Group className="col-8" id="form_email">
// 						<Form.Label>E-mail</Form.Label>
// 						<Form.Control type="email" 
// 						onChange={handleChange}/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_telefone">
// 						<Form.Label>Telefone Celular</Form.Label>
// 						<Form.Control type="tel" 
// 						onChange={handleChange}/>
// 					</Form.Group>
// 				</div>

// 				<div className="row">
// 					<Form.Group className="col-2" id="form_cep">
// 						<Form.Label>CEP</Form.Label>
// 						<Form.Control 
// 						type="text"
// 						value={formulario.cep}
// 						onChange={(evento) => atualizarCampo("cep", evento.target.value)} />
// 					</Form.Group>

// 					<Form.Group className="col-2">
// 						<Button id="btnCep" 
// 						onClick={buscarCep} 
// 						variant="secondary">Buscar CEP</Button>
// 					</Form.Group>

// 					<Form.Group className="col-8" id="form_logradouro">
// 						<Form.Label>Logradouro</Form.Label>
// 						<Form.Control 
// 						type="text"
// 						value={endereco?.logradouro} readOnly 
// 						onChange={handleChange}/>
// 					</Form.Group>
// 				</div>

// 				<br />
// 				<div className="form-group row">
// 					<Form.Group className="col-3" id="form_numero">
// 						<Form.Label>Número</Form.Label>
// 						<Form.Control type="number" 
// 						inputMode="numeric"
// 						onChange={handleChange}/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_complemento">
// 						<Form.Label>Complemento</Form.Label>
// 						<Form.Control type="text" 
// 						onChange={handleChange}/>
// 					</Form.Group>

// 					<Form.Group className="col-5" id="form_bairro">
// 						<Form.Label>Bairro</Form.Label>
// 						<Form.Control 
// 						type="text"
// 						value={endereco?.bairro} readOnly 
// 						onChange={handleChange}/>
// 					</Form.Group>
// 				</div>
				
// 				<div className="form-group row">
// 					<Form.Group className="col-6" id="form_cidade">
// 						<Form.Label>Cidade</Form.Label>
// 						<Form.Control 
// 						type="text"
// 						value={endereco?.localidade} readOnly
// 						onChange={handleChange} />
// 					</Form.Group>

// 					<Form.Group className="col-2" id="form_uf">
// 						<Form.Label>Estado/UF</Form.Label>
// 						<Form.Control 
// 						type="text"
// 						value={endereco?.uf} readOnly
// 						onChange={handleChange}
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-4" id="form_pais">
// 						<Form.Label>País</Form.Label>
// 						<Form.Control type="text"
// 						onChange={handleChange}/>
// 					</Form.Group>
// 				</div>


// 				<div className="d-flex justify-content-end ">		
// 					<Button 
// 					className="btn-envio ms-auto"
// 					variant="success"
// 					type="submit"
// 					id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 				</div>
// 			</Form>

// 			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
// 			<br /><br /><br />
// 		</container>
//   );
// }













// //RASCUNHO


// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useState, useEffect } from 'react';
// import './FormNovaFarmacia.css';
// import axios from 'axios';

// export const FormNovaFarmacia = ()=> {
	

// 	//Formulário

//   return (		
// 		<container className="container">
// 			<Form className="FormCadastro">
// 				<div className="form-group row">
// 					<Form.Group className="col-9" id="form_nome">
// 						<Form.Label>Razão Social</Form.Label>
// 						<Form.Control type="text" 
// 						/>
// 					</Form.Group>

// 					<Form.Group className="col-3" id="form_codigo">
// 						<Form.Label>Código da Loja</Form.Label>
// 						<Form.Control 
// 						type="number" 
// 						inputMode="numeric" 
// 						/>
// 					</Form.Group>
// 				</div>

// 				<div className="d-flex justify-content-end ">		
// 					<Button 
// 					className="btn-envio ms-auto"
// 					variant="success"
// 					type="submit"
// 					id="btn-cadastro">
// 						Enviar Cadastro
// 					</Button>
// 				</div>
// 			</Form>

// 			{/* Ajuste temporário para o footer não ficar sobrepondo o conteudo da página. */}
// 			<br /><br /><br />
// 		</container>
//   );
// }
