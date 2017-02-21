import * as firebase from 'firebase';
import ng from 'angular';
import ng_ui_router from 'angular-ui-router';
import ng_fire from 'angularfire';
import MainRoute from './config/main_route.js';
import firebase_config from './config/firebase_config.js';
import contactsComponent from './components/contacts/contacts.component.js';
import FirebaseService from './services/firebase.service.js';

let ng_app = ng.module('contactsApp', [ng_ui_router, ng_fire, 'firebase'])
	.config(MainRoute)
	.config(firebase_config)
	.service('firebaseService', FirebaseService)
	.component('myContacts', contactsComponent)









	
	.controller('TestCtrl', function($scope, $firebaseObject) {
		// console.log($firebaseObject);
		// console.log(firebase.database().ref());
		// console.log(new Firebase('https://mycontacts-24bd0.firebaseio.com/'));
	})
;

export default ng_app;