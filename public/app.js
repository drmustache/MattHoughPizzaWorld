var app = angular.module('pW', ['ngRoute']);
app.directive("displayPizzas", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/displayPizzas.html',
       replace: true
   }
});
app.directive("displayCity", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/displayCity.html',
       replace: true
   }
});

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/main.view.htm',
            controller: 'mainCtrl'
        }). // Chicago Routes
        when('/chicago', {
            templateUrl: 'views/chicago.view.htm',
            controller: ''
        }).
        when('/chicago/menu', {
            templateUrl: 'views/chiMenu.view.htm',
            controller: 'chicagoCtrl'
        }). // New York Routes
        when('/newYork', {
            templateUrl: 'views/newYork.view.htm',
            controller: ''
        }).
        when('/newYork/menu', {
            templateUrl: 'views/newYorkMenu.view.htm',
            controller: 'newYorkCtrl'
        }). // San Fransico Routes
        when('/sanFrancisco', {
            templateUrl: 'views/sanFran.view.htm',
            controller: 'sanFranCtrl'
        }).
        when('/sanFrancisco/menu', {
            templateUrl: 'views/sanFranMenu.view.htm',
            controller: 'sanFranCtrl'
        }).
        otherwise({redirectTo: '/'})
}]);




