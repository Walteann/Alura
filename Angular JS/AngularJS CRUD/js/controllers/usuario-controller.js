angular.module('meuCrud').controller('usuarioController', function($scope){

    $scope.novoRegistro = {};
    $scope.editarRegistro = {};
    $scope.mensagem = "";

    $scope.registros = [
        {nome: 'Walteann', telefone: '999988888', email: 'walteann@email.com'},
        {nome: 'Erividiane', telefone: '999911111', email: 'erividiane@email.com'},
        {nome: 'Gato', telefone: '999922222', email: 'gato@email.com'},
        {nome: 'Laura', telefone: '222288888', email: 'laura@email.com'},
        {nome: 'Lara', telefone: '999966666', email: 'lara@email.com'}
    ];

    
    $scope.registrar = function() {
        
        $scope.registros.push($scope.novoRegistro);
        $scope.mensagem = $scope.novoRegistro.nome + " registrado com sucesso!";
        $scope.novoRegistro = {};
        
    }

    $scope.registroClicado = function(registro) {
        $scope.registroSelecionado = registro; 
    }

    $scope.alterarRegistro = function(){
        $scope.mensagem = "Alterado com sucesso!";
    }

    $scope.deletarRegistro = function() {
        $scope.mensagem = $scope.registroSelecionado.nome + " removido com sucesso!";
        $scope.registros.splice($scope.registros.indexOf($scope.registroClicado), 1);
        
    }

    $scope.limparMensagem = function() {
        $scope.mensagem = "";
    }
    

});