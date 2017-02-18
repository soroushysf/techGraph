/**
 * Created by soroush on 12/18/16.
 */

app.controller('graphTableController', function ($scope) {

    $scope.graphTableTitle = 'Graph Table';
    
    $scope.$on("graphTableData", function (event, data) {
        var crNodes=[], i=0;

        for(var key in data["nodeDp"]){
            if(data["nodeDp"].hasOwnProperty(key)){
                crNodes[i] = {
                    'id' : data["nodeDp"][key][0]["@rid"],
                    'title' : data["nodeDp"][key][0]["tech_title"],
                    'type' : data["nodeDp"][key][0]["@type"],
                    'version' : data["nodeDp"][key][0]["@version"],
                    'class' : data["nodeDp"][key][0]["@class"]
                }
                i++;
            }
        }
        $scope.createdNodes = crNodes;
    })


    $scope.currentPage = 1;



});