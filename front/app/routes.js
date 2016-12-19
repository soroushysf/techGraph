/**
 * Created by soroush on 12/7/16.
 */


app.config(['$routeProvider','$locationProvider' ,function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            templateUrl : 'app/components/graphView/graphView.html',
            controller : 'graphController'

        })
        .when('/Home', {
            templateUrl : 'app/components/graphView/graphView.html',
            controller : 'graphController'

        })
        .when('/graphTable', {
            templateUrl : 'app/components/GraphTable/graphTable.html',
            controller : 'graphTableController'
        })
}]);
