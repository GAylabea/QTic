 "use strict";
console.log("hello");
app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory) {
    let ref = new Firebase(firebaseURL);

    $scope.account = {
      email: "",
      password: ""
    };

    if($location.path() === "/logout") {
      ref.unauth();
    }

    $scope.register = () => {
        console.log("you clicked register");
        ref.createUser({
          email: $scope.account.email,
          password: $scope.account.password
        }, (error, userData) => {
          if(error) {
            console.log(`error creating user in register: ${error}`)
          } else{
            console.log(`created user account with uid: ${userData.uid}`)
            $scope.login(); 
          }
        });
    }; 

    $scope.login = () => {
      console.log("you clicked login");
      AuthFactory
      .authenticate($scope.account)
      .then(()=> {
            $location.path("/questions/dashboardlite");
        $scope.$apply();
      })
    };
})