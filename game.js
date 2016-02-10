angular.module("game", [])

angular.module("game")
	.controller("scary", 
		["$scope", function($scope){

			var s = $scope
			s.activeRooms = "mainScreen"
			s.person = []
			s.selectedThing = []
			// s.enterGame = function() {
			// 	s.mainScreen = !s.mainScreen;
			// 	s.mainHall = !s.mainHall;

			// }
			// s.inverntory = function(event, items) {
			// 	console.log(items)
			// 	s.bag = 
			// }
			s.interact=function(event){
				console.log(event)
				s.selectedThing.push(event)
				console.log(s.selectedThing)
			}

			s.collect = function (item) {
				s.person.push(item)
			}

			s.items = {
				key : {
					name : "Small Key",
					holding : true,
					description : "A small, simply designed key. It wouldn't be used for a safe. I wonder what it's for..."
				},
				flashlight : {
					name : "Flashlight",
					holding : true,
					description : "I wonder how long this has been here. Who knows how much battery it has left."
				},
				firstnote : {
					name : "Note",
					holding : true,
					description : "438... of course its torn.",
					back : "U... hmmmm"
				},
				secondnote : {
					name : "Note",
					holding : true,
					description : "266... looks like im only missing one more piece.",
					back : "N..."
				},
				thirdnote : {
					name : "Note",
					holding : true,
					description : "175... I wonder what order these go in?",
					back : "R... ooookkkk? U.N.R? or maybe it's..."
				}
			}

			s.changeRoom = function(event) {
				s.activeRooms = event
				return s.activeRooms
			}

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
					img :"https://s-media-cache-ak0.pinimg.com/236x/c4/9d/dc/c49ddc88007b1ac1685a25e924548e59.jpg"
				},
				dining : {
					img : "http://i.dailymail.co.uk/i/pix/2013/04/30/article-2316987-198AAE6A000005DC-733_964x634.jpg"
				},
				frontroom : {
					img : "http://41.media.tumblr.com/625f3e51caeebec12ccaa6fe242de834/tumblr_nldtcaPnk11s1vn29o1_500.jpg"
				}
			}





















}])