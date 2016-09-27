// New York
app.controller('newYorkCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.accordion = {
      current: null
    };

    $http.get('/JSON/newYorkPizza.json').success(function(data) {
        $scope.NewYorkPizzas = data.NewYorkPizzas;
        $scope.PizzaType = data.NewYorkPizzas;
    });

}]);