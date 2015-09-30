angular.module('ngshowvariation', []);

angular.module('ngshowvariation').directive('ngShowVariation', ['$window', function($window) {
  return {
    restrict: 'A',
    link: function($scope, element, attrs) {
      var variation = 'Original';
      $scope.showVariant = false;
      if (typeof($window.optimizely) !== 'undefined') {
        if (attrs.ngShowVariation === $window.optimizely.variationNamesMap[attrs.ngExperiment]) {
          $scope.showVariant = true;
        }
      }
    },
    scope: true
  }
}])