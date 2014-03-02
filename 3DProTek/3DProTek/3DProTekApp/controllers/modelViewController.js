//modelViewController
var modelViewController = ["$rootScope", "$scope", "$routeParams", "dataService", function ($rootScope, $scope, $routeParams, dataService) {
    document.title = "3D Model - 3DProTek";
        
    dataService.getModelView($routeParams.id)
        .success(function (result) {
            $scope.model = result;
        })
        .error(function (result) {
            alert("Error loading the 3D model");
        });
}];