var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/keyboards', {
            templateUrl: 'views/keyboards.html'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'myAppController'
        }).otherwise({
            redirectTo: '/home'
        })
}])


app.controller('myAppController', ['$scope', '$http', function($scope, $http){

    $http.get('data/gInfo.json').then(successCallback, errorCallback);
    function successCallback(data) {
        $scope.myData = data.data;
        console.log($scope.myData)
    }
    function errorCallback(error) {
        console.log(error)
    }

}]);

app.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    }
}])


