let FormController = function($scope, $state, FormService) {
  
  let vm = this;

  vm.addContact = addContact;

  vm.nameErrMsg = 'Name cannot be left empty';
  vm.emailEmptErrMsg = 'Email cannot be left empty';
  vm.emailErrMsg = 'Email must contain an @';
  vm.websiteEmptErrMsg = 'Website cannot be left empty';
  vm.websiteErrMsg = 'Website must start with http:// or https://';
  vm.messageErrMsg = 'Message cannot be left empty';

  function addContact(formObj) {
    console.log(formObj);
    FormService.addContact(formObj).then( (res) => {
      console.log(res);
      $state.go('root.messages');
    });
  }

};

FormController.$inject = ['$scope', '$state', 'FormService'];

export default FormController;