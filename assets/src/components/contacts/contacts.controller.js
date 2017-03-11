class ContactsController {
	constructor(firebaseService) {
		this.contacts = firebaseService.getRef();
	}
}

export default ContactsController;