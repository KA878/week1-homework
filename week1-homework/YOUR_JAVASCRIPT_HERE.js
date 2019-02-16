// Write your JS here

const hero = {
    name: 'Superman',
    heroic: true,
    inventory : [],
    health: 10,
    weapon: {
        type: 'EMP',
        damage: 2
    }
};

const hero2 = {
    name: 'Batman',
    heroic: true,
    inventory : [],
    health: 10,
    weapon: {
        type: 'EMP',
        damage: 2
    }
};


function rest(hero) {
    const img = document.getElementById('inn')
    hero.health = 10;
    return hero;
};


let hWeapon = hero.weapon;
let hInv = hero.inventory;    

let hInv2 = hero2.inventory;


function pickUpItem(obj, weap) {
    let objInv = obj.inventory;
    objInv.push(weap);
 }
pickUpItem(hero2, hWeapon);


function equipWeapon(obj) { 
    let obWe = obj.weapon;
    let obIn = hero2.inventory;
    obWe = obIn[0];
    
};
equipWeapon(hero2);


function addWeapon() { 
    const dag = { weapon: {
        type: 'dagger',
        damage: 2
    }}
    hInv2[0] = dag.weapon;
}



function equipHero (obj) { 
     
}
