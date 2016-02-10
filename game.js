angular.module("game", [])

angular.module("game")
	.controller("scary", 
		["$scope", function($scope){

			var s = $scope
			s.activeRooms = "mainScreen"
			s.person = []
			s.selectedThing = []

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

				},
				vaultKey : {

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
				}

			}





















}])