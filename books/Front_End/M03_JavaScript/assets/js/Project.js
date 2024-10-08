/* Game Functions */

// function to generate a random unmeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// function to check if player wants to fight or skip
var fightOrSkip = function() {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // validate prompt answer
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");

        return fightOrSkip();
    }

    // convert promptFight to all lowercase so we check with less options
    promptFight = promptFight.toLocaleLowerCase();

    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

            playerInfo.money = Math.max(0, playerInfo.money - 10);
            // stop while() loop using break; and enter next fight

            // return true if player wants to leave
            return true;
        }
    }
    return false;
}

// fight function (now with paremeter for enemy's name)
var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;

    // randomly change trun order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
                // if true, leave fight by breaking loop
                break;
            }

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
            );

            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + ' has died!');

                playerInfo.money = playerInfo.money + 20;

                break;
            } else {
                window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
            } 
        } else {
            // remove players's health by subtracting the amount set in the enemy.attack varible
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health reaminig.'
            );

            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + ' has died!');
                // leave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
};

var startGame = function() {
    // reset player stats
    playerInfo.reset()

    // fight each enemy roboto by looping over them and fightinig them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        // check player stats
        console.log(playerInfo);


        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
            var pickedEnemyObj = enemyInfo [i];
    
            pickedEnemyObj.health = randomNumber(40, 60);
    
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }
    
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }

    endGame();
};


var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    var highScore = localStorage.getItem("highScore");
    if (highScore === null) {
        highScore = 0;
    }


    if (playerInfo.money > highScore) {
        localStorage.setItem("highScore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
};

// go to shop between battles function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert('Leaving the store.');
        
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
};

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is" + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 30,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 30;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!")
        }
    }
};

var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
    },
];

// start first game when page loads
startGame();