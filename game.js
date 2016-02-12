angular.module("game", [])

angular.module("game")
	.controller("scary", 
		["$scope","$interval","$timeout", function($scope, $interval,$timeout){

			var s = $scope
			s.activeRooms = "mainScreen"
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
				console.log(s.codecheck)
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

			s.start = function() {
				s.changeRoom('door')
				s.introMusic.pause()
			}

			
			s.introsound = function() {
				if (s.activeRooms==='mainScreen') {
					s.introMusic.play()
				}
			}
			s.introsound()
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

			s.items = {
				key : {
					name : "Small Key",
					holding : true,
					description : "-A small, simply designed key. It wouldn't be used for a safe. I wonder what it's for...-"
				},
				flashlight : {
					name : "Flashlight",
					holding : true,
					description : "-I wonder how long this has been here. Who knows how much battery it has left.-"
				},
				firstnote : {
					name : "Note 1",
					holding : true,
					description : "-438... of course its torn.-",
					back : "-U... hmmmm-"
				},
				secondnote : {
					name : "Note 2",
					holding : true,
					description : "-266... looks like im only missing one more piece.-",
					back : "-N...-"
				},
				thirdnote : {
					name : "Note 3",
					holding : true,
					description : "-175... I wonder what order these go in?-",
					back : "-R... ooookkkk? U.N.R? or maybe it's...-"
				},
				necklace : {
					name : "Necklace",
					holding : true,
					description : "-This looks beautiful. and ancient. hmmm it seems to almost glow.-"
				},
				vaultKey : {
					name : "Heavy Key",
					holding : true,
					description : "-Now this is a key! I must be to something big.-"
				},
				death : {
					name : "death",
					holding : true,
				}
			}

			s.changeRoom = function(event) {
				s.activeRooms = event
				return s.activeRooms

			}

			// http://www.lovethesepics.com/2012/10/hauntingly-beautiful-abandoned-europe-meet-urbex-master-andre-govia/
			s.screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213"
				},
				door : {
					img : "https://i.ytimg.com/vi/gYEGP6IcfPw/maxresdefault.jpg"
				},
				mainHall : {
					img : "http://farm8.staticflickr.com/7236/7218668744_65e2ee513a_b.jpg"
				},
				kitchen : {
					img : "https://c2.staticflickr.com/4/3711/8812149795_4b3dccda71_b.jpg"
				},
				stairs : {
					img :"http://www.lovethesepics.com/wp-content/uploads/2012/10/abandoned-hospital.jpg"
				},
				dining : {
					img : "http://i.dailymail.co.uk/i/pix/2013/04/30/article-2316987-198AAE6A000005DC-733_964x634.jpg"
				},
				frontroom : {
					img : "http://41.media.tumblr.com/625f3e51caeebec12ccaa6fe242de834/tumblr_nldtcaPnk11s1vn29o1_500.jpg"
				},
				basement : {
					img :"http://www.lovethesepics.com/wp-content/uploads/2012/10/The-black-figure-in-an-old-abandoned-crypt-full-of-mostly-empty-coffins.jpg"
				},
				vault : {
					img : "http://i.imgur.com/v6PYXYw.jpg"
				},
				furnace : {
					img : "http://i.imgur.com/Rau7e4x.jpg"
				},
				secondfloor : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/This-abandoned-grand-ballroom-was-one-of-the-best-i-have-seen-real-heavy-decay-creeping-in-from-all-over-was-once-a-hotel-too.jpg"
				},
				bedroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/The-master-bedroom.jpg"
				},
				junkroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Ghost-house-a-real-creepy-room-in-the-abandoned-manor-house.jpg"
				},
				black : {
					img : "https://d2d00szk9na1qq.cloudfront.net/Product/dbba6000-0c50-4a43-9f72-b12fe0720e2a/Images/Large_DJ-423.jpg"
				},
				doorlock : {
					img : "http://www.losspreventionplan.com/wp-content/uploads/2014/04/locks-doors.jpg"
				},
				library : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Library-ghosts-The-Manor-library-was-very-dusty-and-the-smell-of-decay-and-paper-was-really-still-and-creepy.jpg"
				},
				kidsroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Youre-not-afraid-of-the-dark-are-you-Creepy-carriage-at-spooky-abandoned-manor-house.jpg"
				},
				underbed : {
					img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFEvdW9-e4eDL4em5gUWAKXGTwVZ3j3E6VVn25eyFIHu4HsMipA"
				},
				closet : {
					img : "http://www.masterheartmagazine.com/collaborators/Giuffre-Heitzner_Anna-Marie/_images/Light-Through-Door.gif"
				},
				coffin : {
					img : "https://s-media-cache-ak0.pinimg.com/736x/46/ec/7d/46ec7d02c7f60790ac164baad8cd8a13.jpg"
				},
				deathface : {
					img : "https://i.ytimg.com/vi/Yqh6CFMltWU/hqdefault.jpg"
				},
				freedom : {
					img : "https://upload.wikimedia.org/wikipedia/commons/5/5d/Open_Field_Sutton_Park.jpg"
				}

			}

}])