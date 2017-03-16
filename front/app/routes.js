/**
 * Created by soroush on 12/7/16.
 */


app.config(['$routeProvider','$locationProvider' ,function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/graphView/graphView.html'

        })
        .when('/Home', {
            templateUrl : 'app/components/graphView/graphView.html'

        })
        .when('/graphTable', {
            templateUrl : 'app/components/GraphTable/graphTable.html'
        })
        .when('/searchTechs/first', {
            templateUrl : 'app/components/searchTechs/firstPage/searchTechsFirst.html'
        })
        .when('/searchTechs/second', {
            templateUrl : 'app/components/searchTechs/secondPage/searchedGraph.html'
        })
        .otherwise({redirectTo: '/'})
}]);
