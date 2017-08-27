angular.module('alurapic').controller('GruposController', function($scope,$http){

    $scope.grupos = [];

    $http.get('v1/grupos')
        .success(function(dadosGrupos){
            $scope.grupos = dadosGrupos;
        }).error(function(erro){
            console.log(erro);
        })

});