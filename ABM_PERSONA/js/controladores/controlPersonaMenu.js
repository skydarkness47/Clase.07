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

})