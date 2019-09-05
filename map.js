//-------------------MAP-OG-OVERLAY------------------------
var gameEl = document.getElementById("game");

class NatureClass {
	constructor(id, mapTile, type, animation, food, wood, stone, gold, name, tier, biome, season, frame, maxFrames, nightAnimation){
		this.id = id;
		this.mapTile = mapTile;
		this.type = type;
		this.animation = animation;
		this.food = food;
		this.wood = wood;
		this.stone = stone;
		this.gold = gold;
		this.name = name;
		this.tier = tier;
		this.biome = biome;
		this.season = season;
		this.frame = frame;
		this.maxFrames = maxFrames;
		this.nightAnimation = nightAnimation;
	}
}

var nature = [];

var map = [];


var lakeChance = Math.floor(Math.random()*10)+3;
var mountainChance = Math.floor(Math.random()*15)+5;
var forestChance = Math.floor(Math.random()*25)+15;
var stoneChance = Math.floor(Math.random()*12)+7;
var grassChance = Math.floor(Math.random()*35)+20;

/*
var lakeChance = 12;
var mountainChance = 2;
var forestChance = 6;
var stoneChance = 4;
var grassChance = 10;
*/

for(var i = 0; i < 570; i++){
	var randomNum = (Math.random()*(lakeChance+mountainChance+forestChance+stoneChance+grassChance));
	var theTile = 0;
	console.log(randomNum);
	if(randomNum <= lakeChance){
		theTile = 2;
	} else if(randomNum <= (stoneChance+lakeChance)){
		theTile = 4;
	} else if(randomNum <= (mountainChance+stoneChance+lakeChance)){
		theTile = 3
	} else if(randomNum <= (forestChance+mountainChance+stoneChance+lakeChance)){
		theTile = 1;
	} else{
		theTile = 0;
	}
	map.push(theTile);
	if(theTile === 0){
		grassStatsMaker(i); //natureJS/grass.js
	} else if(theTile === 1){
		forestStatsMaker(i); //natureJS/forest.js
	} else if(theTile === 2){
		lakeStatsMaker(i) //natureJS/lake.js
	} else if(theTile === 3){
		mountainStatsMaker(i) //natureJS/mountain.js
	} else if(theTile === 4){
		stoneStatsMaker(i) //natureJS/stone.js
	}
}

var vinduEl = document.getElementById("vindu");
	
for(var i = 0; i < map.length; i++){
	var clickable = document.createElement("div");
	clickable.classList.add("overlayBlock");
	clickable.id = i;
	clickable.addEventListener("click", selected);
    clickable.addEventListener("mouseenter", buildHover);
    clickable.style.opacity = 0;
	vinduEl.appendChild(clickable);
}

var theList = document.querySelectorAll(".overlayBlock");

//--------------------TILES-------------------------------

var tiles = {
    0 : "grass",
    1 : "forest",
    2 : "lake",
    3 : "mountain",
    4 : "stone",
    100 : "house",
    200 : "farm",
    700 : ["700", "700"],
    701 : ["701", "701"],
    702 : ["702", "702"],
    703 : ["703", "703"],
    704 : ["704", "704"]
};

function animations(){
	for(var i = 0; i < nature.length; i++){
		if(nature[i].animation === true){
			if(nature[i].nightAnimation === false && nature[i].animation === true && time != 0){
				nature[i].frame = 0;
			} else{
				nature[i].frame++;
				if(nature[i].frame > nature[i].maxFrames){
					nature[i].frame = 0;
				}
			}
		}
	}
}
setInterval(animations, 150);

var timeCycle = false;
var timeButtonEl = document.getElementById("timeButton")
timeButtonEl.addEventListener("click", activateDayNight)

function activateDayNight(){
	if(timeCycle === false){
		timeCycle = true;
	} else {
		timeCycle = false;
	}
}

var time = 0;
var timeTick = 0;
var day = 350;
var sunset = 100;
var night = 250;
var dawn = 100;

function landscapeTime(){
	if(timeCycle === true){
		timeTick++;
	}

	if(timeTick === day){
		for(var i = 0; i < nature.length; i++){
			if(nature[i].nightAnimation === false && nature[i].animation === true && time != 0){
				nature[i].frame = 0;
			}
		}
		time++;
		betweenTime();
	} else if(timeTick === day+sunset){
		time++;
		betweenTime();
	} else if(timeTick === day+sunset+night){
		time++;
		betweenTime();
	} else if(timeTick === day+sunset+night+dawn){
		time++;
		betweenTime();
	}
	requestAnimationFrame(landscapeTime)
}
landscapeTime();

function betweenTime(){
	setTimeout(function(){ time+=1;if(time == 8){
		time = 0;
		timeTick = 0;
	};}, 1000)
}

var x = 0;
var y = 0;

var tileNumber = 0;
var tilePic;

var gameWidth = 38;

drawGame();
function drawGame(){
	var ctx = gameEl.getContext("2d");
	
	x = 0;
	y = 0;

	houseNumber = 0;

	for(var i = 0; i < map.length; i++){

		tilePic = document.createElement("img");
		
			tilePic.src = "bilder/" + 
			tiles[map[i]] + "/" + 
			[nature[i].type] + 
			[nature[i].season] + 
			[nature[i].frame] +
			time +  ".png";

		if(map[i] === 100){

			for(var j = 0; j < buildings.house.length; j++){
				if(buildings.house[j].mapTile === i){
					houseNumber = j;
				}
			}
			tilePic.src = "bilder/" + tiles[map[i]] + 
			"/" + [buildings.house[houseNumber].type] + 
			 [buildings.house[houseNumber].season] + 
			 [buildings.house[houseNumber].frame] +
			 time + ".png";
		}

		ctx.drawImage(tilePic, x, y, 50, 50)

		x += 50;
		if(x >= (gameWidth * 50)){
			x = 0;
			y += 50;
		}
		if(y >= 1200){
			y = 0;
		}
	}
requestAnimationFrame(drawGame);
}