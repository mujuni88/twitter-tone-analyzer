(function () {

        angular.module('myApp', [])
            .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl($scope, $http) {
            var vm = this;
            $scope.hello = "HELLO WORLD";

            function analyze(query){
                $http.get('/api/twitter/' + query).
                success(function(data) {
                    $scope.form = data.post;
                });
            }
        }
    })();
