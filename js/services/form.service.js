let FormService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contact';

  this.addContact = addContact;

  function Contact (formObj) {
    this.name = formObj.name;
    this.email = formObj.email;
    this.website = formObj.website;
    this.message = formObj.message;
  }

  function addContact (formObj) {
    let c = new Contact(formObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

};

FormService.$inject = ['$http', 'PARSE'];

export default FormService;