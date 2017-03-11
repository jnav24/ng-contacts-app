export default function MainRoute($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			template: '<my-contacts></my-contacts>'
		});
};