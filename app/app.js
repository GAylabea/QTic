"use strict";
var app = angular.module("QTicApp", ["ngRoute"])
  .constant("firebaseURL", "https://qtic.firebaseio.com/");
// this function will be available whenever we want - also our html so we will put it in app instead of a LoginCtrl
// it is a method to make sure the user is authenticated - remember authFactory is the AuthFactory js
let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
    if(AuthFactory.isAuthenticated()) {
        console.log("user is authenticated, resolve route promise");
        resolve();
    } else {
        console.log("user is NOT authenticated, reject route promise");
        reject();
    }
}); 

app.config(function($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "partials/qlist-view.html",
            controller: "LoginCtrl",
            resolve: {isAuth}
        }).
        when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/logout", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        otherwise("/");
});

app.run( ($location) =>{
    let qticRef = new Firebase("https://qtic.firebaseio.com/");

// onAuth is a Firebase method
    qticRef.onAuth(authData =>{
        // if you aren't an authorized user, you are sent back to login
        if(!authData) {
            $location.path("/login");
        }
    })
})

