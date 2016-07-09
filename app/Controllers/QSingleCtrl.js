app.controller("QSingleCtrl", function($scope, $routeParams, questionStorage) {
  $scope.questions = [];
  $scope.selectedQuestion = {};

  questionStorage.getQuestionList().then(function(questionCollection){
    console.log("questionCollection from Promise", questionCollection);
    $scope.questions = questionCollection;

    $scope.selectedQuestion = $scope.questions.filter(function(question){
      return question.id === $routeParams.questionId;
    })[0];
  })
});