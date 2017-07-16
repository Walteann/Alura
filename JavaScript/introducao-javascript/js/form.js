var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) { //addEventListener adiciona um evento

	event.preventDefault(); // evita que o form seja recarregado, ele altera o comportamento padrao do evento
	
	var form = document.querySelector("#form-Adiciona");
// Coleta os dados do form
	var paciente = obtemPacienteDoFormulario(form);
	
// Cria a tr a td do paciente

var pacienteTr =  montaTr(paciente);	
var tabela = document.querySelector("#tabela-pacientes");


// Adiciona A Tr no tbody que possuir id="tabela-pacientes"
	tabela.appendChild(pacienteTr);

	form.reset(); // Limpar os campos do formularios # MUITO BOM

});


function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value , form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr"); // createElement, cria um novo Elemento., CRIA TR e TD do paciente

	pacienteTr.classList.add("paciente");

// adiciona as TD na TR | adicionado o paciente na tabela
	pacienteTr.appendChild(montaTd(paciente.nome , "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso , "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura , "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura , "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc , "info-imc"));

	return pacienteTr;
}
 // PREENCHI os TDs
function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;

}