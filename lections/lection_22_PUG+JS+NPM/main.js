//

firstName = 'Valera';
secondName = 'Alex';


// foo = [1, 'hello', false, null, undefined, NaN];


team = [ 'Alex', 'Pety', 'Kio', 'Klo'];
console.log(team, 'team');

console.log(team[0], 'first');

length = team.length;

console.log(team[length - 1], 'last');

console.log(team.length, 'length');


// DRY
//  i = 0;
// console.log(team[0])
// console.log(team[1])
// console.log(team[2])
// console.log(team[3])

// console.log(team[i++])
// console.log(team[i++])
// console.log(team[i++])
// console.log(team[i++])


team = [ 'Alex', 'Pety', 'Kio', 'Klo' ];

for(i = 0, size = team.length; i < size; i++) {
    console.log(team[i], 'team[i]');
}

// ----------------------- OBJECT ----------------------------


// player = [ 'Valera', false, 'Ternavskiy', 20];

// age = player[0];

/*
[0, 1, 2]

 player = {
     property: value
 }

 css -> selector {
     color: red
     bgc: blue
     width: 100px
     height: 200px
 }

 js -> box = {
     color: 'red',
     width: 100 + 'px',
     height:  200 + 'px'

 }

*/

foo = [ 'Valera', false, 'Ternavskiy', 20];

player = {
    firstName: 'Valera',
    lastName: 'Ternavskiy',
    isMarried: true,
    age: 26,
    children: []
};

console.log(foo, 'foo ---> array');
console.log(player, 'player ---> object');


console.log(player.isMarried, 'isMarried');

console.log(player.age, 'age');

// 

// players = [];

// players[players.length] = 'aaa';
// players[players.length] = 'bbb';
// console.log(players, 'players');

for(i = 0, players = [], count = 2; i < count; i++) {
    players[players.length] = {
        name: 'valera' || prompt('Inpunt name'),
        age: 22 ||  +prompt('Input age')
    }
}

console.log(players, 'players');

console.log(players[0].age, 'first player age');// {name: "valera", age: 22} 

console.log(players[0].name, 'first player age');// {name: "valera", age: 22} 

console.log(players[0].foo, 'first player foo');// {name: "valera", age: 22} 