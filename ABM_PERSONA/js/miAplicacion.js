var miApp = angular.module("AngularABM",
	["ui.router",
	"angularFileUpload",
	'satellizer',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit'
	]
	);


miApp.config(function($stateProvider,$urlRouterProvider,$authProvider){

$authProvider.loginUrl = 'Clase.07/ABM_PERSONA/servidor/jwt/php/auth.php';
$authProvider.tokenName = 'TokenNameAxelCores';
$authProvider.tokenPrefix = 'AngularABM';
$authProvider.authHeader = 'data';

	$stateProvider
		.state(
			"inicio",{
				url: "/inicio",
				templateUrl: "inicio.html",
				controller:"controlInicio",
				cache: false
			})
			.state(
			"persona",{
				url:"/persona",
				abstract:true,
				templateUrl:"./AbmPersona/abstractaPersona.html",
				controller:"controlPersonaMenu",
				cache: false

			})
			.state(
			"persona.menu",{
				url:"/lta",
				cache: false,
				views: {
					"contenido":{
					templateUrl:"./AbmPersona/personaAlta.html",
					controller:"controlPersonaAlta",
				cache: false
						}
				}
			}).state(
			"persona.Grilla",{
				url:"/grilla",
				cache: false,
				views: {
					"contenido":{
					templateUrl:"./views/personaGrilla.html",
					controller:"controlGrilla",
				cache: false
						}
				}
			}).state(
			"login",{
				url:"/login",
				abstract:true,
				templateUrl:"./formularios/LoginAngular/abstractoLogin.html",
				cache: false

			}).state(
			"login.menu",{
				url:"/menuLogin",
				views: {
					"login":{
					templateUrl:"./formularios/LoginAngular/login.html",
					controller:"controlLogin",
				cache: false
						}
				}
			}).state(
			"login.registro",{
				url:"/registroLogin",
				views: {
					"login":{
					templateUrl:"./formularios/LoginAngular/registro.html",
					controller:"ControlRegistro",
				cache: false
						}
				}
			}).state(
			"sala",{
				url:"/salaDeJuegos",
				abstract:true,
				templateUrl:"./salaDeJuegos/abstractaJuegos.html",
				cache: false

			}).state(
			"sala.menu",{
				url:"/menuSalaJuegos",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/juegosMenu.html",
					controller:"controlJuegosMenu",
				cache: false
						}
				}
			}).state(
			"sala.juego1",{
				url:"/juego1",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/V_01.html",
					controller:"controlSalaJuegos1",
				cache: false
						}
				}
			}).state(
			"sala.juego2",{
				url:"/juego2",
				views: {
					"sala":{
					templateUrl:"./salaDeJuegos/V_02.html",
					controller:"controlSalaJuegos2",
				cache: false
						}
				}
			}).state(
			'persona.modificacion',{
				url: '/modificacion/{id}?:nombre:apellido:dni:foto',
				cache: false,
				views: {
					"contenido":{
						templateUrl: './AbmPersona/personaModificar.html',
						controller: 'controlModificacion',
						cache: false
					}
				}})




		$urlRouterProvider.otherwise("/inicio");

});


miApp.controller("controlInicio",function($scope){





});

miApp.controller("controlJuegosMenu",function($scope){
	$scope.IraMenu = function(){
		$state.go("inicio");
	}
});

miApp.controller("controlPersonaMenu",function($scope,$state){

	
	$scope.IraMenu = function(){
		$state.go("persona.menu");
	}


	$scope.IraAlta = function(){
		$state.go("persona.Alta");
	}

	$scope.IraGrilla = function(){
		$state.go("persona.Grilla");
	}

});
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
});




miApp.controller("controlPersonaGrilla",function($scope,$state,$http){

	
 	$http.get('http://localhost:8080/Clase.07/ws1/personas')
 	.then(function(respuesta) {   	
      	 $scope.ListadoPersonas = respuesta.data;

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];

     	});

 	
 	$scope.Borrar=function(persona){


$http.delete("http://localhost:8080/Clase.07/ws1/personas/" + persona.id) 
 .then(function(respuesta) {   
 	$http.get('http://localhost:8080/Clase.07/ws1/personas')
 		.then(function(respuesta) { 	
      	$scope.ListadoPersonas = respuesta.data;

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];

     	});

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });


 	}


$scope.Modificar=function(persona)
	{
		$state.go("persona.modificacion", persona);
	};

});

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

});

miApp.controller("ControlRegistro",function($scope,$state){





});

miApp.controller("controlSalaJuegos1",function($scope,$state){
$scope.intentos = 0;
$scope.comenzar=function(){
	$scope.Numero = Math.floor((Math.random() * 100) + 1) ;
};

$scope.verificar = function(){
	$scope.intentos = $scope.intentos + 1;
	if($scope.Numero == $scope.num){
		$scope.result = "Usted es un ganador!!! y en solo " + $scope.intentos;

		$scope.intentos = 0;

		$scope.comenzar();

		if($scope.intentos == 1){
			$scope.result = $scope.result + " intento.";
		}else{
			$scope.result = $scope.result + " intentos.";
		}

	}
	else
	{
		if($scope.num > $scope.Numero ){
			$scope.result = "El numero secreto es menor al ingresado.";
		}else{
			$scope.result = "El numero secreto es mayor al ingresado.";
		}

	}
	
}


});

miApp.controller("controlSalaJuegos2",function($scope,$state){

$scope.intentos = 0;
$scope.comenzar=function(){
	$scope.Numero = Math.floor((Math.random() * 100) + 1) ;
};

$scope.verificar = function(){
	$scope.intentos = $scope.intentos + 1;

	if($scope.Numero == $scope.num){
		$scope.intentos = 0;

		$scope.comenzar();

		switch($scope.intentos)
		{
			case 1:
				$scope.result = "Usted es Psiquico";
			break;
			case 2:
				$scope.result = "Excelente percepción";
			break;
			case 3:
				$scope.result = "Esto es suerte";
			break;
			case 4:
				$scope.result = "Excelente técnica";
			break;
			case 5:
				$scope.result = "Usted está en la media";
			break;
			case 6:
			case "7":
			case "8":
			case "9":
				$scope.result = "Falta técnica";
			break;
			case 10:
				$scope.result = "Afortunado en el amor!!";
			break;
			default:
				$scope.result = "Afortunado en el amor!!";
			break;
		}
	}
	else
	{		
		$scope.result = "Siga intentando!!";
	}
	
}
});

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

	$scope.SubirdorArchivos.onSuccessItem=function(item, response, status, headers)
	{
		$http.put('http://localhost:8080/Clase.07/ws1/personas/'+ JSON.stringify($scope.persona))
		.then(function(respuesta) 
		{
			$state.go("persona.Grilla");
		},
		function errorCallback(response)
		{
			//aca se ejecuta cuando hay errores
			console.log( response);     			
		});
		};

	$scope.Modificar=function(persona)
	{
	
		if($scope.SubirdorArchivos.queue[0]!=undefined)
		{
			var nombreFoto = $scope.SubirdorArchivos.queue[0]._file.name;
			$scope.persona.foto=nombreFoto;
		}
		$scope.SubirdorArchivos.uploadAll();
	}

});