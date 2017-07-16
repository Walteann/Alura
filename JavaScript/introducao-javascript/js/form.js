var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) { //addEventListener adiciona um evento

	event.preventDefault(); // evita que o form seja recarregado, ele altera o comportamento padrao do evento
	
	var form = document.querySelector("#form-Adiciona");
// Coleta os dados do form
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);


	var pacienteTr = document.createElement("tr"); // createElement, cria um novo Elemento., CRIA TR e TD do paciente


	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
 // PREENCHI os TDs
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso,altura);

// adiciona as TD na TR | adicionado o paciente na tabela
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");


// Adiciona A Tr no tbody que possuir id="tabela-pacientes"
	tabela.appendChild(pacienteTr);

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

