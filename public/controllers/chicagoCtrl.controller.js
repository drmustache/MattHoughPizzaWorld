// Chicago
app.controller('chicagoCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.accordion = {
      current: null
    };

    $http.get('/JSON/chicagoPizzas.json').success(function(data) {
        $scope.ChicagoPizzas = data.ChicagoPizzas;
        $scope.PizzaType = data.ChicagoPizzas
        console.log($scope.ChicagoPizzas);
    });

}]);