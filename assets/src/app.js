import ng from 'angular';
import ng_ui_router from 'angular-ui-router';
import firebase from 'firebase';
import ng_fire from 'angularfire';
import MainRoute from './config/main_route.js';
import firebase_config from './config/firebase_config.js';
import contactsComponent from './components/contacts/contacts.component.js';

var config = {
    apiKey: "AIzaSyAxrD8WjUf2QtabsX5dONZKxDQdjRQ3GDY",
    authDomain: "mycontacts-24bd0.firebaseapp.com",
    databaseURL: "https://mycontacts-24bd0.firebaseio.com",
    storageBucket: "mycontacts-24bd0.appspot.com",
    messagingSenderId: "1026929907954"
};

firebase.initializeApp(config);

let ng_app = ng.module('contactsApp', [ng_ui_router, ng_fire])
	.config(MainRoute)
	.config(firebase_config)
	.component('myContacts', contactsComponent)
;

export default ng_app;