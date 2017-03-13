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
}

export default ContactsController;