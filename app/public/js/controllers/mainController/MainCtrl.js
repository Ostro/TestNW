
app.controller('MainCtrl', ['$scope', '$http', 'title', function($scope, $http, title) {
    'use strict';
    $scope.title = title;

    $scope.getMessage = function() {
        $http.get('/testAPI')
        .then(function(res) {
                $scope.message = res.data;
            })
        ;
    }
}]);
