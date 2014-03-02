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
    .when("/our-3d-designs", {
        controller: "ourDesignsController",
        templateUrl: "3DProTekApp/templates/ourDesigns.html"
    })
    .when("/model", {
        controller: "modelViewController",
        templateUrl: "3DProTekApp/templates/model-view.html"
    })
    .otherwise({ redirectTo: "/" });
}]);

// Initializing rootScope data. This run() is called after all modules have been loaded
app.run(["$rootScope", "$location", function ($rootScope, $location) {
    $rootScope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $rootScope.imgFolderUrl = "/3DModels/Images",
      
    $rootScope.featuredModels = [];
}]);