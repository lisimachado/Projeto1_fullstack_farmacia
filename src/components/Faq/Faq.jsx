import { Accordion, Card, Button } from "react-bootstrap";

export const FaqComponent = () => {
	const faqList = [
		{
			pergunta: "Como faço para cadastrar uma farmácia?",
			resposta:
				"Para cadastrar uma farmácia, clique no botão 'Cadastrar Farmácia' na página inicial e preencha o formulário com as informações solicitadas."
		},
		{
			pergunta: "Quais são os tipos de medicamentos que podem ser cadastrados?",
			resposta:
				"Podem ser cadastrados medicamentos de venda livre, medicamentos controlados e medicamentos manipulados."
		},
		{
			pergunta: "Como faço para editar as informações de uma farmácia?",
			resposta:
				"Para editar as informações de uma farmácia, acesse a página de detalhes da farmácia e clique no botão 'Editar'."
		},
		// adicione mais perguntas e respostas conforme necessário
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
