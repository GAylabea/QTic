app.controller("QNewCtrl", function($scope, $http, $location, questionStorage) {
  console.log("hello");
  $scope.title="New Question";
  $scope.submitButtonText = "Add New Question";
  $scope.newQuestion = {
      date: "",
      // time: "",
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

 // $('.datepicker').pickadate({
 //    selectMonths: true, // Creates a dropdown to control month
 //    selectYears: 15 // Creates a dropdown of 15 years to control year