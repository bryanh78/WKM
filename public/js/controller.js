angular.module("game")
	.controller("scary", 
		["$scope","$interval","$timeout","$http","$location","scaryFactor", function($scope, $interval,$timeout,$http,$location,scaryFactor){

			var l = $location
			var h = $http
			var s = $scope
			// var h = $http
			// s.activeRooms = "mainScreen"
			s.place = []
			s.person = []
			s.selectedThing = []
			s.introMusic = $('#introMusic')[0]
			s.door = $('#door')[0]
			s.glass = $('#glass')[0]
			s.scare = $('#scare')[0]
			s.clock = $('#clock')[0]
			s.run = $('#run')[0]
			s.death = $('#death')[0]
			s.piano = $('#piano')[0]
			s.screen = scaryFactor.screen
			s.items = scaryFactor.items

			s.level = "img"

			s.intensify = function() {
				s.level = 'img2'
				return s.level
			}

			
			s.deaththing = function () {
				s.changeRoom('deathface')
				s.death.play()
				$interval.cancel(s.finalSoundsinterval)
				$interval.cancel(s.scarysoundsinterval)
				while (s.person.length > 0) {
					s.person.pop()
				}
			}

			s.codebox = function() {
				s.codecheck = parseInt(prompt('Please Enter Code'));
				// console.log(s.codecheck)
				if (s.codecheck === 175438266) {
					s.changeRoom('freedom')
					$interval.cancel(s.finalSoundsinterval)
				}
			}

			s.introPiano = function() {
				s.changeRoom('junkroom')
				s.piano.play()
			}

			s.junkleave = function() {
				s.changeRoom('secondfloor')
				s.piano.pause()
			}

			s.introClock = function() {
				s.changeRoom('dining')
				s.clock.play()
			}

			s.retry = function() {
				s.changeRoom('mainScreen')
				s.death.pause()
				s.introMusic.play()
			}

			s.diningHall = function() {
				s.changeRoom('mainHall')
				s.clock.pause()
			}
			s.diningKitchen = function() {
				s.changeRoom('kitchen')
				s.clock.pause()
			}

			s.deathrun = function() {
				s.hidehole = true
				$timeout(function() {
					if (s.activeRooms === 'underbed' || s.activeRooms === 'closet' || s.activeRooms === 'coffin') {
						s.hidehole = false
						} else {
							var neckcheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Necklace') {
									neckcheck = true
									s.person.splice(index,1)
									console.log('gamejs 61',s.person)
								}
							})
							if (!neckcheck){
								s.changeRoom('deathface')
								s.death.play()
								$interval.cancel(s.finalSoundsinterval)
								while (s.person.length > 0) {
									s.person.pop()
								}
							}
						}
				}, 28000)
			}

			s.endtimes = function() {
				s.finalCountdown()
			}

			s.finalCountdown = function() {
				s.finalCountinterval = $interval(function(){
					$interval.cancel(s.finalSoundsinterval)
					var timer = Math.random()
					if (0<timer&&timer<0.5) {
						s.run.play()
						s.deathrun()

					}
				},29000)
			}

			s.gametime = function() {
				s.finalSounds()
			}

			s.finalSounds = function() {
				s.finalSoundsinterval = $interval(function(){
					$interval.cancel(s.scarysoundsinterval)
					var timer = Math.random()
					if (0<timer&&timer<0.1) {
						s.door.play()
					} else if (0.11<timer&&timer<0.2) {
						s.glass.play()
					} else if (0.21<timer&&timer<0.3) {
						s.scare.play()
					} else if (0.31<timer&&timer<0.4) {
						s.run.play()
						s.deathrun()

					}
				},32000)
			}

			s.scarySounds = function() {
				s.scarysoundsinterval = $interval(function(){
					var timer = Math.random()
					if (0<timer&&timer<0.15) {
						s.door.play()
					} else if (0.16<timer&&timer<0.3) {
						s.glass.play()
					} else if (0.31<timer&&timer<0.46) {
						s.scare.play()
					}
				},43000)  
			}
			s.changeURL = function(local) {
				l.path(local)
			}

			s.start = function() {
				// s.changeRoom('door')
				l.path('/door')
				s.introMusic.pause()

			}

			
			s.introsound = function() {
				if (s.activeRooms==='mainScreen') {
					s.introMusic.play()
				}
			}
			// s.introsound()
			s.turn = function(flip) {
				s.flip=!s.flip;
				return s.flip;
			}

			s.supplycheck = function(person,item) {
				var show = true
				person.forEach(function(element) {
					if (element.name===item) {
						show = false
					}
				})
				return show
			}
			
			s.backcheck = function() {
				if (s.selectedThing.back) {
					return true
				} else {
					return false
				}
			}

			s.light = function() {
				s.person.forEach(function(element){
					if (element.name==='Flashlight') {
						s.changeRoom('basement')
						return true
					} 

				})
				if (s.activeRooms!== 'basement') {
					s.changeRoom('black')
				}
			}



			s.interact=function(thing){
				s.selectedThing = thing
			}

			s.collect = function (item) {
				s.person.push(item)
				// s.activeRooms='mainScreen'
			}

			

			s.changeRoom = function(view) {
				while (s.place.length > 0) {
					s.place.pop()
				}
				s.place.push(view)
			}
			

}])