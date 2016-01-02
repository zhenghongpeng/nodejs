var app = angular.module("CMapp", []);
app.controller("CMcontroller",

function ($scope, $http) {
    //$scope.hello = "Hello from App"
    
    $scope.update = function (site) {

        //       $scope.developers[index] = developer;
        $http.put("/api/website/" + $scope.selectedindex, site)
        .success(function (response) {
            $scope.websites = response;
        });

    };

    $scope.removePage = function (pageIndex) {
        $http.delete("/api/website/" + $scope.selectedindex +"/Page/"+ pageIndex)
        .success(function (response) {
            $scope.websites = response;
            $scope.selectedSite.pages = response[$scope.selectedindex].pages;
        });
    };
    
    $scope.selectedindex = null;
    $scope.selectedSite = null;
    $scope.select = function (index) {

        $scope.selectedindex = index;

        $scope.site = $scope.websites[index];
        $scope.selectedSite = $scope.websites[index];


    };
    $scope.add = function (site) {

        //        console.log(developers);
        $http.post("/api/website", site)
            .success(function (response) {
                $scope.websites = response;
            });
    };
    
    $scope.remove = function (id) {
    $http.delete("api/website/" + id)
    .success(function (response) {
        $scope.websites = response;
        });
    };

    $http.get("/api/website/")
    .success(function (response) {
        $scope.websites = response;
    });
});