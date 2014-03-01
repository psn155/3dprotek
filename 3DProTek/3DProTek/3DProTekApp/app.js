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

    $scope.featuredModels =
    [{
        name: "Military Tank",
        url: "../../Images/tank_thumbnail.png"
    },
    {
        name: "Tyrannosaurus",
        url: "../../Images/dinosaur_thumbnail.png"
    },
    {
        name: "Lion",
        url: "../../Images/lion n ball_thumbnail.png"
    },
    
    {
        name: "Boeing CH-47 Chinook Helicopter",
        url: "../../Images/helicopter_thumbnail.png"
    },
    {
        name: "Skull",
        url: "../../Images/skull_thumbnail.png"
    },
    
    {
        name: "Couple",
        url: "../../Images/couple_thumbnail.png"
    }];

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