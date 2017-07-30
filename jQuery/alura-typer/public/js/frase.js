$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

//na função fraseAleatoria vamos enfileirar a chamada da função fail à função .get. 
//A fail recebe uma função anônima com o código que é executado quando um erro acontece:
//NOTA*** poderia ser $.get("http://localhost:3000/frases", function(data){}).fail(function(){});
function fraseAleatoria(){

	$("#spinner").toggle(); // mostra spinner
	
	$.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(function(){
		$("#erro").toggle();
		
		setTimeout(function(){
			$("#erro").toggle();
		},2000);
		
	}).always(function(){//A função passada para always será sempre chamada independente de a requisição foi bem ou mal sucedida.
		$("#spinner").toggle();// oculta spinner
	});


}

//o JavaScript possui uma função que retorna um número aleatório, a Math.random.


//Dentro da função, temos que pegar o campo da frase e substituir o seu texto.
//Primeiramente vamos substituir o seu texto pela primeira frase do array data:

//Math.floor, que arredonda o número para baixo:

function trocaFraseAleatoria(data){

		var frase = $(".frase");
		var numeroAleatorio = Math.floor(Math.random() * data.length);
		frase.text(data[numeroAleatorio].texto);

		atualizaTamanhoFrase();
		atualizaTempoInicial(data[numeroAleatorio].tempo);


}

function buscaFrase(){
	$("#spinner").toggle(); // mostra spinner
	var fraseId = $("#frase-id").val();
	var dados = {id: fraseId}; //criacao do objeto JS que guarda a id
	 //passando objecto como segundo parametro
	$.get("http://localhost:3000/frases",dados,trocaFrase).fail(function(){
		$("#erro").toggle();
		
		setTimeout(function(){
			$("#erro").toggle();
		},2000);
	}).always(function(){
		$("#spinner").toggle(); // mostra spinner
	});
}

function trocaFrase(dados){
	var frase = $(".frase");
	frase.text(dados.texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(dados.tempo);
}