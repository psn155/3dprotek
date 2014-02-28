/// <reference path="../Scripts/angular.js" />

var app = angular.module("app", ['ngRoute']);

// Define routings rules
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "3DProTekApp/templates/home.html"
    })
    .when("/pyo", {
        controller: "pyoController",
        templateUrl: "3DProTekApp/templates/pyo.html"
    })
    .when("/contact", {
        controller: "contactController",
        templateUrl: "3DProTekApp/templates/contact.html"
    })
    .when("/about", {
        controller: "aboutController",
        templateUrl: "3DProTekApp/templates/about.html"
    })
    .when("/our-designs", {
        controller: "ourDesignsController",
        templateUrl: "3DProTekApp/templates/ourDesigns.html"
    })
    .otherwise({ redirectTo: "/" });
}]);

// Initializing rootScope data. This run() is called after all modules have been loaded
app.run(["$rootScope", "$location", function ($rootScope, $location) {
    $rootScope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);

//homeController
var homeController = ["$scope", function ($scope) {
    document.title = "Home - 3DProTek";
}];

//pyoController
var pyoController = ["$scope", function ($scope) {
    document.title = "P Y O - 3DProTek";
}];

//contactController
var contactController = ["$scope", function ($scope) {
    document.title = "Contact - 3DProTek";
}];

//aboutController
var aboutController = ["$scope", "$location", function ($scope, $location) {
    document.title = "About - 3DProTek";    
}];

//ourDesignsController
var ourDesignsController = ["$scope", function ($scope) {
    document.title = "Our 3D Designs - 3DProTek";
}];