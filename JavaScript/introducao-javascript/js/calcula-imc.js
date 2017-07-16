var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");


for(var i = 0 ; i < pacientes.length ;  i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura  = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
	tdImc.textContent = "Peso Inválido";
	pesoEhValido = false;
	paciente.classList.add("paciente-invalido"); // adiciona uma classe com configuracoes CSS.
	// classList mostras classes que aquele HTML tem
}

if(altura <= 0 || altura >= 3.00){
	tdImc.textContent = "altura inválida";
	alturaEhValida = false;
	paciente.classList.add("paciente-invalido");
}

if(pesoEhValido == true && alturaEhValida == true){

	var imc = calculaImc(peso,altura);
	tdImc.textContent = imc;
}

}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return  imc.toFixed(2); // toFixed limita as casas decimais.

}