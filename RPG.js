var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please? ");
const welcomeMessage = ("Welcome, " + playerName + " Shadow hunter, to Thelariea Cadrasia!");
console.log(welcomeMessage);
var enemy = [" Man-eater ", " Turagi ", " Leviathan ", " Blue cheese "];
let enemyHealth = 50;
var loot = ["Axe", " Trident ", " First Blade ", " Flame Thrower "];
let prize = [];1
let playerHealth = 40;
var options = ["Walk", "Exit", "Print"];
let pickUp = loot[Math.floor(Math.random() * loot.length)];
function game(){
    const attack = Math.floor(Math.random() * (6 - 4 + 1) + 3);
    const enemies = enemy[Math.floor(Math.random() * enemy.length)];
    const enemyAttack = Math.floor(Math.random() * (3 + 7 - 4) + 2);
    const index = readlineSync.keyInSelect(options, "What would you like to do next?");
    if (options[index] == "Exit"){
        console.log (`${playerName} has Abadndoned the game`);
        return playerHealth = 0;
    }   
    else if (options [index] == "Print") {
        console.log("Player Name: " + playerName + ' \n' + "Health points " + playerHealth +  " \nloot:" + pickUp);
    }   
    else if (options[index] == "Walk") {
        let key = Math.random();
        if (key < .3){
        console.log("Walking...");
        }  
        else if (key >= .3){
            console.log(enemies + "Has appeared!");
            while (enemyHealth > 0 && playerHealth > 0){
                const user = readlineSync.question("How do you wish to proceed? Press 'r' to run, push 'a' to attack.");
                    switch (user){
                        case 'r':
                            const run = Math.random();
                            if (run < .5){
                                console.log(playerName + ",  You have been attacked in your attempt to escape!");
                            }               
                            else {
                                console.log("You have escaped!");
                                break;
                            }
                        case 'a':
                            enemyHealth -= attack;
                            console.log("You attacked" + enemies + ", With " + attack + " power!");
                            playerHealth -= enemyAttack;
                            console.log(enemies + "attacked you with " + enemyAttack + "power!");
                            if (enemyHealth <= 0){
                                console.log("You have defeated " + enemies + '.\n' + enemies + " left " + pickUp);
                                let loot = Math.random();
                                if (loot <= .3){
                                prize.push(loot);
                            }
                            } 
                            else if (playerHealth <= 0){
                               console.log(enemies + " has defeated you! Game over!")
                            }
                            }   
                    }
            }
        }
    }
while(playerHealth > 0) {
   
    game();
} 

/* playerHealing = function(){
        playerAlive = true;
        playerHealth = 40
    }
    playerHealing(0); */