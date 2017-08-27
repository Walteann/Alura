angular.module('meusServicos',['ngResource']).factory('recursoFoto',function($resource){


    return recursoFoto = $resource('v1/fotos/:fotoId', null, {     
                'atualizar' : {
                    method: 'PUT'
                }
    });

}).factory('cadastroDeFotos', function(recursoFoto, $q,$rootScope) {

    var servico = {};

    var evento = 'fotoCadastrada';

    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){
                recursoFoto.atualizar({fotoId: foto._id}, foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                        mensagem: 'Foto '+foto.titulo+' Atualizado com sucesso!',
                        inclusao: false
                    });


                }, function(erro){
                    console.log(erro)
                    reject({
                        mensagem: 'Não foi possivel alterar a foto'+foto.titulo
                    });
                });

            }else{

                recursoFoto.save(foto, function(){
                    $rootScope.$broadcast(evento);
                    resolve({
                    mensagem:  'Foto '+foto.titulo+' incluida com sucesso!',
                    inclusao: true
                });

                }, function(erro){
                    console.log(erro)
                    reject({
                        mensagem: 'Não foi possivel incluir a foto'+foto.titulo
                    });
                });

            }
        });
    }

    return servico;

});