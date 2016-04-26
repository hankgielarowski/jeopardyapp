var angular = require('angular');

angular
  .module('jepApp',[
    'ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/jepapp',{
        templateUrl: "./jepApp/templates/index.html",
        controller: "HomeController as HomeCtrl"
      })
      .when('/question',{
        templateUrl: "./jepApp/templates/questions.html",
        controller: "QuestionController"
      })
  })
require('angular-route')
