let ctrl;

class AddContactController {
	constructor(usersService) {
		ctrl = this;
		ctrl.show_form = false;
		ctrl.errors = [];
		ctrl.users = usersService;
		ctrl.resetForm();
		ctrl.validate = {
			full_name: {
				error: 'Enter a full name',
				min_length: 3
			},
			email: {
				error: 'Enter a valid email address',
				type: 'email'
			}		
		};
	}

	resetForm() {
		ctrl.form_elements = {
			full_name: '',
			email: ''
		};
	}

	addContact() {
		ctrl.validateForm();

		if (!ctrl.errors.length) {
			ctrl.showForm();
			ctrl.users.saveObject({
				name: ctrl.form_elements.full_name,
				email: ctrl.form_elements.email
			});
			ctrl.resetForm();
		}
	}

	cancelForm() {
		ctrl.showForm();
		ctrl.resetForm();
	}

	showForm() {
		ctrl.show_form = !ctrl.show_form;
	}

	validateForm() {
		let msg = 'This field cannot be empty; ';
		ctrl.errors = [];

		Object.entries(ctrl.form_elements).forEach(function(error, key) {
			if (error[1].trim() === '') {
				msg += error[0];

				if (typeof ctrl.validate[error[0]] !== 'undefined' && typeof ctrl.validate[error[0]].error !== 'undefined') {
					msg = ctrl.validate[error[0]].error;
				}
				
				ctrl.errors.push(msg);
			}

			if (typeof ctrl.validate[error[0]] !== 'undefined') {
				if (typeof ctrl.validate[error[0]].min_length !== 'undefined') {
					if (error[1].length < ctrl.validate[error[0]].min_length) {
						ctrl.errors.push(error[0] + ' must have at least ' + ctrl.validate[error[0]].min_length + ' characters');
					}
				}
			}
		});
	}
}

export default AddContactController;