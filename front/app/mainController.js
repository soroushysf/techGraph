/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope) {

    $scope.title = "Tech Graph";
    $scope.activeItem = 'item1';
    $scope.items = menuItems;


    $scope.changeSate = function (item) {
        $scope.activeItem = item.id;
    }



    $(".leftMenu").height($(".container-fluid").height());
    $(".mainSection").height($(".container-fluid").height());
});

