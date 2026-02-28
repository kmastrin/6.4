const character = {
    name: "Nier",
    age: "20",
    weapon: "Sword",
    friends: ["Emil", "Kaine", "Grimoire Weiss"], // Array

    sayName: function() {
        console.log(this.name);
    } // Object Method
}
character.sayName();

function sayAge() {
    console.log("He is " + this.age + " years old.");
}
sayAge.call(character);

Array.isArray(character.friends); // Array Method