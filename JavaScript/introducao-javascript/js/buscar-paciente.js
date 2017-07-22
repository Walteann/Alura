
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click',function(event){
	console.log("buscando paciente");

//INTRODUCAO AJAX
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); // configurar

	xhr.addEventListener("load", function(){ // quando carregar

	var erroAJAX = document.querySelector("#erro-ajax");

		if(xhr.status == 200){
			erroAJAX.classList.add("invisivel");
			var resposta = xhr.responseText; // ele retorna um JSON em STRING, mas pra conveter em array tem q USA JSON.parse()
			var pacientes = JSON.parse(resposta); 
			pacientes.forEach(function(paciente){
			adicionarPacienteNaTabela(paciente);	// funcao para adicionar os conteudos , ela esta no form.js
		});	
		
		}else{

			console.log(xhr.status); // erro do status.. pode ser 200, 401, pra mostra ao usuario
			console.log(xhr.responseText);
			
			erroAJAX.classList.remove("invisivel");

		}

		
	


	});

	xhr.send();


});