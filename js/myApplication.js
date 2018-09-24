
$(function () {

    // First one gets bound automatically by Angular.


    angular.bootstrap(document.getElementsByClassName("myApp")[0], ["myApplication"]);

    angular.bootstrap(document.getElementsByClassName("myApp")[1]);

    angular.bootstrap(document.getElementsByClassName("myApp")[2], ["myApp2"]);

    angular.bootstrap(document.getElementsByClassName("myApp")[3]);

    angular.bootstrap(document.getElementsByClassName("myApp")[4], ["myApp3"]);

    angular.bootstrap(document.getElementsByClassName("myApp")[5], ["myApp4"]);

    angular.bootstrap(document.getElementsByClassName("myApp")[6], ["myApp5"]);

});






var myApplication = angular.module("myApplication", []);

myApplication.controller("myController",

    function ($scope) {
        $scope.firstName = "Edward";
        $scope.lastName = "Davies";
        $scope.nickname = "kungfoowiz";
    }

);








