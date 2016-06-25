app.controller("QListCtrl", function($scope, $http, $location, questionStorage) {
  $scope.questions = [];

  questionStorage.getQuestionList().then(function(questionCollection){
    console.log("questionCollection from Promise", questionCollection); 
    $scope.questions = questionCollection;
  });
  
$scope.deleteQuestion = function(questionId) {
  // console.log("questionId",questionId);
  questionStorage.questionDelete(questionId).then(function(response){
    // console.log("response", response);
    questionStorage.getQuestionList().then(function(questionCollection){
      $scope.questions = questionCollection;
    });
  });
}; 

})
