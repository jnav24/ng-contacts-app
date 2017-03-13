let ctrl;

class ContactsController {
	constructor(usersService) {
		ctrl = this;
		ctrl.contacts = usersService.getData();
		ctrl.users = usersService;
	}

	deleteContact(id) {
		ctrl.users.deleteObject(id)
			.then(() => {
				console.log('item was removed.');
			})
			.catch(error => {
				console.log('there was an error.');
			});
	}

	getContact(id) {
		ctrl.users.getObjectById(id);
	}
}

export default ContactsController;