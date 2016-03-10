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
			.when('/living', {
				templateUrl : '/html/living.html'
			})
			.when('/sidehall', {
				templateUrl : '/html/side.html'
			})
			.when('/office', {
				templateUrl : '/html/office.html'
			})
			.when('/bath1', {
				templateUrl : '/html/bath1.html'
			})
			.when('/secondfloor', {
				templateUrl : '/html/secondfloor.html'
			})
			.when('/bed', {
				templateUrl : '/html/bed.html'
			})
			.when('/bath2', {
				templateUrl : '/html/bath2.html'
			})
			.when('/empty', {
				templateUrl : '/html/empty.html'
			})
			.when('/bath3', {
				templateUrl : '/html/bath3.html'
			})
			.when('/guest', {
				templateUrl : '/html/guest.html'
			})
			.when('/entertain', {
				templateUrl : '/html/entertain.html'
			})
			.when('/stairs', {
				templateUrl : '/html/basestairs.html'
			})
			.when('/base', {
				templateUrl : '/html/base.html'
			})
			.when('/dark', {
				templateUrl : '/html/dark.html'
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
			.when('/basedoor', {
				templateUrl : '/html/basedoor.html'
			})
			.when('/stairstobase', {
				templateUrl : '/html/stairstobase.html'
			})
			.when('/livingtohall', {
				templateUrl : '/html/livingtohall.html'
			})
			.when('/kitchen2', {
				templateUrl : '/html/kitchen2.html'
			})
			.when('/livingfromside', {
				templateUrl : '/html/livingfromside.html'
			})
			.when('/sidefromoffice', {
				templateUrl : '/html/sidefromoffice.html'
			})
			.when('/base2', {
				templateUrl : '/html/base2.html'
			})
			.when('/darkdoor', {
				templateUrl : '/html/darkdoor.html'
			})
			.when('/basefromdark', {
				templateUrl : '/html/basefromdark.html'
			})
			.when('/darkleft', {
				templateUrl : '/html/darkleft.html'
			})
			.when('/darkright', {
				templateUrl : '/html/darkright.html'
			})
			.when('/basefrom2', {
				templateUrl : '/html/basefrom2.html'
			})
			.when('/stairsfrombase', {
				templateUrl : '/html/stairsfrombase.html'
			})
			.when('/stairstop', {
				templateUrl : '/html/stairstop.html'
			})
			// .when('/door', {
			// 	templateUrl : '/html/door.html'
			// })
			// .when('/door', {
			// 	templateUrl : '/html/door.html'
			// })
			// .when('/door', {
			// 	templateUrl : '/html/door.html'
			// })
			// .when('/door', {
			// 	templateUrl : '/html/door.html'
			// })


	})

