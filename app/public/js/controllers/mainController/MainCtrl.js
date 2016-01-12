
app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    'use strict';
    $scope.message = 'Hello world !!!';

    $scope.getMessage = function() {
        $http.get('/plop')
        .then(function(res) {
                $scope.message = res.data;
            })
        ;
    }
}]);
