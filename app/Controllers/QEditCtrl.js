app.controller("QEditCtrl", function($scope, $location, $routeParams, questionStorage){
  $scope.title="Edit Question";
  $scope.submitButtonText="Edit";
  $scope.newQuestion = {};

questionStorage.getSingleQuestion($routeParams.questionId)
  .then(function successCallback(response){
    $scope.newQuestion=response;
    var tempDate = new Date($scope.newQuestion.currentDate);
    $scope.newQuestion.currentDate = tempDate;
  })

  $scope.addNewQuestion = function() {
    questionStorage.updateQuestion($routeParams.questionId, $scope.newQuestion)
      .then(function successCallback(response){
        console.log(response)
        $location.url("/questions/list");
      });
  };
});