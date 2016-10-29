angular
  .module('miApp', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap',
    "AngularABM",
    "ui.router",
    "angularFileUpload",
    'satellizer'
    ]
    )
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('simple');
    $stateProvider

   .state(
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
      })


  });
