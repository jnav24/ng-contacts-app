class ContactsController {
	constructor(firebaseService) {
		this.contacts = firebaseService.getRef(); 
		firebaseService.saveToDB({
			name: "Bob Smith",
			email: "bsmith@gmail.com"
		});
	}
}

export default ContactsController;