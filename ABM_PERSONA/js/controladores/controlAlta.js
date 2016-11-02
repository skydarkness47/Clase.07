miApp.controller("controlPersonaAlta",function($scope,$state,FileUploader,$http){
	
//inicio las variables
	$scope.SubirdorArchivos = new FileUploader({url:'http://localhost:8080/Clase.07/ws1/archivos'});  
	$scope.persona={};
  	$scope.persona.nombre= "natalia" ;
  	$scope.persona.dni= "1" ;
  	$scope.persona.apellido= "natalia" ;
  	$scope.persona.foto="pordefecto.png";
  	//$scope.persona.foto="http://localhost:8080/Laboratorio-IV-2016/Clase.07/ws1/fotos/pordefecto.png";


	$scope.SubirdorArchivos.onCompleteAll = function(item, response, status, headers) {

            $http.post('http://localhost:8080/Clase.07/ws1/personas/'+ JSON.stringify($scope.persona)) //+ JSON.stringify($scope.persona))
			  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores 
			 		console.info(respuesta);
					 $state.go("persona.Grilla");
				

					},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
					console.info(response);     			
  		});
        };




  $scope.Guardar=function(){
	if($scope.SubirdorArchivos.queue != undefined)
	{
		var nombreFoto="";
		for (i in $scope.SubirdorArchivos.queue) {
			if(nombreFoto != "")
				nombreFoto = nombreFoto + ";" +($scope.SubirdorArchivos.queue[i]._file.name);
			else
				nombreFoto = ($scope.SubirdorArchivos.queue[i]._file.name);
		}
		$scope.persona.foto=nombreFoto;
		console.log($scope.persona.foto);
	}
	$scope.SubirdorArchivos.uploadAll();
  }
})
