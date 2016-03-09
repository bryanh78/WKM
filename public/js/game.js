angular.module("game", ['ngRoute'])

angular.module("game")
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : '/html/main.html'
			})
			.when('/door', {
				templateUrl : '/html/door.html'
			})
			.when('/hall', {
				templateUrl : '/html/hall.html'
			})
			.when('/dining', {
				templateUrl : '/html/dining.html'
			})
			.when('/kitchen', {
				templateUrl : '/html/kitchen.html'
			})
			.when('/livingroom', {
				templateUrl : '/html/livingroom.html'
			})
			.when('/sidehall', {
				templateUrl : '/html/side.html'
			})
			.when('/office', {
				templateUrl : '/html/office.html'
			})
			.when('/bathroom1', {
				templateUrl : '/html/bathroom1.html'
			})
			.when('/secondfloor', {
				templateUrl : '/html/secondfloor.html'
			})
			.when('/bedroom', {
				templateUrl : '/html/bedroom.html'
			})
			.when('/bathroom2', {
				templateUrl : '/html/bathroom2.html'
			})
			.when('/empty', {
				templateUrl : '/html/empty.html'
			})
			.when('/bathroom3', {
				templateUrl : '/html/bathroom3.html'
			})
			.when('/guestbed', {
				templateUrl : '/html/guestbed.html'
			})
			.when('/entertain', {
				templateUrl : '/html/entertain.html'
			})
			.when('/stairs', {
				templateUrl : '/html/basementstairs.html'
			})
			.when('/basement', {
				templateUrl : '/html/basement.html'
			})
			.when('/darkroom', {
				templateUrl : '/html/darkroom.html'
			})
			.when('/death', {
				templateUrl : '/html/death.html'
			})
			.when('/entertain', {
				templateUrl : '/html/entertain.html'
			})
			.when('/hide1', {
				templateUrl : '/html/hide1.html'
			})
			.when('/hide2', {
				templateUrl : '/html/hide2.html'
			})
			.when('/sink', {
				templateUrl : '/html/sink.html'
			})
			.when('/win', {
				templateUrl : '/html/win.html'
			})


	})

