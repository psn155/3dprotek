//homeController
var homeController = ["$rootScope", "$scope", "dataService", function ($rootScope, $scope, dataService) {
    document.title = "Home - 3DProTek";

    if (!$rootScope.featuredModels || $rootScope.featuredModels.length == 0) {
        dataService.getFeaturedModels()
            .success(function (result) {
                $rootScope.featuredModels = result;
            }).error(function (result) {
                alert("Error loading featured models");
            });
    }
    //[{
    //    name: "Military Tank",
    //    url: "../../Images/tank_thumbnail.png"
    //},
    //{
    //    name: "Tyrannosaurus",
    //    url: "../../Images/dinosaur_thumbnail.png"
    //},
    //{
    //    name: "Lion",
    //    url: "../../Images/lion n ball_thumbnail.png"
    //},

    //{
    //    name: "Boeing CH-47 Chinook Helicopter",
    //    url: "../../Images/helicopter_thumbnail.png"
    //},
    //{
    //    name: "Skull",
    //    url: "../../Images/skull_thumbnail.png"
    //},

    //{
    //    name: "Couple",
    //    url: "../../Images/couple_thumbnail.png"
    //}];

}];