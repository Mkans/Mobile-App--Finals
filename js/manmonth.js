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
        else if($scope.language == "Python"){
            nManMonths = $scope.functionpoints / 14.84;
        }
        else if($scope.language == "Php"){
            nManMonths = $scope.functionpoints / 13.64;
        }
        else if($scope.language == "Perl"){
            nManMonths = $scope.functionpoints / 20.90;
        }
        else if($scope.language == "Pascal"){
            nManMonths = $scope.functionpoints / 11.29;
        }
        else if($scope.language == "Oracle"){
            nManMonths = $scope.functionpoints / 16.75;
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
