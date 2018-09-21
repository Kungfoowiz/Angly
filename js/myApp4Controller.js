


myApp4.controller("myApp4Controller",

    function ($scope) {

        $scope.firstName = "John";
        $scope.lastName = "William";

        $scope.getDate = function () {
            var currentDate = new Date();
            return "The current day is " + currentDate.getDate();
        };

        $scope.names = [
            { name: 'Ed', country: 'America' },
            { name: 'Edd', country: 'Mexico' },
            { name: 'Eddy', country: 'Cuba' }
        ];

    }

);

