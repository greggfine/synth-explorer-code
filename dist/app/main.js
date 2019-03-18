var app = angular.module('synthApp', ['ngRoute', 'ngAnimate']);

// Route Configuration
app.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/synths', {
            templateUrl: 'views/synths.html'
        })
        .when('/synths/:name/:description/:image', {
            templateUrl: 'views/synths-detail.html',
            controller: 'DetailsController'
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
            templateUrl: 'views/about.html'
        }).otherwise({
            redirectTo: '/home'
        })
}])

// Access JSON data
app.controller('SynthAppController', ['$scope', '$http', function ($scope, $http){
    $http.get('data/synths.json').then(successCallback, errorCallback);
    function successCallback(response){
        $scope.myData = response.data;
    };
    function errorCallback(error) {
        console.log(error);
    };
}])

// Send form to contact success message
app.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };
}])

// Send route parameter data
app.controller('DetailsController', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.model = {
        name: $routeParams.name,
        description: $routeParams.description,
        image: $routeParams.image,
    };
}])

// Open and Close Slide Menu
app.controller('MenuController', ['$scope', function ($scope) {
    $scope.openSlideMenu = function(){
        document.getElementById("side-menu").style.width = "250px";
    };
    $scope.closeSlideMenu = function (){
        document.getElementById("side-menu").style.width = "0px";
    };
}])