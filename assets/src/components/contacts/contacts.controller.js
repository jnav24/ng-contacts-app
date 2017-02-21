class ContactsController {
	constructor(firebaseService) {
		this.contacts = firebaseService.getRef(); 
		console.log(this.contacts);
		firebaseService.saveTest();
	}
}

export default ContactsController;