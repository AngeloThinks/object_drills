let newline = (s) => {
    console.log(`\n\nPart ${s}\n`)
}

newline(1)

let loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        return this.water/this.flour*100    
    },
}
console.log(loaf.flour, loaf.water)
console.log(loaf.hydration())


newline(2)

let newObject = {
    foo: 75,
    bar: "green",
    fum: "Houston",
    quux: "giraffe",
    spam: "kickflip",
}

for (let key in newObject ){
    console.log(key, newObject[key])
}

newline(3)

let food = {
    meals: ["breakfast", "second breakfast", "elevenses", "lunch", "afternoon tea", "dinner", "supper"]
}

console.log(food.meals[3])

newline(4)

let obj1 = {
    name: "Bob",
    jobTitle: "Janitor",
    boss: "Sue",

}

let obj2 = {
    name: "Joe",
    jobTitle: "Salesman",
    boss: "Sue",

}

let obj3 = {
    name: "Sue",
    jobTitle: "CEO",
    
}

let consolidated = [obj1, obj2, obj3]

for (let i=0; i<consolidated.length; i++){
    console.log(consolidated[i].name, consolidated[i].jobTitle)
}

newline(5)

for (let i=0; i<consolidated.length; i++){
    if ("boss" in consolidated[i]){
        console.log(`${consolidated[i].jobTitle} ${consolidated[i].name} reports to ${consolidated[i].boss}`)
    }
    else{
        console.log(`${consolidated[i].jobTitle} ${consolidated[i].name} doesn't report to anybody`)

    }
}


newline(6)

let cipher = {
   
    a: 2,
    b: 3,
    c: 4,
    d: 5,

   } 

function decode (str){
    if (str[0] in cipher){
        return str[cipher[str[0]]-1]
    }
}

function decodeWords (str){
    let words = str.split(" ")
    let decoded = ""
    for (let word of words){
        decoded += decode(word)
    }
    return decoded
}
console.log(decodeWords ("cycles abide beers doors"))

newline(7)

class createCharacter{

    constructor( data ){
        this.name = data.name;
        this.nickname = data.nickname;
        this.race = data.race;
        this.origin = data.origin;
        this.attack = data.attack;
        this.defense = data.defense;
    }
    
    describe(){
        console.log( `${this.name} is a ${this.race} from ${this.origin}.` );
    }
    
    evaluateFight( charObj ){
        return `Your opponent takes ${(this.attack > charObj.defense) ? this.attack - charObj.defense : 0} damage and you receive ${(charObj.attack > this.defense) ? charObj.attack - this.defense : 0} damage`
    }
 
}

let characters = [
    new createCharacter( {

        name: 'Gandalf the White',
        nickname: 'gandalf',
        race: 'Wizard',
        origin: 'Middle Earth',
        attack: 10,
        defense: 6
    } ),
    new createCharacter( {

        name: 'Bilbo Baggins',
        nickname: 'bilbo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 2,
        defense: 1
    } ),
    new createCharacter( {

        name: 'Frodo Baggins',
        nickname: 'frodo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 3,
        defense: 2
    } ),
    new createCharacter( {

        name: 'Aragon son of Arathorn',
        nickname: 'aragorn',
        race: 'Man',
        origin: 'Dunnedain',
        attack: 6,
        defense: 8
    } ),
    new createCharacter( {

        name: 'Legolas',
        nickname: 'legolas',
        race: 'Elf',
        origin: 'Woodland Realm',
        attack: 8,
        defense: 5
    } ),
    new createCharacter( {

        name: 'Arwen Undomiel',
        nickname: 'arwen',
        race: 'Half-Elf',
        origin: 'Rivendell',
        attack: 2,
        defense: 2
    } )
]

characters.find( c => c.nickname === 'aragorn' ).describe( );

let hobbits = characters.filter( c => c.race === 'Hobbit' );

let attackers = characters.filter( c => c.attack > 5 );


createCharacter.prototype.equipWeapon = function( weapon ){

    this.weapon = weapon;
    return this;
}

createCharacter.prototype.describe = function(){

    console.log( `${this.name} is a ${this.race} from ${this.origin} ${ (this.weapon) ? `who uses ${this.weapon}.` : '' }` );
}


characters.find( c => c.nickname === 'gandalf' ).equipWeapon( 'a Wizard Staff' ).describe( );
characters.find( c => c.nickname === 'bilbo' ).equipWeapon( 'the Ring' ).describe( );
characters.find( c => c.nickname === 'frodo' ).equipWeapon( 'Sting and Barrow Blade' ).describe( );
characters.find( c => c.nickname === 'aragorn' ).equipWeapon( 'Anduril' ).describe( );
characters.find( c => c.nickname === 'legolas' ).equipWeapon( 'a Bow and Arrow' ).describe( );
characters.find( c => c.nickname === 'arwen' ).equipWeapon( 'Hadhafang' ).describe( );


newline(8)

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];



function findOne( arr, query ){
    return arr.find( ao => Object.keys( query ).every( key => ao.hasOwnProperty( key ) && query[key] === ao[key] ) ) || null
}

console.log( findOne( HEROES, { id: 1 } ) ); // => { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log( findOne( HEROES, { id: 10 } ) ); // => null

console.log( findOne( HEROES, { id: 2, name: 'Aquaman' } ) ); // => null

console.log( findOne( HEROES, { id: 5, squad: 'Justice League' } ) ); // => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log( findOne( HEROES, { squad: 'Justice League' } ) ); // => { id: 4, name: 'Superman', squad: 'Justice League' }



newline(9)

const Database = {
    store: {
        heroes: [
            { id: 1, name: 'Captain America', squad: 'Avengers' },
            { id: 2, name: 'Iron Man', squad: 'Avengers' },
            { id: 3, name: 'Spiderman', squad: 'Avengers' },
            { id: 4, name: 'Superman', squad: 'Justice League' },
            { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
            { id: 6, name: 'Aquaman', squad: 'Justice League' },
            { id: 7, name: 'Hulk', squad: 'Avengers' },
        ]
    },
    findOne: function( query ){
        return this.store.heroes.find( ao => Object.keys( query ).every( key => ao.hasOwnProperty( key ) && query[key] === ao[key] ) ) || null
    }
};

console.log( Database.findOne( { id: 2 } ) ); // => { id: 2, name: 'Iron Man', squad: 'Avengers' }

