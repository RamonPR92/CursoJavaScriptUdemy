
let heroes = ['batman', 'superman', 'aquaman'];

console.log('-------------- for normal -------------');

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}


console.log('-------------- for in -------------');
for (let i in heroes) {
    console.log(heroes[i]);
}

console.log('-------------- for of -------------');
for(let heroe of heroes){
    console.log(heroe);
}

console.log('-------------- foreach -------------');
heroes.forEach(element => {
    console.log(element);
});