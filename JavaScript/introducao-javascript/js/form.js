var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) { //addEventListener adiciona um evento

	event.preventDefault(); // evita que o form seja recarregado, ele altera o comportamento padrao do evento
	
	var form = document.querySelector("#form-Adiciona");
// Coleta os dados do form
	var paciente = obtemPacienteDoFormulario(form);
	
// Cria a tr a td do paciente

adicionarPacienteNaTabela(paciente);

var erros = validaPaciente(paciente);
//erro=> "O peso é invalido"; quando ele entrar na função ele vai retornar a msg pra o var erro, se for false, o peso é invalido.
//erro=> "";  porem, se vier true, nesse caso a string é vazia.

console.log(erros);
	if(erros.length > 0){
		exibeMensagensDeErros(erros);

		return;
	}

	form.reset(); // Limpar os campos do formularios # MUITO BOM
	var mensagemDeErro = document.querySelector("#mensagens_erro");
	mensagemDeErro.innerHTML = "";

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

function validaPaciente(paciente){

	var erros = []; // cria uma array pra retorna os 2 erros, e push adiciona string no array

	if( paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}


	if(!validaPeso(paciente.peso)) erros.push("Peso é invalido"); // vc pode fazer isso com o iF, só tira as {}
	

	if(!validaAltura(paciente.altura)) erros.push("Altura é invalida");

	if( paciente.gordura.length == 0){
		erros.push("gordura nao pode ser em branco");
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco");
	}

	if(paciente.altura.length == 0){
		erros.push("Altura não pode ser me branco");
	}

	return erros	
}

function exibeMensagensDeErros(erros){

	var ul = document.querySelector("#mensagens_erro");
		ul.innerHTML = "";
		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			li.classList.add("mensagens-erro");
			ul.appendChild(li);
		});
}


function adicionarPacienteNaTabela(paciente){
	var pacienteTr =  montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	// Adiciona A Tr no tbody que possuir id="tabela-pacientes"
	tabela.appendChild(pacienteTr);	
}