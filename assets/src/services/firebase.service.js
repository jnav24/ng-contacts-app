import config from './../env.js';

let ref;

class FirebaseService {
	constructor($firebaseArray, table) {
		firebase.initializeApp(config);
		this.firebaseArray = $firebaseArray;
		ref = firebase.database().ref(table);
	}

	getData() {
		return this.firebaseArray(ref);
	}

	// saveTest() {
	// 	const ref = firebase.database().ref();
	// 	ref.child('test').set('you should see this in your firebase db');
	// }

	// removeTest() {
	// 	const ref = firebase.database().ref();
	// 	ref.child('test').remove();
	// }

	saveObject(obj) {
		const save = ref.push();
		save.set(obj);
	}

	updateObject() {}

	deleteObject(id) {
		return ref.child(id).remove();
	}
}

// FirebaseService.$inject = ['$firebaseArray'];

export default FirebaseService;