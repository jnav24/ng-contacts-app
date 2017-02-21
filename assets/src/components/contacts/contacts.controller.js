class ContactsController {
	constructor(firebaseService) {
		this.contacts = firebaseService.getRef(); 
		console.log(this.contacts);
	}
}

export default ContactsController;