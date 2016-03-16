angular.module("game")
	.factory("scaryFactor", 
		[function(){

var screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213",
					hide : true
				},
				Door : {
					img : "/photos/edited/normal/door.jpg",
					img2 : "/photos/edited/level 2/door.jpg",
					img3 : "/photos/edited/level 3/door.jpg"
				},
				MainHall : {
					img : "/photos/edited/normal/mainhall.jpg",
					img2 : "/photos/edited/level 2/mainhall.jpg",
					img3 : "/photos/edited/level 3/mainhall.jpg"
				},
				HallFromLiving : {
					img : "/photos/edited/normal/mainhallfromliving.jpg",
					img2 : "/photos/edited/level 2/mainhallfromliving.jpg",
					img3 : "/photos/edited/level 3/mainhallfromliving.jpg"
				},
				
				Kitchen : {
					img : "/photos/edited/normal/kitchen.jpg",
					img2 : "/photos/edited/level 2/kitchen.jpg",
					img3 : "/photos/edited/level 3/kitchen.jpg"
				},
				Kitchen2 : {
					img : "/photos/edited/normal/kitchen2.jpg",
					img2 : "/photos/edited/level 2/kitchen2.jpg",
					img3 : "/photos/edited/level 3/kitchen2.jpg"
				},
				StairsTop : {
					img :"/photos/edited/normal/stairstop.jpg",
					img2 : "/photos/edited/level 2/stairstop.jpg",
					img3 : "/photos/edited/level 3/stairstop.jpg"
				},
				StairsFromTop : {
					img :"/photos/edited/normal/stairsfromtop.jpg",
					img2 : "/photos/edited/level 2/stairsfromtop.jpg",
					img3 : "/photos/edited/level 3/stairsfromtop.jpg"
				},
				Dining : {
					img :"/photos/edited/normal/dining.jpg",
					img2 : "/photos/edited/level 2/dining.jpg",
					img3 : "/photos/edited/level 3/dining.jpg"
				},
				Living : {
					img :"/photos/edited/normal/livingroom.jpg",
					img2 : "/photos/edited/level 2/livingroom.jpg",
					img3 : "/photos/edited/level 3/livingroom.jpg"
				},
				Base : {
					img :"/photos/edited/normal/basement.jpg",
					img2 : "/photos/edited/level 2/basement.jpg",
					img3 : "/photos/edited/level 3/basement.jpg"
				},
				Dark : {
					img :"/photos/edited/normal/darkroomL.jpg",
					img2 : "/photos/edited/level 2/darkroomL.jpg",
					img3 : "/photos/edited/level 3/darkroomL.jpg"
				},
				DarkDoor : {
					img :"/photos/edited/normal/darkdoor.jpg",
					img2 : "/photos/edited/level 2/darkdoor.jpg",
					img3 : "/photos/edited/level 3/darkdoor.jpg"
				},
				TopFromUpstairs : {
					img :"/photos/edited/normal/upstairsfromhall.jpg",
					img2 : "/photos/edited/level 2/upstairsfromhall.jpg",
					img3 : "/photos/edited/level 3/upstairsfromhall.jpg"
				},
				Bed : {
					img :"/photos/edited/normal/bedroom.jpg",
					img2 : "/photos/edited/level 2/bedroom.jpg",
					img3 : "/photos/edited/level 3/bedroom.jpg"
				},
				Empty : {
					img :"/photos/edited/normal/empty.jpg",
					img2 : "/photos/edited/level 2/empty.jpg",
					img3 : "/photos/edited/level 3/empty.jpg"
				},
				DarkLeft : {
					img :"/photos/edited/normal/darkroom2L.jpg",
					img2 : "/photos/edited/level 2/darkroom2L.jpg",
					img3 : "/photos/edited/level 3/darkroom2L.jpg"
				},
				DarkRight : {
					img :"/photos/edited/normal/darkroom3L.jpg",
					img2 : "/photos/edited/level 2/darkroom3L.jpg",
					img3 : "/photos/edited/level 3/darkroom3L.jpg"
				},
				DarkFound : {
					img :"/photos/edited/normal/darkroomfound.jpg",
					img2 : "/photos/edited/level 2/darkroomfound.jpg",
					img3 : "/photos/edited/level 3/darkroomfound.jpg"
				},
				BaseFrom2 : {
					img :"/photos/edited/normal/basefrom2.jpg",
					img2 : "/photos/edited/level 2/basefrom2.jpg",
					img3 : "/photos/edited/level 3/basefrom2.jpg"
				},
				BaseFromDark : {
					img :"/photos/edited/normal/basefromdark.jpg",
					img2 : "/photos/edited/level 2/basefromdark.jpg",
					img3 : "/photos/edited/level 3/basefromdark.jpg"
				},
				Base2 : {
					img :"/photos/edited/normal/basement2.jpg",
					img2 : "/photos/edited/level 2/basement2.jpg",
					img3 : "/photos/edited/level 3/basement2.jpg"
				},
				BaseDoor : {
					img :"/photos/edited/normal/basementdoor.jpg",
					img2 : "/photos/edited/level 2/basementdoor.jpg",
					img3 : "/photos/edited/level 3/basementdoor.jpg",
				},
				Bath3Hide : {
					img :"/photos/edited/normal/bath3hide.jpg",
					img2 : "/photos/edited/level 2/bath3hide.jpg",
					img3 : "/photos/edited/level 3/bath3hide.jpg"
				},
				Bath1 : {
					img :"/photos/edited/normal/bathroom1.jpg",
					img2 : "/photos/edited/level 2/bathroom1.jpg",
					img3 : "/photos/edited/level 3/bathroom1.jpg"
				},
				Bath2 : {
					img :"/photos/edited/normal/bathroom2.jpg",
					img2 : "/photos/edited/level 2/bathroom2.jpg",
					img3 : "/photos/edited/level 3/bathroom2.jpg"
				},
				Bath3 : {
					img :"/photos/edited/normal/bathroom3.jpg",
					img2 : "/photos/edited/level 2/bathroom3.jpg",
					img3 : "/photos/edited/level 3/bathroom3.jpg"
				},
				BedHall : {
					img :"/photos/edited/normal/bedroomhall.jpg",
					img2 : "/photos/edited/level 2/bedroomhall.jpg",
					img3 : "/photos/edited/level 3/bedroomhall.jpg"
				},
				BedHallFromBath : {
					img :"/photos/edited/normal/bedroomhallfrombath.jpg",
					img2 : "/photos/edited/level 2/bedroomhallfrombath.jpg",
					img3 : "/photos/edited/level 3/bedroomhallfrombath.jpg"
				},
				EntertainBath : {
					img :"/photos/edited/normal/bathfromentertain.jpg",
					img2 : "/photos/edited/level 2/bathfromentertain.jpg",
					img3 : "/photos/edited/level 3/bathfromentertain.jpg"
				},
				Entertain : {
					img :"/photos/edited/normal/entertainroom.jpg",
					img2 : "/photos/edited/level 2/entertainroom.jpg",
					img3 : "/photos/edited/level 3/entertainroom.jpg"
				},
				Guest : {
					img :"/photos/edited/normal/guestbedroomfrombath.jpg",
					img2 : "/photos/edited/level 2/guestbedroomfrombath.jpg",
					img3 : "/photos/edited/level 3/guestbedroomfrombath.jpg"
				},
				GuestFromHall : {
					img :"/photos/edited/normal/guestfromhall.jpg",
					img2 : "/photos/edited/level 2/guestfromhall.jpg",
					img3 : "/photos/edited/level 3/guestfromhall.jpg"
				},
				HallFromUpstairs : {
					img :"/photos/edited/normal/hallfromupstairs.jpg",
					img2 : "/photos/edited/level 2/hallfromupstairs.jpg",
					img3 : "/photos/edited/level 3/hallfromupstairs.jpg"
				},
				LivingFromSide : {
					img :"/photos/edited/normal/livingfromside.jpg",
					img2 : "/photos/edited/level 2/livingfromside.jpg",
					img3 : "/photos/edited/level 3/livingfromside.jpg"
				},
				Office : {
					img :"/photos/edited/normal/office.jpg",
					img2 : "/photos/edited/level 2/office.jpg",
					img3 : "/photos/edited/level 3/office.jpg"
				},
				SideFromOffice : {
					img :"/photos/edited/normal/sidefromoffice.jpg",
					img2 : "/photos/edited/level 2/sidefromoffice.jpg",
					img3 : "/photos/edited/level 3/sidefromoffice.jpg"
				},
				SideHall : {
					img :"/photos/edited/normal/sidehall.jpg",
					img2 : "/photos/edited/level 2/sidehall.jpg",
					img3 : "/photos/edited/level 3/sidehall.jpg"
				},
				SinkFromEmpty : {
					img :"/photos/edited/normal/hallfromempty.jpg",
					img2 : "/photos/edited/level 2/hallfromempty.jpg",
					img3 : "/photos/edited/level 3/hallfromempty.jpg"
				},
				BaseFromStairs : {
					img :"/photos/edited/normal/stairstobasement.jpg",
					img2 : "/photos/edited/level 2/stairstobasement.jpg",
					img3 : "/photos/edited/level 3/stairstobasement.jpg"
				},
				StairsFromBase : {
					img :"/photos/edited/normal/stairsfrombasement.jpg",
					img2 : "/photos/edited/level 2/stairsfrombasement.jpg",
					img3 : "/photos/edited/level 3/stairsfrombasement.jpg"
				},
				TopFromBed: {
					img :"/photos/edited/normal/upstairsfrombedroom.jpg",
					img2 : "/photos/edited/level 2/upstairsfrombedroom.jpg",
					img3 : "/photos/edited/level 3/upstairsfrombedroom.jpg"
				},
				UpstairsFromEmpty : {
					img :"/photos/edited/normal/emptytoupstairs.jpg",
					img2 : "/photos/edited/level 2/emptytoupstairs.jpg",
					img3 : "/photos/edited/level 3/emptytoupstairs.jpg"
				},
				UpstairsFromHall : {
					img :"/photos/edited/normal/guesttoupstairs.jpg",
					img2 : "/photos/edited/level 2/guesttoupstairs.jpg",
					img3 : "/photos/edited/level 3/guesttoupstairs.jpg"
				},
				HallFromDoor : {
					img :"/photos/edited/normal/livingfromhall.jpg",
					img2 : "/photos/edited/level 2/livingfromhall.jpg",
					img3 : "/photos/edited/level 3/livingfromhall.jpg"
				},
				UpstairsLeft : {
					img :"/photos/edited/normal/upstairsleft.jpg",
					img2 : "/photos/edited/level 2/upstairsleft.jpg",
					img3 : "/photos/edited/level 3/upstairsleft.jpg"
				},
				HallFromGuest : {
					img :"/photos/edited/normal/hallfromguest.jpg",
					img2 : "/photos/edited/level 2/hallfromguest.jpg",
					img3 : "/photos/edited/level 3/hallfromguest.jpg"
				},
				LookUpstairs : {
					img :"/photos/edited/normal/stairsbottom.jpg",
					img2 : "/photos/edited/level 2/stairsbottom.jpg",
					img3 : "/photos/edited/level 3/stairsbottom.jpg"
				},
				Dining2 : {
					img :"/photos/edited/normal/dining2.jpg",
					img2 : "/photos/edited/level 2/dining2.jpg",
					img3 : "/photos/edited/level 3/dining2.jpg"
				},
				KitchenFromLiving : {
					img :"/photos/edited/normal/kitchenfromliving.jpg",
					img2 : "/photos/edited/level 2/kitchenfromliving.jpg",
					img3 : "/photos/edited/level 3/kitchenfromliving.jpg"
				},
				ViewFromKitchen : {
					img :"/photos/edited/normal/livingfromkitchen.jpg",
					img2 : "/photos/edited/level 2/livingfromkitchen.jpg",
					img3 : "/photos/edited/level 3/livingfromkitchen.jpg"
				},
				SideFromLiving : {
					img :"/photos/edited/normal/sidefromliving.jpg",
					img2 : "/photos/edited/level 2/sidefromliving.jpg",
					img3 : "/photos/edited/level 3/sidefromliving.jpg"
				},
				MainFromLiving : {
					img :"/photos/edited/normal/mainfromliving.jpg",
					img2 : "/photos/edited/level 2/mainfromliving.jpg",
					img3 : "/photos/edited/level 3/mainfromliving.jpg"
				},
				BedFromTop : {
					img :"/photos/edited/normal/bedfromtop.jpg",
					img2 : "/photos/edited/level 2/bedfromtop.jpg",
					img3 : "/photos/edited/level 3/bedfromtop.jpg"
				},
				UpstairsFromTop : {
					img :"/photos/edited/normal/upstairsfromtop.jpg",
					img2 : "/photos/edited/level 2/upstairsfromtop.jpg",
					img3 : "/photos/edited/level 3/upstairsfromtop.jpg"
				},
				EmptyFromUpstairs : {
					img :"/photos/edited/normal/emptyfromupstairs.jpg",
					img2 : "/photos/edited/level 2/emptyfromupstairs.jpg",
					img3 : "/photos/edited/level 3/emptyfromupstairs.jpg"
				},
				GuestFromSink : {
					img :"/photos/edited/normal/guestfromsink.jpg",
					img2 : "/photos/edited/level 2/guestfromsink.jpg",
					img3 : "/photos/edited/level 3/guestfromsink.jpg"
				},
				Sink : {
					img :"/photos/edited/normal/sink.jpg",
					img2 : "/photos/edited/level 2/sink.jpg",
					img3 : "/photos/edited/level 3/sink.jpg"
				},
				EmptyFromSink : {
					img :"/photos/edited/normal/emptyfromsink.jpg",
					img2 : "/photos/edited/level 2/emptyfromsink.jpg",
					img3 : "/photos/edited/level 3/emptyfromsink.jpg"
				},
				SinkFromGuest : {
					img :"/photos/edited/normal/sinkfromguest.jpg",
					img2 : "/photos/edited/level 2/sinkfromguest.jpg",
					img3 : "/photos/edited/level 3/sinkfromguest.jpg"
				},
				EntertainFromHall : {
					img :"/photos/edited/normal/entertainfromhall.jpg",
					img2 : "/photos/edited/level 2/entertainfromhall.jpg",
					img3 : "/photos/edited/level 3/entertainfromhall.jpg"
				},
				HallFromEntertain : {
					img :"/photos/edited/normal/hallfromentertain.jpg",
					img2 : "/photos/edited/level 2/hallfromentertain.jpg",
					img3 : "/photos/edited/level 3/hallfromentertain.jpg"
				},
				ExitBase : {
					img :"/photos/edited/normal/mainfromstairs.jpg",
					img2 : "/photos/edited/level 2/mainfromstairs.jpg",
					img3 : "/photos/edited/level 3/mainfromstairs.jpg"
				},
				Death : {
					img :"/photos/edited/normal/death.jpg",
					img2 : "/photos/edited/level 2/upstairsleft.jpg",
					img3 : "/photos/edited/level 3/upstairsleft.jpg"
				},
				Hide1 : {
					img :"/photos/edited/normal/dininghide.jpg",
					img2 : "/photos/edited/level 2/dininghide.jpg",
					img3 : "/photos/edited/level 3/dininghide.jpg"
				},
				Hide2 : {
					img :"/photos/edited/normal/kitchenhide.jpg",
					img2 : "/photos/edited/level 2/kitchenhide.jpg",
					img3 : "/photos/edited/level 3/kitchenhide.jpg"
				},
				Hide3 : {
					img :"/photos/edited/normal/.jpg",
					img2 : "/photos/edited/level 2/.jpg",
					img3 : "/photos/edited/level 3/.jpg"
				},
				Hide3 : {
					img :"/photos/edited/normal/basehide1.jpg",
					img2 : "/photos/edited/level 2/basehide1.jpg",
					img3 : "/photos/edited/level 3/basehide1.jpg"
				},
				Hide4 : {
					img :"/photos/edited/normal/basehide2.jpg",
					img2 : "/photos/edited/level 2/basehide2.jpg",
					img3 : "/photos/edited/level 3/basehide2.jpg"
				},
				Hide5 : {
					img :"/photos/edited/normal/bedhide1.jpg",
					img2 : "/photos/edited/level 2/bedhide1.jpg",
					img3 : "/photos/edited/level 3/bedhide1.jpg"
				},
				Hide6 : {
					img :"/photos/edited/normal/bedhide2.jpg",
					img2 : "/photos/edited/level 2/bedhide2.jpg",
					img3 : "/photos/edited/level 3/bedhide2.jpg"
				},
				Hide7 : {
					img :"/photos/edited/normal/entertainbathhide.jpg",
					img2 : "/photos/edited/level 2/entertainbathhide.jpg",
					img3 : "/photos/edited/level 3/entertainbathhide.jpg"
				},
				Hide8 : {
					img :"/photos/edited/normal/bath3hide.jpg",
					img2 : "/photos/edited/level 2/bath3hide.jpg",
					img3 : "/photos/edited/level 3/bath3hide.jpg"
				},
				Hide9 : {
					img :"/photos/edited/normal/officehide.jpg",
					img2 : "/photos/edited/level 2/officehide.jpg",
					img3 : "/photos/edited/level 3/officehide.jpg"
				},
				Hide10 : {
					img :"/photos/edited/normal/bath1hide.jpg",
					img2 : "/photos/edited/level 2/bath1hide.jpg",
					img3 : "/photos/edited/level 3/bath1hide.jpg"
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