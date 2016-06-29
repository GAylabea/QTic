  'use strict';
app.factory("questionStorage", function($q, $http, firebaseURL, AuthFactory){
  var getQuestionList = function() {
    var questions = [];
    let user = AuthFactory.getUser();
    return $q(function(resolve, reject) {
       $http.get(`${firebaseURL}qtic.json?orderBy="uid"&equalTo="${user.uid}"`)
        .success(function(questionObject) {
          var questionCollection = questionObject;
          Object.keys(questionCollection).forEach(function(key) {
            questionCollection[key].id = key;
            questions.push(questionCollection[key]);
          });
          resolve(questions);
        })
        .error(function(error) {
          reject(error);
        });
    });
  };

  var postNewQuestion = function(newQuestion) {
    console.log("hello"); 
    let user = AuthFactory.getUser();
    // console.log(user);
  return $q(function(resolve, reject){
    $http.post(
        firebaseURL + "qtic.json",
        JSON.stringify({
          currentDate:newQuestion.currentDate,
          time:newQuestion.time,
          label:newQuestion.label,
          patronGroup:newQuestion.patronGroup,
          timeSpent:newQuestion.timeSpent,
          referral:newQuestion.referral,
          uid:user.uid
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          })
        .error(function(error) {
          reject(error);
        });
  });
}; 

var questionDelete = function(questionId) {
  return $q(function(resolve, reject){
    $http
    .delete(firebaseURL + "qtic/" + questionId + ".json")
    .success(function(objectFromFirebase){
      resolve(objectFromFirebase);
    })
    .error(function(error) {
          reject(error);
        });
  });
};

var getSingleQuestion = function(questionId){
    return $q(function(resolve, reject) {
            $http.get(firebaseURL + "qtic/" + questionId + ".json")
                .success(function(questionObject) {
                    resolve(questionObject);
                    })
                .error(function(error) {
                    reject(error);
                });
          });
};

var updateQuestion = function(questionId, newQuestion) {
   let user = AuthFactory.getUser();
  return $q(function(resolve, reject){
    $http.put(
        firebaseURL + "qtic/" + questionId + ".json",
        JSON.stringify({
          currentDate:newQuestion.currentDate,
          time:newQuestion.time,
          label:newQuestion.label,
          patronGroup:newQuestion.patronGroup,
          timeSpent:newQuestion.timeSpent,
          referral:newQuestion.referral,
          uid:user.uid
        })
      )
      .success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        });
  });
};
return {getQuestionList:getQuestionList, postNewQuestion:postNewQuestion, questionDelete:questionDelete, getSingleQuestion:getSingleQuestion, updateQuestion:updateQuestion};
});

