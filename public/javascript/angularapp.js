var app = angular.module('app', ['ui.bootstrap', 'bootstrapLightbox']);
/*Light box Feature & Graphics List*/
app.controller('GalleryCtrl', function ($scope, Lightbox, $http) {
$http.get('pets.json')
  .then(function(res){
     $scope.images = res.data;
   });
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});
