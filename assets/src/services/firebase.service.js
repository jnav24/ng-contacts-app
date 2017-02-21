import config from './../env.js';

class FirebaseService {
	constructor($firebaseArray) {
		firebase.initializeApp(config);
		this._firebaseArray = $firebaseArray;
	}

	getRef() {
		const ref = firebase.database().ref();
		return this._firebaseArray(ref);
	}
}

// FirebaseService.$inject = ['$firebaseArray'];

export default FirebaseService;