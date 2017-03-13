class ContactsController {
	constructor(usersService) {
		this.contacts = usersService.getData();
	}

	deleteContact() {

	}
}

export default ContactsController;