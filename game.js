angular.module("game", [])

angular.module("game")
	.controller("scary", 
		["$scope", function($scope){

			var s = $scope
			s.activeRooms = "mainScreen"
			s.person = []
			// s.enterGame = function() {
			// 	s.mainScreen = !s.mainScreen;
			// 	s.mainHall = !s.mainHall;

			// }
			

			s.changeRoom = function(event) {
				s.activeRooms = event
				return s.activeRooms
			}

			s.screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213"
				},
				door : {
					img : "https://s-media-cache-ak0.pinimg.com/236x/0a/31/10/0a311082738a18787f129b1dcaad041e.jpg"
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