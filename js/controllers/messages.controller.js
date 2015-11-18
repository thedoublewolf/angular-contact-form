let MessagesController = function($scope, FormService) {
  
  let vm = this;

  FormService.getMessages().then( (res) => {
    $scope.messages = res.data.results;
    console.log(res);
  });

};

MessagesController.$inject = ['$scope', 'FormService'];

export default MessagesController;