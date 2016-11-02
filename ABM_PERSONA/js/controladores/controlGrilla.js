miApp.controller('controlGrilla', function($scope, Grilla, i18nService,$state) {
  
Grilla.TraerTodos()
 	.then(function(respuesta) {   	
 		//console.info(respuesta);
      	 $scope.ListadoPersonas = respuesta;

    },function(error){
        console.info(error);
      });

 	
 	$scope.BorrarObjeto=function(persona){
console.info(persona);
	Grilla.BorrarObjeto(persona.id)
 	.then(function(respuesta) {   	
 		console.info(console.info(persona));
      	 $scope.ListadoPersonas = respuesta;

    },function(error){
        console.info(error);
      });

 	}
  
  
$scope.Modificar=function(persona)
  {
    console.info(persona);
    $state.go("persona.modificacion", persona);
  };
  

$scope.ModificarObjeto=function(persona)
  {
    console.info(persona);
    $state.go("persona.modificacion", persona);
  };

  
  })
