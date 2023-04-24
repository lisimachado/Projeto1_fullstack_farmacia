import { FormNovoMedicamento } from "../../components/FormNovoMedicamento/FormNovoMedicamento";

export const PgCadMedicamentos = () => {
  return (
    <div className="container">
			<h3 className="title">Cadastro Novo Medicamento</h3>
			<FormNovoMedicamento/>
    </div>
  );
};