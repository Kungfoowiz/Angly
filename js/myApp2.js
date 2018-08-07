
var myApp2 = angular.module("myApp2", []);




myApp2.directive("myApp2Directive",
    function () {
        return {
            restrict: "EACM", // Default is E-lement and A-ttribute.   C-lass and comment (M) are not default.
            replace: true,
            template: "<h4>Result from a directive template.</h4>"
        };
    }
);



