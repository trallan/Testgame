let game = document.querySelector('.game');
let characterName;
let characterGender;
let characterClass;
let newPlayer;

class Player{
    constructor(name, gender, role, health, level, exp, attack){
        this.name = name;
        this.gender = gender;
        this.role = role;
        this.health = health;
        this.level = level;
        this.exp = exp;
        this.attack = attack;
    }
}

let createCharacterPanel = () => {
    game.innerHTML += `
    <div class="create-character-panel">
        <h2>Create a character</h2>
        <div class="name">
            <p>Choose a name</p>
            <input type="text" id="character-name">
        </div>
        <div class="gender">
            <p>Choose a gender</p>
            <input type="checkbox" id="male-check" value="male">
            <label for="male-check">Male</label>
            <input type="checkbox" id="female-check" value="female">
            <label for="male-check">Female</label>
        </div>
        <div class="class">
            <p>Choose a class</p>
            <input type="checkbox" class="class-check" id="knight-check" value="knight">
            <label for="class-check">Knight</label>
            <input type="checkbox" class="class-check" id="archer-check" value="Archer">
            <label for="class-check">Archer</label>
            <input type="checkbox" class="class-check" id="mage-check" value="Mage">
            <label for="class-check">Mage</label>
        </div>
        <button id="create-ch-btn" onclick="createCharacter()">Create character</button>
    </div>
    `
}

let showCharacterScreen = () => {
    game.innerHTML += `
        <div class="character-screen">
            <div id="ch-name"><h3>${newPlayer.name}</h3></div>
            <div id="ch-gender">Gender: ${newPlayer.gender}</div>
            <div id="ch-role">Class: ${newPlayer.role}</div>
            <div id="ch-health">Health: ${newPlayer.health}</div>
            <div id="ch-level">Level: ${newPlayer.level}</div>
            <div id="ch-exp">Exp: ${newPlayer.exp}</div>
            <div id="ch-attack">Attack: ${newPlayer.attack}</div>
        </div>
    `
}


let createCharacter = () => {
    let characterPanel = document.querySelector(".create-character-panel");
    let characterNameVal = document.querySelector('#character-name').value
    let maleCheck = document.querySelector('#male-check').checked;
    let femaleCheck = document.querySelector('#female-check').checked;
    if(maleCheck == true && femaleCheck == true){
        return
    }

    let knightCheck = document.querySelector('#knight-check').checked;
    let archerCheck = document.querySelector('#archer-check').checked;
    let mageCheck = document.querySelector('#mage-check').checked;
    if(knightCheck == true && mageCheck == true && archerCheck == true
        || maleCheck == false && femaleCheck == false
        || knightCheck == false && mageCheck == true && archerCheck == true 
        || knightCheck == true && mageCheck == false && archerCheck == true 
        || knightCheck == true && mageCheck == true && archerCheck == false
        || knightCheck == true && mageCheck == true && archerCheck == true){
        return
    }
    characterName = characterNameVal;
    if(maleCheck == true){
        characterGender = "Male";
    }else if(femaleCheck == true){
        characterGender = "Female";
    }
    if(knightCheck == true){
        characterClass = "Knight";
    }else if(archerCheck == true){
        characterClass = "Archer";
    }else if(mageCheck == true){
        characterClass = "Mage";
    }
    if(characterClass == "Knight"){
        newPlayer = new Player(characterName, characterGender, characterClass, 250, 1, 0, 5)
    }else if(characterClass == "Archer"){
        newPlayer = new Player(characterName, characterGender, characterClass, 150, 1, 0, 10)
    }else if(characterClass == "Mage"){
        newPlayer = new Player(characterName, characterGender, characterClass, 100, 1, 0, 15)
    }
    characterPanel.remove();
    showCharacterScreen();
}


createCharacterPanel();

