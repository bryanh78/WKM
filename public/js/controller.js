angular.module("game")
	.controller("scary", 
		["$scope","$interval","$timeout","$http","$location","scaryFactor", function($scope, $interval,$timeout,$http,$location,scaryFactor){

			var l = $location
			var h = $http
			var s = $scope
			// var h = $http
			// s.activeRooms = "mainScreen"
			s.code = []
			s.scarable = true
			s.level = "img"
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

			s.ghostChance = function() {
				if (s.scarable===true){
					var timer = Math.random()
					if (s.level==='img'){
						if (0<timer&&timer<0.2){
							s.ghostActive()
						}
					} else if (s.level==='img2'){
						if (0<timer&&timer<0.4){
							s.ghostActive()
						}
					}
				}
			}

			s.ghostActive = function() {
					var timer = Math.random()
					if (0<timer&&timer<0.33) {
						s.dadGhost()
						s.scarable = false
						return s.scarable
					} else if (0.34<timer&&timer<0.66) {
						s.momGhost()
						s.scarable = false
						return s.scarable
					} else if (0.67<timer&&timer<1) {
						s.childGhost()
						s.scarable = false
						return s.scarable
					}
			}

			s.dadGhost = function() {
				s.hidehole = true
				s.dad = true
				$timeout(function() {
					if (s.hiding) {
						s.hidehole = false
						s.scarable = true
						// s.somesound.play()
						return s.scarable
					} else {
						s.changeRoom('deathface')
						s.death.play()
						$interval.cancel(s.finalSoundsinterval)
						while (s.person.length > 0) {
							s.person.pop()
						}						
					}
				}, 28000)
			}

			s.momGhost = function() {
				s.hidehole = true
				s.mom = true
				$timeout(function() {
					if (s.hiding==='under') {
						s.hidehole = false
						s.scarable =true
						// s.somesound.play()
						return s.scarable
						} else {
							var neckcheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Necklace') {
									neckcheck = true
									s.person.splice(index,1)
									s.scarable = true
									return s.scarable
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

			s.childGhost = function() {
				s.hidehole = true
				s.child = true
				$timeout(function() {
					if (s.hiding === 'behind') {
						s.hidehole = false
						s.scarable =true
						// s.somesound.play()
						return s.scarable
						} else {
							var bearcheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Teddy Bear') {
									neckcheck = true
									s.person.splice(index,1)
									s.scarable = true
									return s.scarable
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

			s.intensifyier = function() {
				s.level = 'img3'
				return s.level
			}

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
				if (s.codecheck === s.code[0],s.code[1],s.code[2]) {
					console.log('success')
					s.changeRoom('freedom')
					$interval.cancel(s.finalSoundsinterval)
				} else {
					console.log('fail')
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
				s.codeLoad()
				s.introMusic.pause()

			}

			s.codeLoad = function() {
				firstCode = []
				code = Math.random()
				code2 = code.toString()
				spliting = code2.split('');
				firstCode.push(spliting[2],spliting[3],spliting[4])
				firstGroup = firstCode.join('')
				s.code.push(firstGroup)

				console.log(s.code)
				// console.log(codeNumbers)


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