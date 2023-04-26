import { Accordion } from "react-bootstrap";

export const FaqComponent = () => {
	const faqList = [
		{
			pergunta: "Como faço para cadastrar uma farmácia?",
			resposta:
				"Para cadastrar uma farmácia, clique no botão 'Cadastro' no menu inicial e em seguida no botão 'Novo Meicamento' e preencha o formulário com as informações solicitadas."
		},
		{
			pergunta: "Quais são os tipos de medicamentos que podem ser cadastrados?",
			resposta:
				"Podem ser cadastrados medicamentos de venda livre e medicamentos controlados."
		},
		{
			pergunta: "Quais são as informações necessárias para cadastrar um medicamento no sistema?",
			resposta:
				"As informações necessárias para cadastro de um novo medicamento são: Nome do medicamento, Laboratório, Dosagem, Tipo de Medicamento, Valor e Descrição."
		},
	];

	return (
		<div>
			<Accordion>
				{faqList.map((faq, index) => (
					<Accordion.Item key={index}>
						<Accordion.Header>{faq.pergunta}</Accordion.Header>
						<Accordion.Body>{faq.resposta}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</div>
	);
};
