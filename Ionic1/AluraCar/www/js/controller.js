angular.module('starter').controller('ListagemController', function($scope, CarroService){
	

	$scope.dataAtual = '19/09/2017';
	
	CarroService.obterCarros().then(function(dados){
    $scope.listaDeCarros = dados;
  });

    /*$scope.listaDeCarros = [
      {'nome':"BMW", 'preco': 70000 },
      {'nome':"ONIX 1.6", 'preco': 65000 },
      {'nome':"Fiesta 2.0", 'preco': 40000 },
      {'nome':"C3 1.0", 'preco': 42000 },
      {'nome':"Uno Fire", 'preco': 25000 },
      {'nome':"Sentra 2.0", 'preco': 28000 },
      {'nome':"Astra Sedan", 'preco': 33000 },
      {'nome':"Vectra 2.0 Turbo", 'preco': 38000 },
      {'nome':"Hilux 4x4", 'preco': 55000 },
      {'nome':"Montana Cabine dupla", 'preco': 80000 },
      {'nome':"Outlander 2.4", 'preco': 67000 },
      {'nome':"Fusca 1500", 'preco': 5000 }
    ]*/

});


angular.module('starter').controller('CarroEscolhidoController', function($stateParams, $scope){


  $scope.carroEscolhido = angular.fromJson($stateParams.carro); // transforma uma string em um objeto

  $scope.listaDeAcessorios = [
    {"nome": "Freio ABS", "preco": 800},
    {"nome": "Ar Condicionado", "preco": 1000},
    {"nome": "MP3 Player", "preco": 500}
  ]

  $scope.mudou = function(acessorio, isMarcado){

    if(isMarcado){
      $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;

    }else{
      $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
    }

  };

});

angular.module('starter').controller('FinalizarPedidoController', function($stateParams, $scope,
   $ionicPopup, $state ,CarroService){

  $scope.carroFinalizado = angular.fromJson($stateParams.carro);

  $scope.pedido = {};

  $scope.finalizarPedido = function(){

    var pedidoFinalizado = {
      params: {
        carro: $scope.carroFinalizado.nome,
        preco: $scope.carroFinalizado.preco,
        nome: $scope.pedido.nome,
        endereco: $scope.pedido.endereco,
        email: $scope.pedido.email
      }
    }

    CarroService.salvarPedido(pedidoFinalizado).then(function(){

      $ionicPopup.alert({
        title: 'Parabéns',
        template: 'Você acaba de comprar um carro!!'
      }).then(function(){
        $state.go('listagem');
      });
      
    }, function(erro){
      $ionicPopup.alert({
        title: 'Deu Erro!!',
        template: 'Campos Obrigatorios!!'
      });
      
    });


  };

});
//joao@alura.com.br       alura123
angular.module('starter').controller('LoginController', function($scope, CarroService, $ionicPopup,$state){

  $scope.login = {};

  $scope.realizarLogin = function(){

    var dadosDoLogin = {
      params : {
        email: $scope.login.email,
        senha: $scope.login.senha
      }
    }

    CarroService.realizarLogin(dadosDoLogin).then(function(dados){

      $state.go('listagem');

    }, function(erro){
      $ionicPopup.alert({
        title: 'opa!',
        template : 'Email ou senha incorretos.'
      })
    })


  }


});
