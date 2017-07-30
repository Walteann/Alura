$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);


function inserePlacar(){
	var corpoTabela = $(".placar").find("tbody");
	var usuario = $("#usuarios").val();
	var numPalavras = $("#contador-palavras").text();
	var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>"

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removeLinha);

	corpoTabela.prepend(linha);
	/*
	O comando que adiciona um novo elemento como primeiro filho é o prepend().
	Ele recebe um elemento HTML ou uma string e adiciona-o como um filho,
	antes dos filhos que ele já possuía.

	*/	

	$(".placar").slideDown(500);
	scrollPlacar();		


}

function scrollPlacar(){
	var posicaoPlacar = $(".placar").offset().top; 
	//Essa função nos retorna a distância em que o elemento está do topo e da esquerda da página.
	// $(".placar").offset().top; Se acessarmos o valor do topo (top), teremos o valor 
	//exato para onde queremos scrollar a página.
	$('body').animate(
	{
		scrollTop: posicaoPlacar+"px"


	},1000);
}

// cria um th, td, a i.
function novaLinha(usuario, numPalavras){

	var linha = $("<tr>");
	var colunaUsuario = $("<td>").text(usuario);
	var colunaPalavras = $("<td>").text(numPalavras);
	var colunaRemover = $("<td>");

	var link = $("<a>").addClass("botao-remover").attr("href","#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	// Icone dentro do <a>
	link.append(icone);

	// <a> dentro do <td>
	colunaRemover.append(link);

	// Os três <td> dentro do <tr>
	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha;

	/*
	A função que adiciona um novo elemento como último filho é a append.
	Ela recebe um elemento HTML ou uma string e adiciona-o como um filho,
	depois dos filhos que ele já possuía.

	*/

}

$(".botao-remover").click(removeLinha);
function removeLinha(){
	event.preventDefault();
	var linha = $(this).parent().parent();//this nota1, parent() nota2
	linha.fadeOut(1000);
	setTimeout(function(){
		linha.remove();
	},1000);
	
}
/* ##nota1
Temos que lembrar que dentro de um evento do Javascript e do jQuery,
a palavra reservada this sempre se refere ao elemento que sofreu o evento,
neste caso ao elemento clicado

##nota2
A função .parent() tem como objetivo navegar pela árvore de elementos do HTML.
Ela por padrão retorna o pai do elemento em que foi chamada
*/

function mostraPlacar(){
	$(".placar").stop().slideToggle(1000);

}

//stop()  Agora, ao clicarmos diversas vezes no botão do placar, 
//a animação não será executada várias vezes, só será executada
// a última animação que nós chamamos!

function sincronizaPlacar(){

	var placar = [];
	var linhas = $("tbody>tr");
	linhas.each(function(){

		var usuario = $(this).find("td:nth-child(1)").text();
		var palavras = $(this).find("td:nth-child(2)").text();
		var score = {
			usuario: usuario,
			pontos: palavras
		};

		placar.push(score); //guardando o score no array
	});

	var dados = {
		placar: placar
	}
	$.post("http://localhost:3000/placar",dados, function(){
		console.log("salvou o plcar no sevidor");
		$(".tooltip").tooltipster("open").tooltipster("content","Sucesso!! ao sincronizar");
	}).fail(function(){
		$(".tooltip").tooltipster("open").tooltipster("content","Falha!! ao sincronizar");

	}).always(function(){

		setTimeout(function(){
			$(".tooltip").tooltipster("close");
		},1200);

		
		
	});


}


function atualizaPlacar(){

	$.get("http://localhost:3000/placar",function(data){

		$(data).each(function(){
			var linha = novaLinha(this.usuario, this.pontos);
			linha.find(".botao-remover").click(removeLinha);
			$("tbody").append(linha);
		});

	});
}