var tempoInicial = $("#tempo-digitacao").text();
var campo = $("#campo-digitacao");



$(function(){ // Atalho, isso equivale a $(document).ready(function(){})
	atualizaTamanhoFrase();
	inicializarContadores();
	inicializaCronometro();
	inicializaMarcadores();
	$("#botao-reiniciar").click(reiniciaJogo);
	atualizaPlacar();
	$('#usuarios').selectize({
	    create: true,
	    sortField: 'text'
	});

	$('.tooltip').tooltipster({
		trigger: "custom"
	});
	
});


function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numPalavras = frase.split(" ").length;
	$("#tamanho-frase").text(numPalavras);
}

function atualizaTempoInicial(tempo){
	var tempoAtualizado = $("#tempo-digitacao");
	tempoAtualizado.text(tempo);
	tempoInicial = tempo;
}

function inicializarContadores() {
	campo.on("input", function(){
	var conteudo = campo.val();

	var qtsPalavras = conteudo.split(/\S+/).length - 1;
	$("#contador-palavras").text(qtsPalavras);

	var qtsCaracteres = conteudo.length;
	$("#contador-caracteres").text(qtsCaracteres);
});
}

function inicializaCronometro(){
	
	campo.one("focus",function(){
	var tempoRestante = $("#tempo-digitacao").text();
	
	var cronometroID = setInterval(function(){
		tempoRestante--;
		$("#tempo-digitacao").text(tempoRestante);
		$("#botao-reiniciar").attr("disabled",true);
		if(tempoRestante < 1){
			clearInterval(cronometroID);
			finalizaJogo();
			$("#botao-reiniciar").attr("disabled",false);
		}
	},1000);
});
}

function finalizaJogo(){
	$("#campo-digitacao").attr("disabled",true);
	campo.toggleClass("campo-desativado");
	inserePlacar();
}


function inicializaMarcadores(){

	campo.on("input", function(){
	var frase = $(".frase").text();
	var digitado = campo.val();
	var comparavel = frase.substr(0, digitado.length);

	if(digitado == comparavel){
		campo.addClass("borda-verde");
		campo.removeClass("borda-vermelha");
	}else{
		campo.addClass("borda-vermelha");
		campo.removeClass("borda-verde");
	}


});
}



function reiniciaJogo(){
	
	$("#campo-digitacao").attr("disabled",false);
	$("#campo-digitacao").val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	campo.toggleClass("campo-desativado");
	campo.removeClass("borda-verde");
	campo.removeClass("borda-vermelha");
	inicializaCronometro();
	
}


