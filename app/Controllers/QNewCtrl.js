app.controller("QNewCtrl", function($scope, $http, $location, questionStorage) {
  // console.log("hello");
var currentDate = new Date("dd/mm/yyyy");
$scope.currentDate = currentDate;
console.log("var currentTime", currentDate); 

  $scope.title="New Question";
  $scope.submitButtonText = "Add New Question";
  $scope.newQuestion = {
      currentDate: "",
      time: "",
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

