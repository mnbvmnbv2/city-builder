function stoneStatsMaker(mapTileId){

    var firstStoneName = ["The", ""];
    var secondStoneName = [
        "Gray",
        "Big",
        "Black",
        "White",
        "Rocky",
        "Sharp"
    ];
    var thirdStoneName = [
        "Rocks",
        "Stones",
        "Rumble"
    ];

    var stoneType = 0;

    var type0Chance = 15; //mørk
    var type1Chance = 8; //lys
    var type2Chance = 0.2; //meteor
    var type3Chance = 3; // spiss stein
    var type4Chance = 0; //

    var randomNum = (Math.random()*(type0Chance+type1Chance+type2Chance+type3Chance+type4Chance));
    if(randomNum <= type0Chance){
        stoneType = 0;
    } else if(randomNum <= (type1Chance+type0Chance)){
        stoneType = 1;
    } else if(randomNum <= (type2Chance+type1Chance+type0Chance)){
        stoneType = 2
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance)){
        stoneType = 3;
    } else{
        stoneType = 4;
    }

    if(stoneType === 2){
        secondStoneName = ["Meteor", "Alien", "Meteorite"];
    }

    var stoneName = firstStoneName[Math.floor(Math.random()*2)] + " " + secondStoneName[Math.floor(Math.random()*secondStoneName.length)] + " " + thirdStoneName[Math.floor(Math.random()*thirdStoneName.length)];
    var stone = new NatureClass(
        natureId, //id
        mapTileId, //mapTile
        stoneType, //type
        false, //animation
        Math.floor(Math.random()*2)+4, //food
        0, //wood
        4, //stone
        0, //gold
        stoneName, //name
        0, //tier
        0, //biome
        1, //season
        0, //frame
        0, //maxFrames
        true //nightAnimation
    )
    nature.push(stone);
    natureId++;
}