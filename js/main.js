import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';

import config from './config';

import FormController from './controllers/form.controller';
import MessagesController from './controllers/messages.controller';

import PARSE from './constants/parse.constant';

import FormService from './services/form.service';

angular
  .module('app', ['ui.router', 'ngMessages'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('FormController', FormController)
  .controller('MessagesController', MessagesController)
  .service('FormService', FormService)
;



