let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.form', {
      url: '/form',
      controller: 'FormController as vm',
      templateUrl: 'templates/form.tpl.html'
    })
    .state('root.messages', {
      url: '/',
      controller: 'MessagesController as vm',
      templateUrl: 'templates/messages.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;