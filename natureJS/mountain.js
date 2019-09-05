function mountainStatsMaker(mapTileId){

    var firstMountainName = ["The", ""]
    var secondMountainName = [
        "Tall",
        "High",
        "Pointy",
        "Mount",
        "Saint"
    ]
    var thirdMountainName = [
        "Mountain",
        "Rock",
        "Peak",
        "Top"
    ]

    var mountainType = 0;

    var type0Chance = 15; //grå
    var type1Chance = 8; //brun
    var type2Chance = 3; //fugl
    var type3Chance = 2; //grotte
    var type4Chance = 0.5; //hodeskalle

    var randomNum = (Math.random()*(type0Chance+type1Chance+type2Chance+type3Chance+type4Chance));
    if(randomNum <= type0Chance){
        mountainType = 0;
    } else if(randomNum <= (type1Chance+type0Chance)){
        mountainType = 1;
    } else if(randomNum <= (type2Chance+type1Chance+type0Chance)){
        mountainType = 2
    } else if(randomNum <= (type3Chance+type2Chance+type1Chance+type0Chance)){
        mountainType = 3;
    } else{
        mountainType = 4;
    }

    var extraFood = 0;
    var mountainAnimation = false;
    var mountainAnimationFrames = 10;
    var mountainStartFrame = 0;

    if(mountainType === 2){
        mountainAnimation = true;
        mountainAnimationFrames = 10;
        mountainStartFrame = Math.floor(Math.random()*mountainAnimationFrames);
        extraFood = 5;
    }
    if(mountainType === 4){
        mountainAnimation = true;
        mountainAnimationFrames = 3;
        mountainStartFrame = Math.floor(Math.random()*mountainAnimationFrames);
        secondMountainName = ["Skull", "Danger"];
    }
    var mountainName = firstMountainName[Math.floor(Math.random()*2)] + " " + secondMountainName[Math.floor(Math.random()*secondMountainName.length)] + " " + thirdMountainName[Math.floor(Math.random()*thirdMountainName.length)];
    var mountain = new NatureClass(
        natureId, //id
        mapTileId, //mapTile
        mountainType, //type
        mountainAnimation, //animation
        Math.floor(Math.random()*2)+2+extraFood, //food
        0, //wood
        8, //stone
        0, //gold
        mountainName, //name
        0, //tier
        0, //biome
        1, //season
        mountainStartFrame, //frame
        mountainAnimationFrames, //maxFrames
        true //nightAnimation
    )
    nature.push(mountain);
    natureId++;
}