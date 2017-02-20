class ContactsController {
	constructor($firebaseObject) {
		this.contacts = [];
		this.firebaseObject = $firebaseObject;
		console.log(firebase.database().ref());
	}
}

export default ContactsController;