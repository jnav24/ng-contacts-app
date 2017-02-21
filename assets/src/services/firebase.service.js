import config from './../env.js';

class FirebaseService {
	constructor($firebaseArray) {
		firebase.initializeApp(config);
		var ref = firebase.database().ref();

		console.log(ref);
		console.log($firebaseArray(ref));
	}
}

// FirebaseService.$inject = ['$firebaseArray'];

export default FirebaseService;