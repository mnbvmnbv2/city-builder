function lakeStatsMaker(mapTileId){

    var firstLakeName = ["The", ""]
    var secondLakeName = [
        "Old",
        "Deep",
        "Shallow",
        "Wet",
        "Blue",
        "Green",
        "Dangerous",
        "Stormy",
        "Calm",
        "Big"
    ]
    var thirdLakeName = [
        "Lake",
        "Swamp",
        "Sea",
        "Pond",
        "Marsh",
        "Water",
        "Waters",
        "Springs"
    ]

    var lakeType = 0;

    var type0Chance = 15; //sea
    var type1Chance = 8; //dickbutt
    var type2Chance = 3; //beach
    var type3Chance = 1; //island
    var type4Chance = 0.5; //fugl

    var randomNum = (Math.random()*(type0Chance+type1Chance+type2Chance+type3Chance+type4Chance));
    if(randomNum <= type0Chance){
        lakeType = 0;
    } else if(randomNum <= (type1Chance+type0Chance)){
        lakeType = 1;
    } else if(randomNum <= (type2Chance+type1Chance+type0Chance)){
        lakeType = 2
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance)){
        lakeType = 3;
    } else{
        lakeType = 4;
    }

    var lakeAnimation = true;
    var lakeAnimationFrames = 3;
    var lakeStartFrame = Math.floor(Math.random()*lakeAnimationFrames);
    if(lakeType === 4){
        lakeAnimationFrames = 7;
        lakeStartFrame = Math.floor(Math.random()*lakeAnimationFrames);
    } else if(lakeType === 3){
        secondLakeName = ["Paradise", "Island"];
    }
    var lakeName = firstLakeName[Math.floor(Math.random()*2)] + " " + secondLakeName[Math.floor(Math.random()*secondLakeName.length)] + " " + thirdLakeName[Math.floor(Math.random()*thirdLakeName.length)];
    var lake = new NatureClass(
        natureId, //id
        mapTileId, //mapTile
        lakeType, //type
        lakeAnimation, //animation
        Math.floor(Math.random()*8)+10, //food
        0, //wood
        0, //stone
        0, //gold
        lakeName, //name
        0, //tier
        0, //biome
        1, //season
        lakeStartFrame, //frame
        lakeAnimationFrames, //maxFrames
        false //nightAnimation
    )
    nature.push(lake);
    natureId++;
}