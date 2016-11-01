miApp.service('Grilla', function ($http) {
        
var Url = 'http://localhost/Clase.07/ws1/';

  this.TraerTodos = TraerTodos;
  function TraerTodos(){
    return $http.get(Url + 'personas')
      .then(function(respuesta) { 
      console.info(respuesta.data);    
       return respuesta.data

    })
  };
    


    this.BorrarObjeto = BorrarObjeto;

   function BorrarObjeto(id){
    console.info(id);
    return $http.delete(Url + "personas/" + id) 
    .then(function(respuesta) {
      return TraerTodos();
    });
   };






  })
