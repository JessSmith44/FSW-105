var readlineSync = require(`readline-sync`);

var playerName = readlineSync.question("May I have your name please?");

const welcomeMessage = `Welcome, ${playerName} to the Escape Room Game!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuSelection = readlineSync.keyIn('Enter 1 to put hand in hole, Enter 2 to find key, Enter 3 to open door', {limit : '$<1-3>'});
    if (menuSelection == 1){
    console.log(`Oh no, ${playerName}, it appears you have placed your hand in the hole. Unfortunately you are dead. Game over.`);
    isAlive = false;
    } else if (menuSelection == 2 && hasKey == false){
    console.log(`Great job, ${playerName}, you have found the key! Please proceed to the next menu option.`);
    hasKey = true;
    } else if (menuSelection == 2 && hasKey == true){
    console.log(`${playerName}, you have already found the key. Please proceed to the next menu option`);
    } else if (menuSelection == 3 && hasKey == false){
    console.log(`Oh no, ${playerName}, you do not have the key to the door. Please find the key to exit.`);
    } else if (menuSelection == 3 && hasKey == true){
    console.log(`Great job ${playerName}! You can successfully open the exit door now.`);
    console.log(`Congratulations ${playerName}, you have escaped the room! Great job!`);
    isAlive = false;
    }
}