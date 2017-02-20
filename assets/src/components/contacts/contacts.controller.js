class ContactsController {
	constructor($firebaseObject) {
		this.contacts = [];
		this.firebaseObject = $firebaseObject;
		console.log($firebaseObject); 
		// console.log(firebase);
	}
}

export default ContactsController;