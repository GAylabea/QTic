app.controller("QNewCtrl", function($scope, $http, $location, questionStorage) {
  console.log("hello");
  $scope.title="New Question";
  $scope.submitButtonText = "Add New Question";
  $scope.newQuestion = {
      date: "",
      // time: "",
      label: "",
      patronGroup: "",
      timeSpent: "",
      referral: "",
      uid: ""
  };

$scope.addNewQuestion = function() {
    questionStorage.postNewQuestion($scope.newQuestion) 
      .then(function successCallback(response){
        console.log(response);
        $location.url("/questions/list");
      }); 
    };
  }); 

