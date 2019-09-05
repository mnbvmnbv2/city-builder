function forestStatsMaker(mapTileId){

    var firstForestName = ["The", ""]
    var secondForestName = [
        "Old",
        "Piney",
        "Birch",
        "Oak",
        "Redwood",
        "Dark",
        "Light",
        "Elven",
        "Dread",
        "Dead"
    ]
    var thirdForestName = [
        "Forest",
        "Forests",
        "Wood",
        "Woods",
        "Trees",
        "Jungle",
        "Palms",
        "Pines"
    ]

    var forestType = 0;

    var type0Chance = 10; //normal
    var type1Chance = 7; //normal2
    var type2Chance = 3; //birch
    var type3Chance = 1; //palms
    var type4Chance = 0; //fruits
    var type5Chance = 0; //pine
    var type6Chance = 0; //pink
    var type7Chance = 0; //golden
    var type8Chance = 0; //rotten

    var randomNum = (Math.random()*(type3Chance+type2Chance+type1Chance+type0Chance+type4Chance+type5Chance+type6Chance+type7Chance+type8Chance));
    if(randomNum <= type0Chance){
        forestType = 0;
    } else if(randomNum <= (type1Chance+type0Chance)){
        forestType = 1;
    } else if(randomNum <= (type2Chance+type1Chance+type0Chance)){
        forestType = 2
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance)){
        forestType = 3;
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance+type4Chance)){
        forestType = 4;
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance+type4Chance+type5Chance)){
        forestType = 5;
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance+type4Chance+type5Chance+type6Chance)){
        forestType = 6;
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance+type4Chance+type5Chance+type6Chance+type7Chance)){
        forestType = 7;
    } else{
        forestType = 8;
    }

    var forestName = firstForestName[Math.floor(Math.random()*2)] + " " + secondForestName[Math.floor(Math.random()*secondForestName.length)] + " " + thirdForestName[Math.floor(Math.random()*thirdForestName.length)];
    var forest = new NatureClass(
        natureId, //id
        mapTileId, //mapTile
        forestType, //type 0-1
        false, //animation
        Math.floor(Math.random()*4)+4, //food
        Math.floor(Math.random()*4)+2, //wood
        0, //stone
        0, //gold
        forestName, //name
        0, //tier
        0, //biome
        1, //season
        0, //frame
        0, //maxFrames
        true //nightAnimation
    )
    nature.push(forest);
    natureId++;
}