miApp.service('Grilla', function ($http) {
        

     this.TraerTodos = function(){

   return $http.get('http://localhost:8080/Clase.07/ws1/personas')
    .then(function(respuesta) {   

         return respuesta;

    },function errorCallback(response) {
             $scope.ListadoPersonas= [];

        });

     };


     this.Borrar = function(){

$http.delete("http://localhost:8080/Clase.07/ws1/personas/" + persona.id) 
 .then(function(respuesta) {   
    $http.get('http://localhost:8080/Clase.07/ws1/personas')
        .then(function(respuesta) {     
        return  respuesta.data;

    },function errorCallback(response) {
             $scope.ListadoPersonas= [];

        });

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });


     };
  })
