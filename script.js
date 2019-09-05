var activeHoverTile = -1;
var activeHoverPrevTile = 0;

var activeSelectTile = -1;

var hoverModes = {
	select : "select",
	build : { house : "buildHouse"},
	utility : "axe"
}

var hoverMode = "select";

function selected(e){
	if(hoverMode === "select"){
		if(activeSelectTile === -1){
			theList[e.target.id].style.opacity = 0.3;
			theList[e.target.id].style.backgroundColor = "blue";
			activeSelectTile = e.target.id;
		} else {
			theList[e.target.id].style.opacity = 0.3;
			theList[e.target.id].style.backgroundColor = "blue";
			theList[activeSelectTile].style.opacity = 0;
			theList[activeSelectTile].style.backgroundColor = "none";
			activeSelectTile = e.target.id;
		}
		helpness();
	}
}

var selectButtonEl = document.getElementById("selectButton");
selectButtonEl.addEventListener("click", selectMode);

function selectMode(){
	hoverMode = "select";
	if(activeSelectTile != -1){
		theList[activeSelectTile].style.opacity = 0;
	}
	activeSelectTile = -1;
	if(activeHoverTile > -1){
		theList[activeHoverTile].style.opacity = 0;
		theList[activeHoverTile].removeChild(theList[activeHoverTile].childNodes[0]);
	}
	activeHoverTile = -1;
}

//--------------------------------------------------------------
var buyHouseButtonEl = document.getElementById("buyHouseButton");
buyHouseButtonEl.addEventListener("click", buildMode);

function buildMode(e){
	hoverMode = e.target.name;
	//map[activeHoverTile] = hoverMode;
	if(activeSelectTile != -1){
		theList[activeSelectTile].style.opacity = 0;
		theList[activeSelectTile].style.backgroundColor = "none";
	}
	activeSelectTile = -1;
}

function buildFarmButtonMode(){
	
}

var chopForestButtonEl = document.getElementById("chopForestButton");
chopForestButtonEl.addEventListener("click", chopForestMode);

function chopForestMode(){
	hoverMode = 10;
	map[activeHoverTile] = activeHoverPrevTile;
	map[activeHoverTile] = hoverMode;
	if(activeSelectTile != -1){
		theList[activeSelectTile].style.opacity = 0;
	}
	activeSelectTile = -1;
}

function buildHover(e){
	if(hoverMode != "select"){
		/*if(activeHoverTile >= 0){
			map[activeHoverTile] = activeHoverPrevTile;
		}*/
		if(activeHoverTile > -1){
			theList[activeHoverTile].style.opacity = 0;
			theList[activeHoverTile].removeChild(theList[activeHoverTile].childNodes[0]);
		}
		activeHoverPrevTile = map[activeHoverTile];

		activeHoverTile = e.target.id;

		var img = new Image(50, 50)
		img.src = "bilder/" + hoverMode + ".png";
		theList[e.target.id].appendChild(img);
		theList[e.target.id].style.opacity = 1;
		theList[e.target.id].style.zIndex = 7;
		theList[e.target.id].style.backgroundColor = "none";
	}
}