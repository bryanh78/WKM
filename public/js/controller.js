angular.module("game")
	.controller("scary", 
		["$scope","$interval","$timeout","$http","$location","scaryFactor", function($scope, $interval,$timeout,$http,$location,scaryFactor){

			var l = $location
			var h = $http
			var s = $scope
			// var h = $http
			// s.activeRooms = "mainScreen"
			// s.dad=false
			// s.mom=true
			// s.child=true
			
			s.under = false
			s.behind = false
			s.code = []
			s.scarable = true
			s.level = "img"
			s.place = [{hide:true}]
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
			s.womenScream = $('#womenScream')[0]
			s.softSinging = $('#softSinging')[0]
			s.deamonBreath = $('#deamonBreath')[0]
			s.bootSteps = $('#bootSteps')[0]
			s.pianointro = $('#pianointro')[0]
			s.childLaugh = $('#childLaugh')[0]
			// s.hiss = $('#hiss')[0]
			// s.leave = $('#leave')[0]

			

			s.screen = scaryFactor.screen
			s.items = scaryFactor.items

			s.score = function(oldScore){
				newScore = oldScore += 1

            h({
                method : 'POST',
                url    : '/victory',
                data   : newScore
            }).then(function(returnData){

                console.log(returnData)
                if ( returnData.data.success ) {
                $rootScope.user= returnData.config.data
                 // window.location.href="/#/profile"
                  } 
                else { console.log(returnData)}
            })
        }

			s.leaveHide = function() {
				// console.log(s.under,"and",s.behind)
				s.behind = false
				s.under = false
				return s.under, s.behind
			}

			s.Behind = function() {
				// console.log(s.behind)
				s.behind = true
				return s.behind
			}

			s.Under = function() {
				// console.log(s.under)
				s.under = true
				return s.under
			}

			s.rescare = function() {
				s.scarable=true
				return s.scarable
			}

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

			s.finalRun = function() {
				// console.log('dad')
				s.mom = true
				s.child = true
				s.dad = true
				s.deamonBreath.play()
				$timeout(function() {
						window.location.href = '/death'
						while (s.person.length > 0) {
							s.person.pop()
						}						
					
				}, 30000)
			}

			s.dadGhost = function() {
				console.log('dad')
				s.hidehole = true
				s.dad = true
				s.deamonBreath.play()
				$timeout(function() {
					if (s.behind||s.under) {
						s.hidehole = false
						s.dad = false
						s.scarable = true
						// s.somesound.play()
						return s.scarable
					} else {
						var wineCheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Aged Wine') {
									wineCheck = true
									s.hidehole = false
									s.person.splice(index,1)
									s.scarable = true
									s.dad = false
									s.glass.play()
									return s.scarable
								}
							})
							if (!wineCheck)
						// s.changeRoom('deathface')
						// s.death.play()
						// $interval.cancel(s.finalSoundsinterval)
						window.location.href = '/death'
						while (s.person.length > 0) {
							s.person.pop()
						}						
					}
				}, 7000)
			}

			s.momGhost = function() {
				console.log('mom')
				s.hidehole = true
				s.mom = true
				s.piano.play()
				$timeout(function() {
					if (s.under) {
						s.hidehole = false
						s.scarable =true
						s.mom = false
						// s.somesound.play()
						return s.scarable
						} else {
							var neckcheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Necklace') {
									neckcheck = true
									s.hidehole = false
									s.person.splice(index,1)
									s.scarable = true
									s.mom = false
									s.glass.play()
									return s.scarable
								}
							})
							if (!neckcheck){
								// s.changeRoom('deathface')
								// s.death.play()
								// $interval.cancel(s.finalSoundsinterval)
								window.location.href = '/death'
								while (s.person.length > 0) {
									s.person.pop()
								}
							}
						}
				}, 14000)
			}

			s.childGhost = function() {
				console.log('child')
				s.hidehole = true
				s.child = true
				s.childLaugh.play()
				$timeout(function() {
					if (s.behind) {
						s.hidehole = false
						s.scarable =true
						s.child = false
						// s.somesound.play()
						return s.scarable
						} else {
							var bearcheck = false
							s.person.forEach(function(element) {
								var index = s.person.indexOf(element)
								if (element.name==='Teddy Bear') {
									bearcheck = true
									s.hidehole = false
									s.person.splice(index,1)
									s.scarable = true
									s.child = false
									return s.scarable
								}
							})
							if (!bearcheck){
								// s.changeRoom('deathface')
								// s.death.play()
								// $interval.cancel(s.finalSoundsinterval)
								window.location.href = '/death'
								while (s.person.length > 0) {
									s.person.pop()
								}
							}
						}
				}, 14000)
			}

			s.intensifyier = function() {
				s.level = 'img3'
				return s.level
			}

			s.intensify = function() {
				s.level = 'img2'
				return s.level
			}

			
			// s.deaththing = function () {
			// 	s.changeRoom('deathface')
			// 	s.death.play()
			// 	$interval.cancel(s.finalSoundsinterval)
			// 	$interval.cancel(s.scarysoundsinterval)
			// 	while (s.person.length > 0) {
			// 		s.person.pop()
			// 	}
			// }

			s.codebox = function() {
				s.codecheck = parseInt(prompt('Please Enter Code'));
				// console.log(s.codecheck)
				if (s.codecheck === s.code[0],s.code[1],s.code[2]) {
					console.log('success')
					window.location.href = '/victory'
					$interval.cancel(s.finalSoundsinterval)
				} else {
					console.log('fail')
				}
			}

			// s.introPiano = function() {
			// 	s.changeRoom('junkroom')
			// 	s.piano.play()
			// }

			// s.junkleave = function() {
			// 	s.changeRoom('secondfloor')
			// 	s.piano.pause()
			// }

			// s.introClock = function() {
			// 	s.changeRoom('dining')
			// 	s.clock.play()
			// }

			s.retry = function() {
				window.location.href = '/'
				s.death.pause()
				// s.introMusic.play()
			}

			// s.diningHall = function() {
			// 	s.changeRoom('mainHall')
			// 	s.clock.pause()
			// }
			// s.diningKitchen = function() {
			// 	s.changeRoom('kitchen')
			// 	s.clock.pause()
			// }

			// s.deathrun = function() {
			// 	s.hidehole = true
			// 	$timeout(function() {
			// 		if (s.activeRooms === 'underbed' || s.activeRooms === 'closet' || s.activeRooms === 'coffin') {
			// 			s.hidehole = false
			// 			} else {
			// 				var neckcheck = false
			// 				s.person.forEach(function(element) {
			// 					var index = s.person.indexOf(element)
			// 					if (element.name==='Necklace') {
			// 						neckcheck = true
			// 						s.person.splice(index,1)
			// 					}
			// 				})
			// 				if (!neckcheck){
			// 					s.changeRoom('deathface')
			// 					s.death.play()
			// 					$interval.cancel(s.finalSoundsinterval)
			// 					while (s.person.length > 0) {
			// 						s.person.pop()
			// 					}
			// 				}
			// 			}
			// 	}, 28000)
			// }

			// s.endtimes = function() {
			// 	s.finalCountdown()
			// }

			// s.finalCountdown = function() {
			// 	s.finalCountinterval = $interval(function(){
			// 		$interval.cancel(s.finalSoundsinterval)
			// 		var timer = Math.random()
			// 		if (0<timer&&timer<0.5) {
			// 			s.run.play()
			// 			s.deathrun()

			// 		}
			// 	},29000)
			// }

			// s.gametime = function() {
			// 	s.finalSounds()
			// }

			// s.finalSounds = function() {
			// 	s.finalSoundsinterval = $interval(function(){
			// 		$interval.cancel(s.scarysoundsinterval)
			// 		var timer = Math.random()
			// 		if (0<timer&&timer<0.1) {
			// 			s.door.play()
			// 		} else if (0.11<timer&&timer<0.2) {
			// 			s.glass.play()
			// 		} else if (0.21<timer&&timer<0.3) {
			// 			s.scare.play()
			// 		} else if (0.31<timer&&timer<0.4) {
			// 			s.run.play()
			// 			s.deathrun()

			// 		}
			// 	},32000)
			// }
			s.music = function() {
					if(s.level==="img") {
						s.pianointro.play()
					} else if(s.level==="img2") {
						s.introsound.play()
					} else {
						s.run.play()
					}
			}

			s.scarySounds = function() {
				s.scarysoundsinterval = $interval(function(){
					var timer = Math.random()
					if (0<timer&&timer<0.15) {
						s.door.play()
					} else if (0.16<timer&&timer<0.3) {
						s.softSinging.play()
					} else if (0.31<timer&&timer<0.46) {
						s.scare.play()
					}
				},31000)  
			}
			s.changeURL = function(local) {
				l.path(local)
				s.bootSteps.play()
			}

			s.start = function() {
				// s.changeRoom('door')
				l.path('/door')
				s.scarySounds()
				s.music()
				// s.test()
				// s.codeLoad()
				// s.introMusic.pause()
			}

			s.codeLoad = function() {
				firstCode = []
				code = Math.random()
				code2 = code.toString()
				spliting = code2.split('');
				firstCode.push(spliting[2],spliting[3],spliting[4])
				firstGroup = firstCode.join('')
				s.code.push(firstGroup)
				console.log(s.code[s.code.length-1])
				s.findItem()
				// console.log(s.person[0])
				// console.log(s.code)
				// console.log(codeNumbers)
			}

			s.findItem = function() {
				s.person.forEach(function(element) {
					if (element.name==='Note 1') {
						element.description = s.code[0]
						console.log(element)
					} else if (element.name==='Note 2') {
						element.description = s.code[1]
						console.log(element)
					} else if (element.name==='Note 3') {
						element.description = s.code[2]
					}
				})
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
				// console.log(s.place)
			}
			

}])