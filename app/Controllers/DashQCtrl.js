app.controller("DashQCtrl", function($scope, $location, $routeParams, questionStorage){
  $scope.questions = [];
  $scope.patronGroup = [];
  $scope.numberFaculty = 0;
  $scope.numberStaff = 0;
  $scope.numberGrad = 0;
  $scope.numberUnderGrad = 0;
  $scope.numberCommunity = 0;
  $scope.numberReferals = 0;


  questionStorage.getQuestionList().then(function(questionCollection){
    $scope.questions = questionCollection;
    questionCollection.forEach(function(question){
      if(question.referral.yes){
        $scope.numberReferals++;
      }
      switch (question.patronGroup) {
        case "community":
          $scope.numberCommunity++;
          break;
        case "faculty":
          $scope.numberFaculty++;
          break;
        case "gradstudent":
          $scope.numberGrad++;
          break;
        case "undergrad":
          $scope.numberUnderGrad++;
          break;
        case "staff":
          $scope.numberStaff++;
          break;
        default:
          break;
      }
    })
  });
});

