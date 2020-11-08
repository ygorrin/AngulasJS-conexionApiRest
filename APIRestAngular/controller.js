angular.module("MyApp", [])
    .controller("FirstController", function ($scope, $http) {

        $scope.posts = [];
        $scope.newPost = {};

        $http.get("https://jsonplaceholder.typicode.com/posts")
            .success(function (data) {
                console.log(data);
                $scope.posts = data;
            })
            .error(function (err) {
                
            });

        $scope.addPost = function(){

                $http.post("https://jsonplaceholder.typicode.com/posts",{
                    title: $scope.newPost.title,
                    body:  $scope.newPost.body,
                    userId: $scope.newPost.id
                })
                .success(function (data, status, headers, config){
                    console.log(data);
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                })
                .error(function (error, status, headers, config){
                    console.log(error);
                });
            }
        
        });  