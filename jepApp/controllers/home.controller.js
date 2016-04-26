var _ = require('underscore');

angular
  .module('jeopardy')
  .controller('HomeController', HomeController);


  HomeController.$inject = ['$scope', '$http','$location','$q','ApiService','$rootScope'];



  function HomeController($scope, $http, $location, $q, ApiService, $rootScope){
    $rootScope.score = 0;

      var vm = this;



    ApiService.getCategories(6)
      .then(function(categories){
        console.log('this is the one we want',categories);
        vm.categories = categories;
        vm.categories.forEach(function(el){
        //   if(el.data.clues_count > 5){
        //     el.data.clues = _.first(el.data.clues, 5);
        //   }
          for(i=0;i<5;i++){
            el.data.clues[i].value = 200 * (i + 1);
          }
        })
      })
    }
