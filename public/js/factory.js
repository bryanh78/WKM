angular.module("game")
	.factory("scaryFactor", 
		[function(){

var screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213"
				},
				door : {
					img : "../photos/edited/normal/door.jpg",
					img2 : "",
					img3 : ""
				},
				mainHall : {
					img : "../photos/edited/normal/mainhall.jpg",
					img2 : "",
					img3 : ""
				},
				mainHall2 : {
					img : "../photos/edited/normal/mainhallfromliving.jpg",
					img2 : "",
					img3 : ""
				},
				kitchen : {
					img : "../photos/edited/normal/kitchen.jpg",
					img2 : "",
					img3 : ""
				},
				stairs : {
					img :"../photos/edited/normal/stairstop.jpg",
					img2 : "",
					img3 : ""
				},
				stairs2 : {
					img :"../photos/edited/normal/stairsfromtop.jpg",
					img2 : "",
					img3 : ""
				},
				dining : {
					img : "http://i.dailymail.co.uk/i/pix/2013/04/30/article-2316987-198AAE6A000005DC-733_964x634.jpg",
					img2 : "",
					img3 : ""
				},
				livingroom : {
					img : "http://41.media.tumblr.com/625f3e51caeebec12ccaa6fe242de834/tumblr_nldtcaPnk11s1vn29o1_500.jpg",
					img2 : "",
					img3 : ""
				},
				basement : {
					img :"http://www.lovethesepics.com/wp-content/uploads/2012/10/The-black-figure-in-an-old-abandoned-crypt-full-of-mostly-empty-coffins.jpg",
					img2 : "",
					img3 : ""
				},
				vault : {
					img : "http://i.imgur.com/v6PYXYw.jpg",
					img2 : "",
					img3 : ""
				},
				furnace : {
					img : "http://i.imgur.com/Rau7e4x.jpg",
					img2 : "",
					img3 : ""
				},
				secondfloor : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/This-abandoned-grand-ballroom-was-one-of-the-best-i-have-seen-real-heavy-decay-creeping-in-from-all-over-was-once-a-hotel-too.jpg",
					img2 : "",
					img3 : ""
				},
				bedroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/The-master-bedroom.jpg",
					img2 : "",
					img3 : ""
				},
				junkroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Ghost-house-a-real-creepy-room-in-the-abandoned-manor-house.jpg",
					img2 : "",
					img3 : ""
				},
				black : {
					img : "https://d2d00szk9na1qq.cloudfront.net/Product/dbba6000-0c50-4a43-9f72-b12fe0720e2a/Images/Large_DJ-423.jpg",
					img2 : "",
					img3 :"" 
				},
				doorlock : {
					img : "http://www.losspreventionplan.com/wp-content/uploads/2014/04/locks-doors.jpg",
					img2 : "",
					img3 : ""
				},
				library : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Library-ghosts-The-Manor-library-was-very-dusty-and-the-smell-of-decay-and-paper-was-really-still-and-creepy.jpg",
					img2 : "",
					img3 : ""
				},
				kidsroom : {
					img : "http://www.lovethesepics.com/wp-content/uploads/2012/10/Youre-not-afraid-of-the-dark-are-you-Creepy-carriage-at-spooky-abandoned-manor-house.jpg",
					img2 : "",
					img3 : ""
				},
				underbed : {
					img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFEvdW9-e4eDL4em5gUWAKXGTwVZ3j3E6VVn25eyFIHu4HsMipA",
					img2 : "",
					img3 : ""
				},
				closet : {
					img : "http://www.masterheartmagazine.com/collaborators/Giuffre-Heitzner_Anna-Marie/_images/Light-Through-Door.gif",
					img2 : "",
					img3 : ""
				},
				coffin : {
					img : "https://s-media-cache-ak0.pinimg.com/736x/46/ec/7d/46ec7d02c7f60790ac164baad8cd8a13.jpg",
					img2 : "",
					img3 : ""
				},
				deathface : {
					img : "https://i.ytimg.com/vi/Yqh6CFMltWU/hqdefault.jpg",
					img2 : "",
					img3 : ""
				},
				freedom : {
					img : "https://upload.wikimedia.org/wikipedia/commons/5/5d/Open_Field_Sutton_Park.jpg",
					img2 : "",
					img3 : ""
				}
			}

var items = {
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

			return {
				screen : screen,
				items : items
			}

		}])