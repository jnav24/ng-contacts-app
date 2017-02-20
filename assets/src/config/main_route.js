export default function MainRoute($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('home');

	$stateProvider
		.state('home', {
			url: '/',
			template: '<my-contacts></my-contacts>'
		});
};