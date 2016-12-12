/**
 * Created by soroush on 12/7/16.
 */


app.config(['$routeProvider','$locationProvider' ,function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/searchBar/searchBar.html',
            controller : 'mainCtrl'
        })
        .when('/searchBar', {
            templateUrl : 'app/components/searchBar/searchBar.html',
            controller : 'searchBarCtrl'
        })
        .when('/home', {
            templateUrl : 'app/components/GraphView/graphView.html',
            controller : 'graphViewCtrl'
        })
}]);
