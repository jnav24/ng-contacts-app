import config from './../env.js';

class FirebaseService {
	constructor($firebaseArray) {
		firebase.initializeApp(config);
		this._firebaseArray = $firebaseArray;
	}

	getRef() {
		const ref = firebase.database().ref('users');
		return this._firebaseArray(ref);
	}

	saveTest() {
		const ref = firebase.database().ref();
		ref.child('test').set('you should see this in your firebase db');
	}

	saveToDB(obj) {
		const ref = firebase.database().ref('users');
		const save = ref.push();
		save.set(obj);
	}
}

// FirebaseService.$inject = ['$firebaseArray'];

export default FirebaseService;