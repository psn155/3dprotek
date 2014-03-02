/// <reference path="../app.js" />
// dataService
app.factory("dataService", ["$http", function ($http) {
    var urlBase = "/api/modelsapi",

        _getFeaturedModels = function () {
            return $http.get(urlBase + "?featured=true");
        },

        _getModelView = function (id) {
            return $http.get(urlBase + "/" + id);
        }
    ;

    return {
        getFeaturedModels: _getFeaturedModels,
        getModelView: _getModelView
    }
}]);