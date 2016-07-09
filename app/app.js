"use strict";
var app = angular.module("QTicApp", ["ngRoute"])
  .constant("firebaseURL", "https://qtic.firebaseio.com/");
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
            templateUrl: "partials/dashboardlite.html",
            controller: "DashQCtrl",
            resolve: {isAuth}
        }).
         when("/questions/dashboardlite", {
            templateUrl: "partials/dashboardlite.html",
            controller: "DashQCtrl",
            resolve: {isAuth}
        }).
        when("/questions/list", {
            templateUrl: "partials/qlist-view.html",
            controller: "QListCtrl",
            resolve: {isAuth}
        }).
        when("/questions/new", {
            templateUrl: "partials/qnew-view.html",
            controller: "QNewCtrl",
            resolve: {isAuth}
        }).
        when("/questions/:questionId", {
            templateUrl: "partials/qedit-view.html",
            controller: "QSingleCtrl",
            resolve: {isAuth}
        }).
        when("/questions/:questionId/edit", {
            templateUrl: "partials/qnew-view.html",
            controller: "QEditCtrl", 
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
    qticRef.unauth()

    qticRef.onAuth(authData =>{
        if(!authData) {
            $location.path("/login");
        }
    })
})

