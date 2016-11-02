miApp.controller("controlLogin",function($scope,$state,$auth){

$scope.usuario={};
$scope.usuario.correo = "hola@hola";
$scope.usuario.password = "chau";

if($auth.isAuthenticated())
	console.info("Token",$auth.getPayload());
else
	console.info("No Token",$auth.getPayload());

$scope.IniciarSeccion = function(){
	$auth.login($scope.usuario)
  	.then(function(response) {
  		if($auth.isAuthenticated()){
  			$state.go("persona.Grilla");
			console.info("Token Validado", $auth.getPayload());
			
		}
		else
			console.info("No Token Valido",$auth.getPayload());
    	
  	})
  	.catch(function(response) {
    	console.info("no",response);
  	});
}

})