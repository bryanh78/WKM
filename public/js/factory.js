angular.module("game")
	.factory("scaryFactor", 
		[function(){

var screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213"
				},
				door : {
					img : "../photos/edited/normal/door.jpg",
					img2 : "../photos/edited/level 2/door.jpg",
					img3 : "../photos/edited/level 3/door.jpg",
					back : false,
					back2 : false,
					back3 : false
				},
				mainHall : {
					img : "../photos/edited/normal/mainhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg",
					back : false,
					back2 : false,
					back3 : false
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
				kitchen2 : {
					img : "../photos/edited/normal/kitchen2.jpg",
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
					img :"../photos/edited/normal/dining.jpg",
					img2 : "",
					img3 : ""
				},
				livingRoom : {
					img :"../photos/edited/normal/livingroom.jpg",
					img2 : "",
					img3 : ""
				},
				basement : {
					img :"../photos/edited/normal/basement.jpg",
					img2 : "",
					img3 : ""
				},
				darkRoom : {
					img :"../photos/edited/normal/darkroomL.jpg",
					img2 : "",
					img3 : ""
				},
				darkRoom2 : {
					img :"../photos/edited/normal/darkdoor.jpg",
					img2 : "",
					img3 : ""
				},
				secondFloor : {
					img :"../photos/edited/normal/upstairsfromhall.jpg",
					img2 : "",
					img3 : ""
				},
				bedRoom : {
					img :"../photos/edited/normal/bedroom.jpg",
					img2 : "",
					img3 : ""
				},
				empty : {
					img :"../photos/edited/normal/bedroom.jpg",
					img2 : "",
					img3 : ""
				},
				darkRoom3 : {
					img :"../photos/edited/normal/darkroom2L.jpg",
					img2 : "",
					img3 :"" 
				},
				darkRoom4 : {
					img :"../photos/edited/normal/darkroom3L.jpg",
					img2 : "",
					img3 : ""
				},
				darkRoom5 : {
					img :"../photos/edited/normal/darkroomfound.jpg",
					img2 : "",
					img3 : ""
				},
				basement2 : {
					img :"../photos/edited/normal/basefrom2.jpg",
					img2 : "",
					img3 : ""
				},
				basement3 : {
					img :"../photos/edited/normal/basefromdark.jpg",
					img2 : "",
					img3 : ""
				},
				basement4 : {
					img :"../photos/edited/normal/basement2.jpg",
					img2 : "",
					img3 : ""
				},
				mainHall3 : {
					img :"../photos/edited/normal/basementdoor.jpg",
					img2 : "",
					img3 : ""
				},
				bathRoom3H : {
					img :"../photos/edited/normal/bath3hide.jpg",
					img2 : "",
					img3 : ""
				},
				bathRoom : {
					img :"../photos/edited/normal/bathroom1.jpg",
					img2 : "",
					img3 : ""
				},
				bathRoom2 : {
					img :"../photos/edited/normal/bathroom2.jpg",
					img2 : "",
					img3 : ""
				},
				bathRoom3 : {
					img :"../photos/edited/normal/bathroom3.jpg",
					img2 : "",
					img3 : ""
				},
				bedRoom2 : {
					img :"../photos/edited/normal/bedroomhall.jpg",
					img2 : "",
					img3 : ""
				},
				bedRoom3 : {
					img :"../photos/edited/normal/bedroomhallfrombath.jpg",
					img2 : "",
					img3 : ""
				},
				bedRoom4 : {
					img :"../photos/edited/normal/bedroomfromhall.jpg",
					img2 : "",
					img3 : ""
				},
				entertain : {
					img :"../photos/edited/normal/entertainbath.jpg",
					img2 : "",
					img3 : ""
				},
				entertain2 : {
					img :"../photos/edited/normal/entertainbathhide.jpg",
					img2 : "",
					img3 : ""
				},
				entertain3 : {
					img :"../photos/edited/normal/entertainfrombath.jpg",
					img2 : "",
					img3 : ""
				},
				entertain4 : {
					img :"../photos/edited/normal/entertainroom.jpg",
					img2 : "",
					img3 : ""
				},
				guestBed : {
					img :"../photos/edited/normal/guestbedroomfrombath.jpg",
					img2 : "",
					img3 : ""
				},
				guestBed2 : {
					img :"../photos/edited/normal/guestfromhall.jpg",
					img2 : "",
					img3 : ""
				},
				secondFloor2 : {
					img :"../photos/edited/normal/hallfromempty.jpg",
					img2 : "",
					img3 : ""
				},
				secondFloor3 : {
					img :"../photos/edited/normal/hallfromupstairs.jpg",
					img2 : "",
					img3 : ""
				},
				livingRoom2 : {
					img :"../photos/edited/normal/livingfromhall.jpg",
					img2 : "",
					img3 : ""
				},
				office : {
					img :"../photos/edited/normal/office.jpg",
					img2 : "",
					img3 : ""
				},
				sideHall : {
					img :"../photos/edited/normal/sidefromoffice.jpg",
					img2 : "",
					img3 : ""
				},
				sideHall2 : {
					img :"../photos/edited/normal/sidehall.jpg",
					img2 : "",
					img3 : ""
				},
				sink : {
					img :"../photos/edited/normal/sinkfromempty.jpg",
					img2 : "",
					img3 : ""
				},
				bottomStairs : {
					img :"../photos/edited/normal/stairstobasement.jpg",
					img2 : "",
					img3 : ""
				},
				bottomStairs2 : {
					img :"../photos/edited/normal/starisfrombase.jpg",
					img2 : "",
					img3 : ""
				},
				secondFloor4 : {
					img :"../photos/edited/normal/upstairsfrombedroom.jpg",
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