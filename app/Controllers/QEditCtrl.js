app.controller("QEditCtrl", function($scope, $location, $routeParams, questionStorage){
  $scope.title="Edit Question";
  $scope.submitButtonText="Edit";
  $scope.newQuestion = {};

questionStorage.getSingleQuestion($routParams.questionId)
  .then(function successCallback(response){
    $scope.newQuestion=response;
  })

  $scope.addNewQuestion = function() {
    questionStorage.updateQuestion($routeParams.questionId, $scope.newQuestion)
      .then(function successCallback(response){
        console.log(response)
        $location.url("/questions/list");
      });
  };
});