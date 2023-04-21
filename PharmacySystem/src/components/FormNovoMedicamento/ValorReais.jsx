// import React, { useState } from 'react';
// import IMask from 'imask';

// export function valorReais() {
//   const [value, setValue] = useState('');

//   const onInput = (event) => {
//     setValue(event.target.value);
//   };

//   const mask = {
//     mask: 'R$ num',
//     blocks: {
//       num: {
//         // o regex abaixo permite apenas números e ponto
//         // o ponto será automaticamente substituído por vírgula
//         mask: Number,
//         thousandsSeparator: '.',
//         radix: ','
//       }
//     }
//   };

//   // cria um ref para o input e aplica a máscara
//   const inputRef = React.useRef(null);
//   React.useEffect(() => {
//     if (inputRef.current) {
//       IMask(inputRef.current, mask);
//     }
//   }, [mask]);

  
// }







	// //const { preco, handlePriceChange, handlePriceBlur } = valorReais();


	// //Salvar no localStorage

	// const [nomeMedicamento, setnomeMedicamento] = useState('');
	// const [laboratorio, setLaboratorio] = useState('');
	// const [dosagem, setDosagem] = useState('');
	// const [tipoMedicamento, setTipoMedicamento] = useState('');
	// const [precoMedicamento, setPrecoMedicamento] = useState('');












// // import { useState } from 'react';

// // export function valorReais() {

// // 	//FUNÇÃO PARA AJUSTAR O INPUT DE VALOR
// // 	const [preco, setPreco] = useState('');

// // 	function handlePriceChange(event) {
// // 		setPreco(event.target.value);
// // 	}

// // 	function handlePriceBlur(event) {
// // 		const value = event.target.value;
// // 		const numericValue = parseFloat(value.replace(/\./g, '').replace(',', '.'));
// // 		const formato = new Intl.NumberFormat('pt-BR', {
// // 			style: 'currency',
// // 			currency: 'BRL'
// // 		});
// // 		const formatoPreco = formato.format(numericValue);
// // 		setPreco(formatoPreco);
// // 	}
// // 	return { preco, handlePriceChange, handlePriceBlur };
// // }
