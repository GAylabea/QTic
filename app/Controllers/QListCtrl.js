app.controller("QListCtrl", function($scope, $http, $routeParams, $location, questionStorage) {
  $scope.questions = [];

  questionStorage.getQuestionList().then(function(questionCollection){
    console.log("questionCollection from Promise", questionCollection); 
    $scope.questions = questionCollection;
  });

});