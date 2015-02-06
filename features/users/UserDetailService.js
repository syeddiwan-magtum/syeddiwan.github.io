/**
 Description: UserDetail Service
 */

app.service("UserDetailService", function ($http) {

    var userJSON = {};

    var READ_USER_DETAIL = "features/rest/userdetail.json";
    var DELETE_USER = "features/rest/deleteuser";

    return  {

        setJSON: function (data) {
            userJSON = {};
            return angular.extend(userJSON, data);
        },

        readUserDetail: function (data) {
            return $http({
                method: 'GET',
                url: READ_USER_DETAIL
            }).success(function (data, status, headers, config) {

            }).error(function (data, status, headers, config) {

            });
        },

        deleteUser: function (data) {
            //TODO
            var result = true;
            result =  $http({method: 'POST', url: DELETE_USER, data: angular.toJson(userJSON)}).
                success(function (data, status, headers, config) {

                }).
                error(function (data, status, headers, config) {
                });
            return result;

        }
    }

});