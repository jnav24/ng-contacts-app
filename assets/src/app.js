import config from './env.js';
import * as firebase from 'firebase';
import ng from 'angular';
import ng_ui_router from 'angular-ui-router';
import ng_fire from 'angularfire';
import MainRoute from './config/main_route.js';
import firebase_config from './config/firebase_config.js';
import contactsComponent from './components/contacts/contacts.component.js';

firebase.initializeApp(config);

let ng_app = ng.module('contactsApp', [ng_ui_router, ng_fire, 'firebase'])
	.config(MainRoute)
	.config(firebase_config)
	.component('myContacts', contactsComponent)
;

export default ng_app;