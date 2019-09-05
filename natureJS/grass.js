var natureId = 0;

var firstGrassName = ["The", ""]
var secondGrassName = [
    "Old",
    "Green",
    "Gray",
    "Plain",
    "Far",
    "White",
    "Golden",
    "Calm",
    "Windy",
    "Grassy",
    "High",
    "Vegitation"
]
var thirdGrassName = [
    "Plain",
    "Plains",
    "Grassland",
    "Grasslands",
    "Field",
    "Fields"
]

function grassStatsMaker(mapTileId){
    var grassName = (firstGrassName[(Math.floor(Math.random()*2))] + " " + secondGrassName[(Math.floor(Math.random()*secondGrassName.length))] + " " + thirdGrassName[(Math.floor(Math.random()*thirdGrassName.length))]);
    var grass = new NatureClass(
        natureId, //id
        mapTileId, //mapTile
		Math.floor(Math.random()*2), //type
		false, //animation
        (Math.floor(Math.random()*6)+6), //food
        0, //wood
        0, //stone
        0, //gold
		grassName, //name
		0, //tier
		0, //biome
        1, //season
        0, //frame
        0, //maxFrames
        true //nightAnimation
    )
    nature.push(grass);
    natureId++;
}