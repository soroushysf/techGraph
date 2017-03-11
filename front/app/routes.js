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
        .otherwise({redirectTo: '/'})
}]);
