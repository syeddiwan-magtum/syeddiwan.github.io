/**
 Description: UserDetail controller
 */
'use strict';
app.controller('UserDetailController',['$scope','UserDetailService' ,function ($scope,UserDetailService) {


    $scope.getDetail = function () {

        UserDetailService.readUserDetail({}).then(function (data) {
         $scope.users = data.data;
        });
   };

   $scope.getDetail();

}]);
