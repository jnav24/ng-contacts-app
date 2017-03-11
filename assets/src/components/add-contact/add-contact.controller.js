class AddContactController {
	constructor(firebaseService) {
		this.show_form = false;
		this.firebase = firebaseService.getRef();
	}

	addContact() {}

	showForm() {
		this.show_form = !this.show_form;
	}
}

export default AddContactController;