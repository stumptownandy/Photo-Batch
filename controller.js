angular.module('myApp')
    .controller('myCtrl', function ($scope) {

    $scope.items = ['one', 'two', 'three', 'four'];
    $scope.selectedItem = -1;

    $scope.removeItem = function () {
        if ($scope.items.length) {
            $scope.items.splice(0, 1);
        }
    };

    $scope.selectItem = function (index) {
        $scope.selectedItem = index;
    }
});