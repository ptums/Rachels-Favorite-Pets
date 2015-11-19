var app = angular.module('app', ['ui.bootstrap', 'bootstrapLightbox']);

app.config(function (LightboxProvider) {
  LightboxProvider.getImageUrl = function (image) {
    return '/images/' + image;
  };
});

/*Light box Feature & Graphics List*/
app.controller('GalleryCtrl', function ($scope, Lightbox, $http) {
$http.get('/api/pets')
  .then(function(res){
     $scope.images = res.data;
   });
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});
