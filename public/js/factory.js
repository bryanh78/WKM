angular.module("game")
	.factory("scaryFactor", 
		[function(){

var screen = {
				mainScreen : {
					img : "http://vignette2.wikia.nocookie.net/creepypasta/images/0/01/Creepy_house-wallpaper-1600x900.jpg/revision/latest?cb=20121007054213"
				},
				Door : {
					img : "../photos/edited/normal/door.jpg",
					img2 : "../photos/edited/level 2/door.jpg",
					img3 : "../photos/edited/level 3/door.jpg"
				},
				MainHall : {
					img : "../photos/edited/normal/mainhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				HallFromLiving : {
					img : "../photos/edited/normal/mainhallfromliving.jpg",
					img2 : "../photos/edited/level 2/mainhallfromliving.jpg",
					img3 : "../photos/edited/level 3/mainhallfromliving.jpg"
				},
				
				Kitchen : {
					img : "../photos/edited/normal/kitchen.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Kitchen2 : {
					img : "../photos/edited/normal/kitchen2.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				StairsTop : {
					img :"../photos/edited/normal/stairstop.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				StairsFromTop : {
					img :"../photos/edited/normal/stairsfromtop.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Dining : {
					img :"../photos/edited/normal/dining.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Living : {
					img :"../photos/edited/normal/livingroom.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Base : {
					img :"../photos/edited/normal/basement.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Dark : {
					img :"../photos/edited/normal/darkroomL.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				DarkDoor : {
					img :"../photos/edited/normal/darkdoor.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				TopFromUpstairs : {
					img :"../photos/edited/normal/upstairsfromhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Bed : {
					img :"../photos/edited/normal/bedroom.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Empty : {
					img :"../photos/edited/normal/empty.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				DarkLeft : {
					img :"../photos/edited/normal/darkroom2L.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				DarkRight : {
					img :"../photos/edited/normal/darkroom3L.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				DarkFound : {
					img :"../photos/edited/normal/darkroomfound.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BaseFrom2 : {
					img :"../photos/edited/normal/basefrom2.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BaseFromDark : {
					img :"../photos/edited/normal/basefromdark.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Base2 : {
					img :"../photos/edited/normal/basement2.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BaseDoor : {
					img :"../photos/edited/normal/basementdoor.jpg",
					img2 : "../photos/edited/level 2/basementdoor.jpg",
					img3 : "../photos/edited/level 3/basementdoor.jpg",
				},
				Bath3Hide : {
					img :"../photos/edited/normal/bath3hide.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Bath1 : {
					img :"../photos/edited/normal/bathroom1.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Bath2 : {
					img :"../photos/edited/normal/bathroom2.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Bath3 : {
					img :"../photos/edited/normal/bathroom3.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BedHall : {
					img :"../photos/edited/normal/bedroomhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BedHallFromBath : {
					img :"../photos/edited/normal/bedroomhallfrombath.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				EntertainBath : {
					img :"../photos/edited/normal/bathfromentertain.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				EntertainBathHide : {
					img :"../photos/edited/normal/entertainbathhide.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Entertain : {
					img :"../photos/edited/normal/entertainroom.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Guest : {
					img :"../photos/edited/normal/guestbedroomfrombath.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				GuestFromHall : {
					img :"../photos/edited/normal/guestfromhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				HallFromUpstairs : {
					img :"../photos/edited/normal/hallfromupstairs.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				LivingFromSide : {
					img :"../photos/edited/normal/livingfromside.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Office : {
					img :"../photos/edited/normal/office.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				SideFromOffice : {
					img :"../photos/edited/normal/sidefromoffice.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				SideHall : {
					img :"../photos/edited/normal/sidehall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				SinkFromEmpty : {
					img :"../photos/edited/normal/hallfromempty.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BaseFromStairs : {
					img :"../photos/edited/normal/stairstobasement.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				StairsFromBase : {
					img :"../photos/edited/normal/stairsfrombasement.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				TopFromBed: {
					img :"../photos/edited/normal/upstairsfrombedroom.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsFromEmpty : {
					img :"../photos/edited/normal/emptytoupstairs.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsFromHall : {
					img :"../photos/edited/normal/guesttoupstairs.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				HallFromDoor : {
					img :"../photos/edited/normal/livingfromhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				HallFromGuest : {
					img :"../photos/edited/normal/hallfromguest.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				LookUpstairs : {
					img :"../photos/edited/normal/stairsbottom.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Dining2 : {
					img :"../photos/edited/normal/dining2.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				KitchenFromLiving : {
					img :"../photos/edited/normal/kitchenfromliving.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				ViewFromKitchen : {
					img :"../photos/edited/normal/livingfromkitchen.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				SideFromLiving : {
					img :"../photos/edited/normal/sidefromliving.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				MainFromLiving : {
					img :"../photos/edited/normal/mainfromliving.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				BedFromTop : {
					img :"../photos/edited/normal/bedfromtop.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsFromTop : {
					img :"../photos/edited/normal/upstairsfromtop.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				EmptyFromUpstairs : {
					img :"../photos/edited/normal/emptyfromupstairs.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				GuestFromSink : {
					img :"../photos/edited/normal/guestfromsink.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				Sink : {
					img :"../photos/edited/normal/sink.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				EmptyFromSink : {
					img :"../photos/edited/normal/emptyfromsink.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				SinkFromGuest : {
					img :"../photos/edited/normal/sinkfromguest.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				EntertainFromHall : {
					img :"../photos/edited/normal/entertainfromhall.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				HallFromEntertain : {
					img :"../photos/edited/normal/hallfromentertain.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				ExitBase : {
					img :"../photos/edited/normal/mainfromstairs.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
				},
				UpstairsLeft : {
					img :"../photos/edited/normal/upstairsleft.jpg",
					img2 : "../photos/edited/level 2/mainhall.jpg",
					img3 : "../photos/edited/level 3/mainhall.jpg"
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
					code : [],
					description : "hello",
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
				teddyBear : {
					name : "Teddy Bear",
					holding : true,
					description : "-An old bear being held together by a few strings and what appears to be dried blood. Why do I wnat this?-"
				},
				bottle : {
					name : "Aged Wine",
					holding : true,
					description : "-An old bear being held together by a few strings and what appears to be dried blood. Why do I wnat this?-"
				}
			}

			return {
				screen : screen,
				items : items
			}

		}])