/**
 Description: UserDetail Service
 */

app.service("UserDetailService", function ($http) {


    var READ_USER_DETAIL = "features/rest/userdetail.json";

    return  {

        readUserDetail: function (data) {
            return $http({
                method: 'GET',
                url: READ_USER_DETAIL
            }).success(function (data, status, headers, config) {

            }).error(function (data, status, headers, config) {

            });
        }
    }

});