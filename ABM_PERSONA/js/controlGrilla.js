miApp.controller('controlGrilla', function($scope, Grilla, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    console.info(Grilla);
    $scope.datos ={}
    Grilla.TraerTodos().
    then(function(respuesta){
      $scope.datos = respuesta.data;
  
      });

    console.info($scope.datos);


    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
 
    $scope.gridOptions.columnDefs = columDefs();
    // Activo la busqueda en todos los campos
          $scope.gridOptions.data = $scope.datos;

  //  $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

function columDefs () {
  return [
        { field: 'nombre', name: 'nombre'},
        ];
    }

  
  })
