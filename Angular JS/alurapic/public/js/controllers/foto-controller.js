angular.module('alurapic').controller('FotoController', function($scope,cadastroDeFotos ,$routeParams){
//Nota se force usa $http precisaria dele nos parametros da funcao
    
    $scope.foto = {};
    $scope.mensagem = '';


    if($routeParams.fotoId){ // procurar a foto por id para ver se ja tem.

        recursoFoto.get({fotoId : $routeParams.fotoId}, function(fotoRetornada){
            $scope.foto = fotoRetornada;
        }, function(erro){
            
            $scope.mensagem = 'Não foi possível obter a foto'
        });

        // Como era usando $http
        // $http.get('v1/fotos/'+$routeParams.fotoId)
        //     .success(function(fotoRetornada){
        //         $scope.foto = fotoRetornada;
        //     }).error(function(erro){
        //         console.log('Não foi possivel obter a foto');
        //     });
    }

    $scope.submeter = function() {



        if($scope.formulario.$valid){
            
            cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    //limpa o formulario se for inclusão
                    if($scope.inclusao) $scopo.foto = {};
                    
                }).catch(function(dados){
                    $scope.mensagem = dados.mensagem;
                });
            

        }
    };


});


//if($routeParams.fotoId){// se tem id ele alterar a foto
    
                    //usando Resource
                    // como era o resource
                    // recursoFoto.atualizar({fotoId : $scope.foto._id}, $scope.foto, function(){
                    //     $scope.mensagem = 'A foto '+$scope.foto.titulo+' foi alterada com sucesso!';
                    // }, function(erro) {
                    //     $scope.mensagem = 'Não foi possivel alterar a foto';
                    //     console.log(erro);
                    // })
    
    
    
                    // COMO ERA
                    // $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
                    //     .success(function() {
                    //         $scope.mensagem = 'A foto '+$scope.foto.titulo+' foi alterada com sucesso!';
                    //     }).error(function(erro){
                    //         $scope.mensagem = 'Não foi possivel alterar a foto';
                    //         console.log(erro);
                    //     });
    
                    //COMO ERA O Resource 2
                // }else{ // se não tem id ele cria uma novaFoto
                    
                //     recursoFoto.save($scope.foto, function(){
                //         $scope.foto = {};
                //         $scope.mensagem = 'Foto incluida com sucesso!';
                //     },function(erro){
                //         $scope.mensagem = 'Não foi possivel incluir a foto';
                //         console.log(erro);
                //     });
    
                    // Como era com $http
                    // $http.post('v1/fotos', $scope.foto)
                    // .success(function() {
                    //     $scope.foto = {};
                    //     $scope.mensagem = 'Foto incluida com sucesso!';
                    // })
                    // .error(function(erro) {
                    //     $scope.mensagem = 'Não foi possivel incluir a foto';
                    //     console.log(erro);
                    // });
    
                //}