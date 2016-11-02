
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
})