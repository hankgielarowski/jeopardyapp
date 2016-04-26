var angular = require('angular');

angular
  .module('jeopardy',[
    'ngRoute',
    'jepApp'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "main.html",
        controller: "HomeController"
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./jepApp');
  require('angular-route');
