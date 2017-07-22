
var pacientes = document.querySelectorAll(".paciente");

	/*pacientes.forEach(function(paciente){
		paciente.addEventListener("dblclick", function() {

			this.remove();

		});
	});
	*/

	var tabela = document.querySelector("table");

	tabela.addEventListener("dblclick", function(event) {
		
		//var alvoEvento = event.target; // verifica quem é o alvo que foi clicado
		//var paiDoAlvo = alvoEvento.parentNode; // parentNode sobe para o parente de cima, 
		event.target.parentNode.classList.add("fadeOut");

		setTimeout(function() {

			event.target.parentNode.remove();
		},500);

		
		
	});