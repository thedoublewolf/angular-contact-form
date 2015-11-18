let FormController = function($scope, FormService) {
  
  let vm = this;

  vm.addContact = addContact;

  vm.nameErrMsg = 'Name cannot be left empty';
  vm.emailEmptErrMsg = 'Email cannot be left empty';
  vm.emailErrMsg = 'Email must contain an @';
  vm.websiteErrMsg = 'Website must start with http://';
  vm.messageErrMsg = 'Message cannot be left empty';

  function addContact(formObj) {
    console.log(formObj);
    FormService.addContact(formObj).then( (res) => {
      console.log(res);
      alert('contact added!');
    });
  }

};

FormController.$inject = ['$scope', 'FormService'];

export default FormController;