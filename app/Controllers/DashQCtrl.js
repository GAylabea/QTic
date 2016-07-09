app.controller("DashQCtrl", function($scope, $location, $routeParams, questionStorage){
  $scope.questions = [];
  $scope.patronGroup = [];

  questionStorage.getQuestionList().then(function(questionCollection){
    // console.log("questionCollection from Promise", questionCollection); 
    $scope.questions = questionCollection;
  });
});

$scope.getCount = function (f) {
    var fCount = fCount || 0;
    for (var i = 0; i < $scope.questions.patronGroup.length; i++) {
        if ($scope.questions[i].faculty == f) {
            fCount++;
        }
    }
    return fCount;
    console.log("count", fCount);
}


// function Count(type) {
//   return $("input[type=radio][value' " + type + " ']checked")length;
// }
    // var patronCount = question.patronGroup.length;
    // console.log(patronCount);



  // $scope.patronGroup = [];
  // console.log("patron group", patronGroup);

  // $scope.length = ' ';
  // $scope.getLength = function() {
  //   $scope.length = $scope.question.patronGroup.length;
  //   console.log("array length =", $scope.length);
  // };

// Maybe put this as 
// length of an array inside and object of objects or array of object
// go thru all questions and get patronTypes - put the unique ones on an array and scope them in an array

