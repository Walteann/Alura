// old se tivesse sido usado $http tinha q colocar como paramentro
// angular.module('alurapic').controller('FotosController', function($scope, $http, $resource){
angular.module('alurapic').controller('FotosController', function($scope,recursoFoto){    

    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = '';


    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    $scope.remover = function(foto) {

        recursoFoto.delete({fotoId : foto._id}, function(){
            
            var indiceFoto = $scope.fotos.indexOf(foto);// localiza o indice da foto
            $scope.fotos.splice(indiceFoto,1);// splice para remover a foto. recebe o indice e a quantidade
    
            $scope.mensagem = 'Foto '+ foto.titulo +' removida com sucesso!';
        },function() {
            
            console.log(erro);
            $scope.mensagem = 'Não foi possivel remover a foto '+ foto.titulo;
        });

        
    };    

});