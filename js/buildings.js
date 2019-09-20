var buildings = {house : [],
    farm : 0,
    castle : 0
}

var randomForename = ["Abe",
                    "Abigail",
                    "Abraham",
                    "Aron",
                    "Adolf",
                    "Abot",
                    "Anton",
                    "Aksel",
                    "Ask",
                    "Anders",
                    "Alvin",
                    "Benjamin",
                    "Bob",
                    "Bent",
                    "Berit",
                    "Clark",
                    "Charlie",
                    "Chris",
                    "Charlotte",
                    "Camilla",
                    "Daniel",
                    "David",
                    "Dorris",
                    "Dude",
                    "Bye Bye",
                    "G'day",
                    "Cya Later",
                    "Howdy",
                    "Eirik",
                    "Erik",
                    "Espen",
                    "Emma",
                    "Emily",
                    "Fabian",
                    "Frank",
                    "Fritjof",
                    "Fiona",
                    "Geir",
                    "Gabriel",
                    "Gustav",
                    "Gilbert",
                    "Gunhild",
                    "Amund",
                    "Hans",
                    "Hanne",
                    "Hanna",
                    "Hilde",
                    "Jens",
                    "James",
                    "Johanna",
                    "Julia",
                    "Ine",
                    "Iver",
                    "Ian",
                    "Kim",
                    "Kasper",
                    "Lukas",
                    "Lily",
                    "Lil'",
                    "Quavert",
                    "William",
                    "Watson",
                    "Richard",
                    "Rebecca",
                    "Tim",
                    "Tara",
                    "Tiffany",
                    "Yammy",
                    "Ulric",
                    "Utstein",
                    "Oliver",
                    "Oda",
                    "Patrik",
                    "Peppa",
                    "Pinky",
                    "Åge",
                    "Åse",
                    "Svein",
                    "Steve",
                    "Silje",
                    "Sara",
                    "Stein",
                    "Surre",
                    "Lima",
                    "Pappa",
                    "Mamma",
                    "Leif",
                    "Øyvind",
                    "Æskild",
                    "Zim",
                    "Xander",
                    "Vilde",
                    "Viktor",
                    "Voldemort",
                    "Nils",
                    "Nadia",
                    "Mons",
                    "Mari",
                    "Mette",
                    "Mikkel",
                    "Gode"
];

var randomSurname = ["Andersen",
                    "Andy",
                    "Betty",
                    "Birch",
                    "Bentingwood",
                    "Bobbington",
                    "Basket",
                    "Cent",
                    "Crick",
                    "Half-door",
                    "Man",
                    "Dude",
                    "Pal",
                    "Smith",
                    "Wooder",
                    "Woody",
                    "Stone",
                    "Mint",
                    "Sabeltann",
                    "Scarred",
                    "Davidson",
                    "Washington",
                    "Haraldsson",
                    "Leifsson",
                    "Hildedottir",
                    "Beritdottir",
                    "Maridottir",
                    "Hannadottir",
                    "Anderson",
                    "Svendsson",
                    "Sjøberg",
                    "Aas",
                    "Fukt",
                    "Dick",
                    "Bukt",
                    "Storstein",
                    "Dalen",
                    "Skredet",
                    "Uagadongabolo",
                    "Appfel",
                    "the Great",
                    "the Coward",
                    "the Stupid",
                    "the Sick",
                    "the Farmer",
                    "the Woodsman",
                    "the Brave",
                    "the Wise",
                    "the Dark",
                    "the Good",
                    "half-son",
                    "half-born",
                    "the Short",
                    "the Crackhead",
                    "the Tiny",
                    "the Tall",
                    "the Grumpy",
                    "the Green",
                    "Purple",
                    "Red",
                    "Blue",
                    "White",
                    "Black",
                    "of the North",
                    "of the Sea",
                    "of the Wood",
                    "of the South",
                    "Pump",
                    "of the Moutains"]

var buildingId = 0;

class BuildingClass {
constructor(id, name, level, room, population, nearby, storage, mapTile, type, season, frame, foodExpenseFrame) {
this.id = id;
this.name = name;
this.level = level;
this.room = room;
this.population = population;
this.nearby = nearby;
this.storage = storage;
this.mapTile = mapTile;
this.type = type;
this.season = season
this.frame = frame;
this.foodExpenseFrame = foodExpenseFrame;

}
    gridCreate() {
        var widthCheker = 0; //for å sjekke på ny linje
        var checkTile = this.mapTile - (gameWidth + 1); //ruten som sjekkes (den første)
        for(var i = 0; i < 8; i++){ //legge til overvåkede ruter (de 8 rundt)

        if(widthCheker === 3){ //hopper ned en linje
            checkTile += gameWidth; //ned 1 linje
            checkTile -= 3; //hopper tilbake til venstre side
            widthCheker = 0; //resetter counten
        }

        if(i === 4){
            checkTile++;
            widthCheker++;
        }

        this.nearby.push(map[checkTile]); //legger til tiletypen i nearby

        widthCheker++; //øker checker
        checkTile++; //øker til neste
        }
    }
    populationFill() {
        for(var i = 0; i < 10; i++){
            this.population.push(randomForename[Math.floor(Math.random()*randomForename.length)] + " " +  randomSurname[Math.floor(Math.random()*randomSurname.length)]);
        }
    }
    foodExpense() {

        var x = 0;
        var y = 0;
        for(var i = 0; i < this.mapTile; i++){
            x += 50;
            if(x >= (gameWidth * 50)){
                x = 0;
                y += 50;
            }
            if(y >= 1200){
                y = 0;
            }
        }
        console.log(this.foodExpenseFrame);

        var ctx = gameEl.getContext("2d");
        ctx.font = "12px Arial";
        ctx.fillText("-" + this.population.length, x+15, y+15-(this.foodExpenseFrame*5))
        this.foodExpenseFrame++;
        if(this.foodExpenseFrame === 5){
            this.foodExpenseFrame = 0;
        }
    }
}