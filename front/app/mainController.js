/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope, $location) {

    $scope.title = "Tech Graph";
    $scope.items = menuItems;


    $scope.$on('$routeChangeStart', function() {

        switch ($location.path()){
            case '/graphTable' :
                $scope.activeItem = 'item2';
                break;
            case '/Home' :
                $scope.activeItem = 'item1';
                break;
            case '/' :
                $scope.activeItem = 'item1';

        }
    });


    $scope.changeSate = function (item) {
        $scope.activeItem = item.id;
    }



    $(".leftMenu").height($(".container-fluid").height());
    $(".mainSection").height($(".container-fluid").height());
});

