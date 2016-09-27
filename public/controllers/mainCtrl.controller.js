// Front Page
app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
        //console.log($scope);
    $http.get('/JSON/cities.json').success(function(data) {
        $scope.cities = data;
        console.log($scope);
    });

}]);
