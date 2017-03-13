import FirebaseService from './firebase.service.js';

const table = 'users';

export default class UsersService extends FirebaseService {
	constructor($firebaseArray) {
		super($firebaseArray, table);
	}
}