angular.module("game")
	.factory("scaryFactor", 
		[function(){

var screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213",
					hide : true
				},
				Door : {
					img : "/photos/edited/normal/door.JPG",
					img2 : "/photos/edited/level 2/door.JPG",
					img3 : "/photos/edited/level 3/door.JPG"
				},
				MainHall : {
					img : "/photos/edited/normal/mainhall.JPG",
					img2 : "/photos/edited/level 2/mainhall.JPG",
					img3 : "/photos/edited/level 3/mainhall.JPG"
				},
				HallFromLiving : {
					img : "/photos/edited/normal/mainhallfromliving.JPG",
					img2 : "/photos/edited/level 2/mainhallfromliving.JPG",
					img3 : "/photos/edited/level 3/mainhallfromliving.JPG"
				},
				
				Kitchen : {
					img : "/photos/edited/normal/kitchen.JPG",
					img2 : "/photos/edited/level 2/kitchen.JPG",
					img3 : "/photos/edited/level 3/kitchen.JPG"
				},
				Kitchen2 : {
					img : "/photos/edited/normal/kitchen2.JPG",
					img2 : "/photos/edited/level 2/kitchen2.JPG",
					img3 : "/photos/edited/level 3/kitchen2.JPG"
				},
				StairsTop : {
					img :"/photos/edited/normal/stairstop.JPG",
					img2 : "/photos/edited/level 2/stairstop.JPG",
					img3 : "/photos/edited/level 3/stairstop.JPG"
				},
				StairsFromTop : {
					img :"/photos/edited/normal/stairsfromtop.JPG",
					img2 : "/photos/edited/level 2/stairsfromtop.JPG",
					img3 : "/photos/edited/level 3/stairsfromtop.JPG"
				},
				Dining : {
					img :"/photos/edited/normal/dining.JPG",
					img2 : "/photos/edited/level 2/dining.JPG",
					img3 : "/photos/edited/level 3/dining.JPG"
				},
				Living : {
					img :"/photos/edited/normal/livingroom.JPG",
					img2 : "/photos/edited/level 2/livingroom.JPG",
					img3 : "/photos/edited/level 3/livingroom.JPG"
				},
				Base : {
					img :"/photos/edited/normal/basement.JPG",
					img2 : "/photos/edited/level 2/basement.JPG",
					img3 : "/photos/edited/level 3/basement.JPG"
				},
				Dark : {
					img :"/photos/edited/normal/darkroomL.JPG",
					img2 : "/photos/edited/level 2/darkroomL.JPG",
					img3 : "/photos/edited/level 3/darkroomL.JPG"
				},
				DarkDoor : {
					img :"/photos/edited/normal/darkdoor.JPG",
					img2 : "/photos/edited/level 2/darkdoor.JPG",
					img3 : "/photos/edited/level 3/darkdoor.JPG"
				},
				TopFromUpstairs : {
					img :"/photos/edited/normal/upstairsfromhall.JPG",
					img2 : "/photos/edited/level 2/upstairsfromhall.JPG",
					img3 : "/photos/edited/level 3/upstairsfromhall.JPG"
				},
				Bed : {
					img :"/photos/edited/normal/bedroom.JPG",
					img2 : "/photos/edited/level 2/bedroom.JPG",
					img3 : "/photos/edited/level 3/bedroom.JPG"
				},
				Empty : {
					img :"/photos/edited/normal/empty.JPG",
					img2 : "/photos/edited/level 2/empty.JPG",
					img3 : "/photos/edited/level 3/empty.JPG"
				},
				DarkLeft : {
					img :"/photos/edited/normal/darkroom2L.JPG",
					img2 : "/photos/edited/level 2/darkroom2L.JPG",
					img3 : "/photos/edited/level 3/darkroom2L.JPG"
				},
				DarkRight : {
					img :"/photos/edited/normal/darkroom3L.JPG",
					img2 : "/photos/edited/level 2/darkroom3L.JPG",
					img3 : "/photos/edited/level 3/darkroom3L.JPG"
				},
				DarkFound : {
					img :"/photos/edited/normal/darkroomfound.JPG",
					img2 : "/photos/edited/level 2/darkroomfound.JPG",
					img3 : "/photos/edited/level 3/darkroomfound.JPG"
				},
				BaseFrom2 : {
					img :"/photos/edited/normal/basefrom2.JPG",
					img2 : "/photos/edited/level 2/basefrom2.JPG",
					img3 : "/photos/edited/level 3/basefrom2.JPG"
				},
				BaseFromDark : {
					img :"/photos/edited/normal/basefromdark.JPG",
					img2 : "/photos/edited/level 2/basefromdark.JPG",
					img3 : "/photos/edited/level 3/basefromdark.JPG"
				},
				Base2 : {
					img :"/photos/edited/normal/basement2.JPG",
					img2 : "/photos/edited/level 2/basement2.JPG",
					img3 : "/photos/edited/level 3/basement2.JPG"
				},
				BaseDoor : {
					img :"/photos/edited/normal/basementdoor.JPG",
					img2 : "/photos/edited/level 2/basementdoor.JPG",
					img3 : "/photos/edited/level 3/basementdoor.JPG",
				},
				Bath3Hide : {
					img :"/photos/edited/normal/bath3hide.JPG",
					img2 : "/photos/edited/level 2/bath3hide.JPG",
					img3 : "/photos/edited/level 3/bath3hide.JPG"
				},
				Bath1 : {
					img :"/photos/edited/normal/bathroom1.JPG",
					img2 : "/photos/edited/level 2/bathroom1.JPG",
					img3 : "/photos/edited/level 3/bathroom1.JPG"
				},
				Bath2 : {
					img :"/photos/edited/normal/bathroom2.JPG",
					img2 : "/photos/edited/level 2/bathroom2.JPG",
					img3 : "/photos/edited/level 3/bathroom2.JPG"
				},
				Bath3 : {
					img :"/photos/edited/normal/bathroom3.JPG",
					img2 : "/photos/edited/level 2/bathroom3.JPG",
					img3 : "/photos/edited/level 3/bathroom3.JPG"
				},
				BedHall : {
					img :"/photos/edited/normal/bedroomhall.JPG",
					img2 : "/photos/edited/level 2/bedroomhall.JPG",
					img3 : "/photos/edited/level 3/bedroomhall.JPG"
				},
				BedHallFromBath : {
					img :"/photos/edited/normal/bedroomhallfrombath.JPG",
					img2 : "/photos/edited/level 2/bedroomhallfrombath.JPG",
					img3 : "/photos/edited/level 3/bedroomhallfrombath.JPG"
				},
				EntertainBath : {
					img :"/photos/edited/normal/bathfromentertain.JPG",
					img2 : "/photos/edited/level 2/bathfromentertain.JPG",
					img3 : "/photos/edited/level 3/bathfromentertain.JPG"
				},
				Entertain : {
					img :"/photos/edited/normal/entertainroom.JPG",
					img2 : "/photos/edited/level 2/entertainroom.JPG",
					img3 : "/photos/edited/level 3/entertainroom.JPG"
				},
				Guest : {
					img :"/photos/edited/normal/guestbedroomfrombath.JPG",
					img2 : "/photos/edited/level 2/guestbedroomfrombath.JPG",
					img3 : "/photos/edited/level 3/guestbedroomfrombath.JPG"
				},
				GuestFromHall : {
					img :"/photos/edited/normal/guestfromhall.JPG",
					img2 : "/photos/edited/level 2/guestfromhall.JPG",
					img3 : "/photos/edited/level 3/guestfromhall.JPG"
				},
				HallFromUpstairs : {
					img :"/photos/edited/normal/hallfromupstairs.JPG",
					img2 : "/photos/edited/level 2/hallfromupstairs.JPG",
					img3 : "/photos/edited/level 3/hallfromupstairs.JPG"
				},
				LivingFromSide : {
					img :"/photos/edited/normal/livingfromside.JPG",
					img2 : "/photos/edited/level 2/livingfromside.JPG",
					img3 : "/photos/edited/level 3/livingfromside.JPG"
				},
				Office : {
					img :"/photos/edited/normal/office.JPG",
					img2 : "/photos/edited/level 2/office.JPG",
					img3 : "/photos/edited/level 3/office.JPG"
				},
				SideFromOffice : {
					img :"/photos/edited/normal/sidefromoffice.JPG",
					img2 : "/photos/edited/level 2/sidefromoffice.JPG",
					img3 : "/photos/edited/level 3/sidefromoffice.JPG"
				},
				SideHall : {
					img :"/photos/edited/normal/sidehall.JPG",
					img2 : "/photos/edited/level 2/sidehall.JPG",
					img3 : "/photos/edited/level 3/sidehall.JPG"
				},
				SinkFromEmpty : {
					img :"/photos/edited/normal/hallfromempty.JPG",
					img2 : "/photos/edited/level 2/hallfromempty.JPG",
					img3 : "/photos/edited/level 3/hallfromempty.JPG"
				},
				BaseFromStairs : {
					img :"/photos/edited/normal/stairstobasement.JPG",
					img2 : "/photos/edited/level 2/stairstobasement.JPG",
					img3 : "/photos/edited/level 3/stairstobasement.JPG"
				},
				StairsFromBase : {
					img :"/photos/edited/normal/stairsfrombasement.JPG",
					img2 : "/photos/edited/level 2/stairsfrombasement.JPG",
					img3 : "/photos/edited/level 3/stairsfrombasement.JPG"
				},
				TopFromBed: {
					img :"/photos/edited/normal/upstairsfrombedroom.JPG",
					img2 : "/photos/edited/level 2/upstairsfrombedroom.JPG",
					img3 : "/photos/edited/level 3/upstairsfrombedroom.JPG"
				},
				UpstairsFromEmpty : {
					img :"/photos/edited/normal/emptytoupstairs.JPG",
					img2 : "/photos/edited/level 2/emptytoupstairs.JPG",
					img3 : "/photos/edited/level 3/emptytoupstairs.JPG"
				},
				UpstairsFromHall : {
					img :"/photos/edited/normal/guesttoupstairs.JPG",
					img2 : "/photos/edited/level 2/guesttoupstairs.JPG",
					img3 : "/photos/edited/level 3/guesttoupstairs.JPG"
				},
				HallFromDoor : {
					img :"/photos/edited/normal/livingfromhall.JPG",
					img2 : "/photos/edited/level 2/livingfromhall.JPG",
					img3 : "/photos/edited/level 3/livingfromhall.JPG"
				},
				UpstairsLeft : {
					img :"/photos/edited/normal/upstairsleft.JPG",
					img2 : "/photos/edited/level 2/upstairsleft.JPG",
					img3 : "/photos/edited/level 3/upstairsleft.JPG"
				},
				HallFromGuest : {
					img :"/photos/edited/normal/hallfromguest.JPG",
					img2 : "/photos/edited/level 2/hallfromguest.JPG",
					img3 : "/photos/edited/level 3/hallfromguest.JPG"
				},
				LookUpstairs : {
					img :"/photos/edited/normal/stairsbottom.JPG",
					img2 : "/photos/edited/level 2/stairsbottom.JPG",
					img3 : "/photos/edited/level 3/stairsbottom.JPG"
				},
				Dining2 : {
					img :"/photos/edited/normal/dining2.JPG",
					img2 : "/photos/edited/level 2/dining2.JPG",
					img3 : "/photos/edited/level 3/dining2.JPG"
				},
				KitchenFromLiving : {
					img :"/photos/edited/normal/kitchenfromliving.JPG",
					img2 : "/photos/edited/level 2/kitchenfromliving.JPG",
					img3 : "/photos/edited/level 3/kitchenfromliving.JPG"
				},
				ViewFromKitchen : {
					img :"/photos/edited/normal/livingfromkitchen.JPG",
					img2 : "/photos/edited/level 2/livingfromkitchen.JPG",
					img3 : "/photos/edited/level 3/livingfromkitchen.JPG"
				},
				SideFromLiving : {
					img :"/photos/edited/normal/sidefromliving.JPG",
					img2 : "/photos/edited/level 2/sidefromliving.JPG",
					img3 : "/photos/edited/level 3/sidefromliving.JPG"
				},
				MainFromLiving : {
					img :"/photos/edited/normal/mainfromliving.JPG",
					img2 : "/photos/edited/level 2/mainfromliving.JPG",
					img3 : "/photos/edited/level 3/mainfromliving.JPG"
				},
				BedFromTop : {
					img :"/photos/edited/normal/bedfromtop.JPG",
					img2 : "/photos/edited/level 2/bedfromtop.JPG",
					img3 : "/photos/edited/level 3/bedfromtop.JPG"
				},
				UpstairsFromTop : {
					img :"/photos/edited/normal/upstairsfromtop.JPG",
					img2 : "/photos/edited/level 2/upstairsfromtop.JPG",
					img3 : "/photos/edited/level 3/upstairsfromtop.JPG"
				},
				EmptyFromUpstairs : {
					img :"/photos/edited/normal/emptyfromupstairs.JPG",
					img2 : "/photos/edited/level 2/emptyfromupstairs.JPG",
					img3 : "/photos/edited/level 3/emptyfromupstairs.JPG"
				},
				GuestFromSink : {
					img :"/photos/edited/normal/guestfromsink.JPG",
					img2 : "/photos/edited/level 2/guestfromsink.JPG",
					img3 : "/photos/edited/level 3/guestfromsink.JPG"
				},
				Sink : {
					img :"/photos/edited/normal/sink.JPG",
					img2 : "/photos/edited/level 2/sink.JPG",
					img3 : "/photos/edited/level 3/sink.JPG"
				},
				EmptyFromSink : {
					img :"/photos/edited/normal/emptyfromsink.JPG",
					img2 : "/photos/edited/level 2/emptyfromsink.JPG",
					img3 : "/photos/edited/level 3/emptyfromsink.JPG"
				},
				SinkFromGuest : {
					img :"/photos/edited/normal/sinkfromguest.JPG",
					img2 : "/photos/edited/level 2/sinkfromguest.JPG",
					img3 : "/photos/edited/level 3/sinkfromguest.JPG"
				},
				EntertainFromHall : {
					img :"/photos/edited/normal/entertainfromhall.JPG",
					img2 : "/photos/edited/level 2/entertainfromhall.JPG",
					img3 : "/photos/edited/level 3/entertainfromhall.JPG"
				},
				HallFromEntertain : {
					img :"/photos/edited/normal/hallfromentertain.JPG",
					img2 : "/photos/edited/level 2/hallfromentertain.JPG",
					img3 : "/photos/edited/level 3/hallfromentertain.JPG"
				},
				ExitBase : {
					img :"/photos/edited/normal/mainfromstairs.JPG",
					img2 : "/photos/edited/level 2/mainfromstairs.JPG",
					img3 : "/photos/edited/level 3/mainfromstairs.JPG"
				},
				Death : {
					img :"/photos/edited/normal/death.JPG",
					img2 : "/photos/edited/level 2/upstairsleft.JPG",
					img3 : "/photos/edited/level 3/upstairsleft.JPG"
				},
				Hide1 : {
					img :"/photos/edited/normal/dininghide.JPG",
					img2 : "/photos/edited/level 2/dininghide.JPG",
					img3 : "/photos/edited/level 3/dininghide.JPG"
				},
				Hide2 : {
					img :"/photos/edited/normal/kitchenhide.JPG",
					img2 : "/photos/edited/level 2/kitchenhide.JPG",
					img3 : "/photos/edited/level 3/kitchenhide.JPG"
				},
				Hide3 : {
					img :"/photos/edited/normal/.JPG",
					img2 : "/photos/edited/level 2/.JPG",
					img3 : "/photos/edited/level 3/.JPG"
				},
				Hide3 : {
					img :"/photos/edited/normal/basehide1.JPG",
					img2 : "/photos/edited/level 2/basehide1.JPG",
					img3 : "/photos/edited/level 3/basehide1.JPG"
				},
				Hide4 : {
					img :"/photos/edited/normal/basehide2.JPG",
					img2 : "/photos/edited/level 2/basehide2.JPG",
					img3 : "/photos/edited/level 3/basehide2.JPG"
				},
				Hide5 : {
					img :"/photos/edited/normal/bedhide1.JPG",
					img2 : "/photos/edited/level 2/bedhide1.JPG",
					img3 : "/photos/edited/level 3/bedhide1.JPG"
				},
				Hide6 : {
					img :"/photos/edited/normal/bedhide2.JPG",
					img2 : "/photos/edited/level 2/bedhide2.JPG",
					img3 : "/photos/edited/level 3/bedhide2.JPG"
				},
				Hide7 : {
					img :"/photos/edited/normal/entertainbathhide.JPG",
					img2 : "/photos/edited/level 2/entertainbathhide.JPG",
					img3 : "/photos/edited/level 3/entertainbathhide.JPG"
				},
				Hide8 : {
					img :"/photos/edited/normal/bath3hide.JPG",
					img2 : "/photos/edited/level 2/bath3hide.JPG",
					img3 : "/photos/edited/level 3/bath3hide.JPG"
				},
				Hide9 : {
					img :"/photos/edited/normal/officehide.JPG",
					img2 : "/photos/edited/level 2/officehide.JPG",
					img3 : "/photos/edited/level 3/officehide.JPG"
				},
				Hide10 : {
					img :"/photos/edited/normal/bath1hide.JPG",
					img2 : "/photos/edited/level 2/bath1hide.JPG",
					img3 : "/photos/edited/level 3/bath1hide.JPG"
				}
				
			}

var items = {
				key : {
					name : "Small Key",
					holding : true,
					description : "-A small, simply designed key. It wouldn't be used for a door. I wonder what it's for...-"
				},
				flashlight : {
					name : "Flashlight",
					holding : true,
					description : "-I wonder how long this has been here. Who knows how much battery it has left.-"
				},
				firstnote : {
					name : "Note 1",
					holding : true,
					// code : [],
					// description : '',
					back : "-Careful now TIME is not on your side-"
				},
				secondnote : {
					name : "Note 2",
					holding : true,
					// description : "-266... looks like im only missing one more piece.-",
					back : "-The first is in a book. The last is in a hole.-"
				},
				thirdnote : {
					name : "Note 3",
					holding : true,
					// description : "-175... I wonder what order these go in?-",
					back : "-RUN-"
				},
				necklace : {
					name : "Necklace",
					holding : true,
					description : "-This looks beautiful. and ancient. hmmm it seems to almost glow.-"
				},
				vaultKey : {
					name : "Heavy Key",
					holding : true,
					description : "-Now this is a key! I must be to the door.-"
				},
				teddyBear : {
					name : "Teddy Bear",
					holding : true,
					description : "-An old bear being held together by a few strings and what appears to be dried blood. Why do I wnat this?-"
				},
				bottle : {
					name : "Aged Wine",
					holding : true,
					description : "-An old red. maybe a Cab... who knows Im sure it is gonna be good.-"
				}
			}

			return {
				screen : screen,
				items : items
			}

		}])