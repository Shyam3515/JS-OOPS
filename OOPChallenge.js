function Player(name){
    this.name = name;
    this.lvl = 1;
    this.CurrentPoints = 0;
}

Player.prototype.gainXp = function(points){
    this.CurrentPoints += points;

    if(this.CurrentPoints>=10){
        this.CurrentPoints -= 10;
        this.lvl++;
    };
    //this is good example of abstraction for not knowing describe
    console.log( this.describe());
}

Player.prototype.describe = function(){
    return `${this.name} is in level ${this.lvl} with ${this.CurrentPoints} experience points...`;
}

let Player1 = new Player('Shyam');
let Player2 = new Player('Sundar');

Player1.gainXp(5);
Player2.gainXp(7);
Player1.gainXp(3);
Player2.gainXp(2);
Player1.gainXp(8);
Player2.gainXp(4);
// Player1.gainXp(5);
// Player2.gainXp(7);

// console.log( Player1.describe()); this is good example of abstraction for not knowing describe
// console.log( Player2.describe());



