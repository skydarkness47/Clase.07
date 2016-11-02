
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
          templateUrl:"./AbmPersona/personaGrilla.html",
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