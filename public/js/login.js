angular.module("game").controller('loginController',['$scope','$http','$rootScope', function($scope,$http,$rootScope){

        $scope.signup = function(){
            $http({
                method : 'POST',
                url    : '/signup',
                data   : $scope.signupForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/#/profile" }
            })
        }

        $scope.login = function(){
            $http({
                method : 'POST',
                url    : '/login',
                data   : $scope.loginForm
            }).then(function(returnData){

                console.log(returnData)
                if ( returnData.data.success ) {
                $rootScope.user= returnData.config.data
                 window.location.href="/#/profile"
                  } 
                else { console.log(returnData)}
            })
        }


}])