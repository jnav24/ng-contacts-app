class AddContactController {
	constructor(firebaseService) {
		this.show_form = false;
		this.errors = [];
		this.firebase = firebaseService.getRef();
		this.form_elements = {
			full_name: '',
			email: ''
		};
		this.validate = {
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

	addContact() {
		this.validateForm();

		if (!this.errors.length) {
			firebaseService.saveToDB({
				name: this.form_elements.full_name,
				email: this.form_elements.email
			});
		}
	}

	showForm() {
		this.show_form = !this.show_form;
	}

	validateForm() {
		let msg = 'This field cannot be empty; ';
		const ctrl = this;

		Object.entries(this.form_elements).forEach(function(error, key) {
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