/// <reference path="../Scripts/angular.js" />

var app = angular.module("app", ['ngRoute']);

// Routings
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "3DProTekApp/templates/home.html"
    })
    .when("/pyo", {
        controller: "pyoController",
        templateUrl: "3DProTekApp/templates/pyo.html"
    })
    .otherwise({ redirectTo: "/" });
}]);

//homeController
var homeController = ["$scope", function ($scope) {
    

}];

//pyoController
var pyoController = ["$scope", function ($scope) {

}];