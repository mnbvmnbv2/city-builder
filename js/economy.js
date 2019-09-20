var stats = {gold : 20,
			level : 1,
			pop : 0,
			food : 100,
			wood : 10,
			stone : 5}

var statsBarEl = document.getElementById("statsBar");

updater()
function updater(){
	statsBarEl.innerHTML = "<font color='gold'>Peng: " + stats.gold +
	"</font><br>Level: " + stats.level +
	"<br>Population: " + stats.pop +
	"<br>Food: " + stats.food +
	"<br>Wood: " + stats.wood +
	"<br>Stone: " + stats.stone;
	requestAnimationFrame(updater)
}

for(var i = 0; i < theList.length; i++){
	theList[i].addEventListener("click", buy);
}

function buy(e){
	if(Number(hoverMode) === 7 && activeHoverPrevTile === 0 && map[(Number(activeHoverTile)+1)] === 0 && map[(Number(activeHoverTile)+38)] === 0 && map[(Number(activeHoverTile)+39)] === 0){
		activeHoverPrevTile = 701;
		map[(Number(activeHoverTile)+1)] = 702;
		map[(Number(activeHoverTile)+38)] = 703;
		map[(Number(activeHoverTile)+39)] = 704;
	} else if(hoverMode === "buildHouse"){
		buyHouse(activeHoverTile);
	}
}

function population(){
	var popCount = 0;
	for(var i = 0; i < buildings.house.length; i++){
		popCount += buildings.house[i].population.length;
	}
	stats.pop = popCount;
	requestAnimationFrame(population);
}

//-----GOLD-------------------

function goldGather(){
	stats.gold += 1 * (buildings.house.length);

	var goldStorage = 0;
	for(var i = 0; i < buildings.house.length; i++){
		goldStorage += buildings.house[i].storage.gold;
	}

	if(stats.gold > goldStorage){
		stats.gold = goldStorage;
	}
}


//--------FOOOOOOOOOOOOD-----------------
function foodEat(){
	stats.food -= 1 * stats.pop;
}

function foodGather(){
	var foodGat = 0;
	for(var i = 0; i < buildings.house.length; i++){
		for(var j = 0; j < buildings.house[i].nearby.length; j++){
			if(buildings.house[i].nearby[j] === 0){ //grass
				foodGat += 10;
			} else if(buildings.house[i].nearby[j] === 1){ //forest
				foodGat += 8;
			} else if(buildings.house[i].nearby[j] === 2){ //lake
				foodGat += 15;
			} else if(buildings.house[i].nearby[j] === 3){ //mountain
				foodGat += 2;
			} else if(buildings.house[i].nearby[j] === 4){ //stone
				foodGat += 3;
			}
		}
	}
	stats.food += foodGat;

	var foodStorage = 0;
	for(var i = 0; i < buildings.house.length; i++){
		foodStorage += buildings.house[i].storage.food;
	}

	if(stats.food > foodStorage){
		stats.food = foodStorage;
	}
}

//--------WOOOOOOOOOOOOOOOOOOOD-----------------

function woodGather(){
	var woodGat = 0;
	for(var i = 0; i < buildings.house.length; i++){
		for(var j = 0; j < buildings.house[i].nearby.length; j++){
			if(buildings.house[i].nearby[j] === 1){ //forest
				woodGat += 2;
			}
		}
	}
	stats.wood += woodGat;

	var woodStorage = 0;
	for(var i = 0; i < buildings.house.length; i++){
		woodStorage += buildings.house[i].storage.wood;
	}

	if(stats.wood > woodStorage){
		stats.wood = woodStorage;
	}
}

//--------stone-----------------

function stoneGather(){
	var stoneGat = 0;
	for(var i = 0; i < buildings.house.length; i++){
		for(var j = 0; j < buildings.house[i].nearby.length; j++){
			if(buildings.house[i].nearby[j] === 3){ //mountain
				stoneGat += 2;
			} else if(buildings.house[i].nearby[j] === 4){ //stone
				stoneGat += 1;
			}
		}
	}
	stats.stone += stoneGat;

	var stoneStorage = 0;
	for(var i = 0; i < buildings.house.length; i++){
		stoneStorage += buildings.house[i].storage.stone;
	}

	if(stats.stone > stoneStorage){
		stats.stone = stoneStorage;
	}
}

var startButtonEl = document.getElementById("startButton");
startButtonEl.addEventListener("click", startGame)

var gameStarted = false;

function startGame(){
	if(gameStarted === false){
		setInterval(stoneGather, 5000)
		setInterval(foodEat, 1000)
		setInterval(woodGather, 5000)
		setInterval(foodGather, 5000)
		setInterval(goldGather, 5000)
		population()
		gameStarted = true;
	}
}