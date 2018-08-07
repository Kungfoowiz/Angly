
$(function () {

    angular.bootstrap(document.getElementsByClassName("myApp")[0], ["myApplication"]);

    angular.bootstrap(document.getElementsByClassName("myApp")[1]);

    angular.bootstrap(document.getElementsByClassName("myApp")[2], ["myApp2"]);

});






var myApplication = angular.module("myApplication", []);

myApplication.controller("myController",

    function ($scope) {
        $scope.firstName = "Edward";
        $scope.lastName = "Davies";
        $scope.nickname = "kungfoowiz";
    }

);








