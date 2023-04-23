import React, { useState, useEffect, createContext } from 'react';

const FarmaciasContext = createContext();

const FarmaciasProvider = ({ children }) => {

	// Adiciona marcadores para as lojas
	const lojasIniciais = [
		{
			cod: 'Loja 001',
			cnpj: '42.589.746/0001-00',
			razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
			fantasia: 'PharmaLife',
			email: 'contatoloja01@pharmalife.com.br',
			telefone: '(48)8022-4000',
			endereco: 'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
			latitude: '-27.5906434',
			longitude: '-48.5506324',
		},
	];

	const [lojas, setLojas] = useState([]);

	useEffect(() => {
		const dadosArmazenados = JSON.parse(localStorage.getItem("dadosFarmacia"));
		if (dadosArmazenados) {
			setLojas([...lojasIniciais, ...dadosArmazenados]);
		} else {
			setLojas(lojasIniciais);
		}
	}, []);



	return (
		<FarmaciasContext.Provider value={{ lojas, setLojas }}>
			{children}
		</FarmaciasContext.Provider>
	);

}
export { FarmaciasContext, FarmaciasProvider };
















// 	const [farmacias, setFarmacias] = useState([...lojasIniciais]);

// 	useEffect(() => {
// 		const dadosFarmacia = localStorage.getItem('dadosFarmacia');
// 		if (dadosFarmacia) {
// 			const farmaciasLocalStorage = JSON.parse(dadosFarmacia);
// 			setFarmacias([...lojasIniciais, ...farmaciasLocalStorage]);
// 		}
// 		//ALTERAÇÃO INCLUIDA
// 		else {
// 			setFarmacias([...lojasIniciais]);
// 		}
// 	}, []);


// 	//ALTERAÇÃO INCLUIDA
// 	useEffect(() => {
// 		localStorage.setItem('dadosFarmacia', JSON.stringify(farmacias.slice(lojasIniciais.length)));
// 	}, [farmacias]);



// 	//ALTERAÇÃO INCLUIDA
// 	// função para adicionar uma nova farmácia ao estado 'farmacias'
// 	const adicionarFarmacia = (novaFarmacia) => {
// 		setFarmacias((farmaciasAntigas) => [...farmaciasAntigas, novaFarmacia]);
// 	};


// 	return (
// 		<FarmaciasContext.Provider value={{ farmacias, setFarmacias }}>
// 			{children}
// 		</FarmaciasContext.Provider>
// 	);
// };

// export { FarmaciasContext, FarmaciasProvider };



// // {
// // 	cod: 'Loja 002',
// // 	cnpj: '42.589.746/0002-38',
// // 	razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// // 	fantasia: 'PharmaLife',
// // 	email: 'contatoloja02@pharmalife.com.br',
// // 	telefone: '(48)8022-4001',
// // 	endereco: 'Rod Admar Gonzaga, 1022, bairro Itacorubi, Florianópolis/SC CEP 88.220-777',
// // 	latitude: '-27.5866780',
// // 	longitude: '-48.4989027',
// // },

// // {
// // 	cod: 'Loja 003',
// // 	cnpj: '42.589.746/0003-43',
// // 	razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// // 	fantasia: 'PharmaLife',
// // 	email: 'contatoloja03@pharmalife.com.br',
// // 	telefone: '(48)8022-4002',
// // 	endereco: 'Rod Francisco Magno Vieira, 211, bairro Campeche, Florianópolis/SC CEP 88.051-300',
// // 	latitude: '-27.6620',
// // 	longitude: '-48.5013',
// // },

// // {
// // 	cod: 'Loja 004',
// // 	cnpj: '42.589.746/0004-14',
// // 	razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// // 	fantasia: 'PharmaLife',
// // 	email: 'contatoloja04@pharmalife.com.br',
// // 	telefone: '(48)8022-4004',
// // 	endereco: 'Rua Lauro Linhares, 5757, bairro Trindade, Florianópolis/SC CEP 88.193-001',
// // 	latitude: '-27.5887649',
// // 	longitude: '-48.5224589',
// // },

// // {
// // 	cod: 'Loja 005',
// // 	cnpj: '42.589.746/0005-62',
// // 	razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// // 	fantasia: 'PharmaLife',
// // 	email: 'contatoloja05@pharmalife.com.br',
// // 	telefone: '(48)8022-4005',
// // 	endereco: 'Rua dos Navegantes, 57, bairro Estreito, Florianópolis/SC CEP 88.200-951',
// // 	latitude: '-27.5851554',
// // 	longitude: '-48.5784047',
// // },

// // {
// // 	cod: 'Loja 006',
// // 	cnpj: '42.589.746/0006-11',
// // 	razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
// // 	fantasia: 'PharmaLife',
// // 	email: 'contatoloja06@pharmalife.com.br',
// // 	telefone: '(48)8022-4006',
// // 	endereco: 'Rua Dep Francisco Mascarenhas, 28, bairro Coqueiros, Florianópolis/SC CEP 88.018-551',
// // 	latitude: '-27.6122212',
// // 	longitude: '-48.5899312',
// // },