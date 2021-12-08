//array
const colors = ["yellow", "blue", "red", "orange"];

// while loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

//for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//array forEach
colors.forEach((color) => console.log(color));

/* 
1. for loop has 3 lines, while loop has 5 lines
2. forEach has 1 line
3. forEach is easier to read. You don't have to bother about the length of the array 
   zie oplossing, makkelijker, minder fouten
4. Ja, is iteratie.
*/

//looping over an object (2x) 1e met tekst, 2e alleen uitkomst
const man = {
    hair: 'black',
    skin: 'brown',
    nationality: 'USA',
    age: 45,
    heigth: '1.80 meter'
};
//1e oplossing met variabelen en waarden
for (const [key, value] of Object.entries(man)) {
    console.log(`${key}: ${value}`);
}
//2e oplossing zonder variabelen, alleen waarden
for (x in man) {
    console.log(man[x]);
}