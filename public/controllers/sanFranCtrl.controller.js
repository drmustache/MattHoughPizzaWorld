// San Francisco
app.controller('sanFranCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.accordion = {
      current: null
    };

    $http.get('/JSON/sanFranPizzas.json').success(function(data) {
        $scope.sanFranPizza = data.sanFranPizza;
        $scope.PizzaType = data.sanFranPizza;
    });

}]);