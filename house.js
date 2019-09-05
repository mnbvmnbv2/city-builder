function buyHouse(clickedTile){
    if(stats.gold >= 5 && map[clickedTile] === 0 && stats.wood >= 10 && stats.stone >= 5){
        activeHoverPrevTile = hoverMode;
        stats.gold -= 5;
        stats.wood -= 10;
        stats.stone -= 5;

        //house stats
        var house = new BuildingClass(
            buildingId, //id
            "Small cabin", //name
            1, //level
            10, //room
            [], //population
            [], //nearby
            {gold : 1000, food : 500, wood : 200, stone: 50}, //storage
            clickedTile, //mapId
            Math.floor(Math.random()*2), //type
            1, //season
            0, //frame
            0 //foodExpenseFrame
        )
        house.gridCreate();
        house.populationFill();
        setInterval(house.foodExpense, 200);
        buildings.house.push(house);

        map[clickedTile] = 100;

        buildingId++;
    }
}