<?php 


require_once("banco-usuario.php");
require_once("logica-usuario.php");

$usuario = buscaUsuario($conexao, $_POST['email'], $_POST['senha']);
setcookie("usuario_logado", $usuario["email"]);


if($usuario == null){
	$_SESSION['danger'] = "Úsuario ou senha invalidos";
	header("Location: index.php");

}else {
	$_SESSION['success'] = "Úsuario logado com sucesso.";
	logaUsuario($usuario['email']);
	header("Location: index.php?");
}
die();