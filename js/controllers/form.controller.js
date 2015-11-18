let FormController = function(FormService) {
  
  let vm = this;

  vm.addContact = addContact;

  vm.$watch('contact.name');

  function addContact(formObj) {
    console.log(formObj);
    FormService.addContact(formObj).then( (res) => {
      console.log(res);
      alert('contact added!');
    });
  }

};

FormController.$inject = ['FormService'];

export default FormController;