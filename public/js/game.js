angular.module("game", ['ngRoute'])

angular.module("game")
	.config(function($routeProvider){
		$routeProvider
			.when('/hide1', {
				templateUrl : '/html/hide1.html'
			})
			.when('/hide2', {
				templateUrl : '/html/hide2.html'
			})
			.when('/hide3', {
				templateUrl : '/html/hide3.html'
			})
			.when('/hide4', {
				templateUrl : '/html/hide4.html'
			})
			.when('/hide5', {
				templateUrl : '/html/hide5.html'
			})
			.when('/hide6', {
				templateUrl : '/html/hide6.html'
			})
			.when('/hide7', {
				templateUrl : '/html/hide7.html'
			})
			.when('/hide8', {
				templateUrl : '/html/hide8.html'
			})
			.when('/hide9', {
				templateUrl : '/html/hide9.html'
			})
			.when('/profile', {
				templateUrl : '/html/profile.html'
			})
			.when('/login', {
				templateUrl : '/html/login.html'
			})
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
			.when('/entertainbath', {
				templateUrl : '/html/entertainbath.html'
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
			.when('/basefromstairs', {
				templateUrl : '/html/basefromstairs.html'
			})
			.when('/hallfromliving', {
				templateUrl : '/html/hallfromliving.html'
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
			.when('/topfrombed', {
				templateUrl : '/html/topfrombed.html'
			})
			.when('/upstairsfromtop', {
				templateUrl : '/html/upstairsfromtop.html'
			})
			.when('/stairsfromtop', {
				templateUrl : '/html/stairsfromtop.html'
			})
			.when('/bedhall', {
				templateUrl : '/html/bedhall.html'
			})
			.when('/bedhallfrombath', {
				templateUrl : '/html/bedhallfrombath.html'
			})
			.when('/topfromupstairs', {
				templateUrl : '/html/topfromupstairs.html'
			})
			.when('/upstairsfromempty', {
				templateUrl : '/html/upstairsfromempty.html'
			})
			.when('/hallfromupstairs', {
				templateUrl : '/html/hallfromupstairs.html'
			})
			.when('/hallfromguest', {
				templateUrl : '/html/hallfromguest.html'
			})
			.when('/upstairsfromhall', {
				templateUrl : '/html/upstairsfromhall.html'
			})
			.when('/entertainbath', {
				templateUrl : '/html/entertainbath.html'
			})
			.when('/sinkfromempty', {
				templateUrl : '/html/sinkfromempty.html'
			})
			.when('/exitbase', {
				templateUrl : '/html/exitbase.html'
			})
			.when('/dining2', {
				templateUrl : '/html/dining2.html'
			})
			.when('/lookupstairs', {
				templateUrl : '/html/lookupstairs.html'
			})
			.when('/hallfromdoor', {
				templateUrl : '/html/hallfromdoor.html'
			})
			.when('/kitchenfromliving', {
				templateUrl : '/html/kitchenfromliving.html'
			})
			.when('/viewfromkitchen', {
				templateUrl : '/html/viewfromkitchen.html'
			})
			.when('/sidefromliving', {
				templateUrl : '/html/sidefromliving.html'
			})
			.when('/mainfromliving', {
				templateUrl : '/html/mainfromliving.html'
			})
			.when('/livingfromkitchen', {
				templateUrl : '/html/livingfromkitchen.html'
			})
			.when('/bedfromtop', {
				templateUrl : '/html/bedfromtop.html'
			})
			.when('/emptyfromupstairs', {
				templateUrl : '/html/emptyfromupstairs.html'
			})
			.when('/guestfromsink', {
				templateUrl : '/html/guestfromsink.html'
			})
			.when('/emptyfromsink', {
				templateUrl : '/html/emptyfromsink.html'
			})
			.when('/sinkfromguest', {
				templateUrl : '/html/sinkfromguest.html'
			})
			.when('/entertainfromhall', {
				templateUrl : '/html/entertainfromhall.html'
			})
			.when('/guestfromhall', {
				templateUrl : '/html/guestfromhall.html'
			})
			.when('/hallfromentertain', {
				templateUrl : '/html/hallfromentertain.html'
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
			// .when('/door', {
			// 	templateUrl : '/html/door.html'
			// })

	})

