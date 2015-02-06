/**
 Description: UserDetail controller
 */
'use strict';
app.controller('UserDetailController', ['$scope', 'UserDetailService','DTOptionsBuilder', 'DTColumnDefBuilder','DTInstances',
    function ($scope, UserDetailService, DTOptionsBuilder, DTColumnDefBuilder,DTInstances) {


        $scope.users = [];
        $scope.selecteduser = new Object();

        $scope.init = function () {

            UserDetailService.readUserDetail({}).then(function (data) {
                $scope.users = data.data;
            });
        };

        $scope.init();


        $scope.userDTOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDisplayLength(10)
            .withColVis()
            // Exclude the last column from the list
            .withColVisOption('aiExclude', [0,1,3]);

        $scope.userDTColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0),
            DTColumnDefBuilder.newColumnDef(1),
            DTColumnDefBuilder.newColumnDef(2),
            DTColumnDefBuilder.newColumnDef(3).notSortable()

        ];

        DTInstances.getLast().then(function (dtInstance) {
            dtInstance.DataTable.data().each(function(data) {

                console.log(data);
                $scope.selecteduser[data.id] = true;
            });
        });

        $scope.deleteUser = function(index) {

            UserDetailService.setJSON($scope.users[index]);

            UserDetailService.deleteUser({}).then(function (data) {
                $scope.users.splice(index);
            });
        }



}]);

