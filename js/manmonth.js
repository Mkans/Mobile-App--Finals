angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.items=[];

    $scope.calculateManMonths = function(){
        $scope.items.push($scope.functionpoints);
        var nManMonths = 0;
        if($scope.language == "C"){
            nManMonths = $scope.functionpoints / 9.07;
        }else if($scope.language == "VB.net"){
            nManMonths = $scope.functionpoints / 20.90;
        }
        else if($scope.language == "2nd Generation default"){
            nManMonths = $scope.functionpoints / 10.27;
        }
        else if($scope.language == "3rd Generation default"){
            nManMonths = $scope.functionpoints / 12.17;
        }
        else if($scope.language == "4th Generation default"){
            nManMonths = $scope.functionpoints / 21.33;
        }
        else if($scope.language == "AAS Macro"){
            nManMonths = $scope.functionpoints / 11.29;
        }
        else if($scope.language == "5th Generation default"){
            nManMonths = $scope.functionpoints / 31.07;
        }
        else if($scope.language == "Objective-C"){
            nManMonths = $scope.functionpoints / 19.42;
        }
        else if($scope.language == "Lyric"){
            nManMonths = $scope.functionpoints / 14.85;
        }
        else if($scope.language == "Jovial"){
            nManMonths = $scope.functionpoints / 10.27;
        }
        else if($scope.language == "Eclipse"){
            nManMonths = $scope.functionpoints / 15.38;
        }
        else if($scope.language == "Cognos"){
            nManMonths = $scope.functionpoints / 17.53;
        }
        else if($scope.language == "Cobra"){
            nManMonths = $scope.functionpoints / 21.32;
        }
        $scope.manmonths = Number(nManMonths.toFixed(2));
    }
});
