angular.module('starter').config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listagem'); // escolhe uma rota por PADRAO


$stateProvider

.state('listagem' ,{
	url: '/listagem',
	templateUrl : 'templates/listagem.html',
	controller: 'ListagemController'
})

.state('carroescolhido',{
	url: '/carroescolhido/:carro', //Nota* :carro é o parametro que essa rota vai receber
	templateUrl : 'templates/carroescolhido.html',
	controller : 'CarroEscolhidoController'
})

.state('finalizarpedido', {
	url: '/finalizarpedido/:carro',
	templateUrl: 'templates/finalizarPedido.html',
	controller: 'FinalizarPedidoController'

})


});