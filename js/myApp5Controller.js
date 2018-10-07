


myApp5.controller("myApp5Controller",

    function ($rootScope, $scope) {

        $rootScope.favouriteCar = "Peugeot";

        $scope.magicNumber = 7.1;

        $scope.superHeroes = [
            { name: "Superman", rank: 1 },
            { name: "Batman", rank: 7 },
            { name: "Wonderwoman", rank: 2 },
            { name: "Venom", rank: 3 },
            { name: "Ant Man", rank: 11 },
            { name: "Catwoman", rank: 9 },
            { name: "Doctor Strange", rank: 4 },
            { name: "Hulk", rank: 5 }
        ];

        $scope.someText = "This is some text to test!";

        $scope.cost = 500;

        $scope.sortOrder = "name";

        $scope.sortBy = function (columnName) {
            $scope.sortOrder = columnName;
        }

        $scope.charLimit = 99;

        $scope.allLower = false;
        $scope.uppercaseCols = false;

    }

);




myApp5.filter('myFormat', function () {
    return function (x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});