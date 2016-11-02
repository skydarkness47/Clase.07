miApp.controller('controlModificacion', function($scope, $http, $state, $stateParams, FileUploader)//, $routeParams, $location)
{
	$scope.persona={};
	$scope.DatoTest="**Modificar**";
	$scope.SubirdorArchivos = new FileUploader({url:'http://localhost:8080/Clase.07/ws1/archivos'});  
	$scope.persona.id=$stateParams.id;
	$scope.persona.nombre=$stateParams.nombre;
	$scope.persona.apellido=$stateParams.apellido;
	$scope.persona.dni=$stateParams.dni;
	$scope.persona.foto=$stateParams.foto;

	$scope.SubirdorArchivos.onCompleteAll=function(item, response, status, headers)
	{
		$http.put('http://localhost:8080/Clase.07/ws1/personas/'+ JSON.stringify($scope.persona))
		.then(function(respuesta) 
		{
			console.info(respuesta);
			$state.go("persona.Grilla");
		},
		function errorCallback(response)
		{
			//aca se ejecuta cuando hay errores
			console.log( response);     			
		});
		};

	$scope.ModificarObjeto=function(persona)
	{
	
		if($scope.SubirdorArchivos.queue[0]!=undefined)
		{
			var nombreFoto="";
		for (i in $scope.SubirdorArchivos.queue) {
			if(nombreFoto != "")
				nombreFoto = nombreFoto + ";" +($scope.SubirdorArchivos.queue[i]._file.name);
			else
				nombreFoto = ($scope.SubirdorArchivos.queue[i]._file.name);
		}
		$scope.persona.foto=nombreFoto;
		console.info($scope.persona.foto);
		}
		$scope.SubirdorArchivos.uploadAll();
	}

})