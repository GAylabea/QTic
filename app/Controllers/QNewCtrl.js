app.controller("QNewCtrl", function($scope, $location, questionStorage) {
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

// instead of doing the traditional promise, we are quickly using this function to add a new item and post the list to the DOM
// (remember, itemStorage is in the itemListCtrl) - also, notice the $scope.newTask which attaches itself to the html
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