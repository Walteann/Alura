var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura  = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente = document.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
	tdImc.textContent = "Peso Inválido";
	pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00){
	tdImc.textContent = "altura inválida";
	alturaEhValida = false;
}



if(pesoEhValido == true && alturaEhValida == true){

	var imc = peso/(altura * altura);
	tdImc.textContent = imc;
}
