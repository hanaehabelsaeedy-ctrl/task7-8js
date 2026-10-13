const team = { 
name: "Egypt", 
coach: { name: "Hossam Hassan", nationality: "Egyptian" }, 
stadium: { name: "Cairo Stadium", city: "Cairo", capacity: 75000 }, 
colors: ["red", "white", "black"], 
founded: 1921, 
}; 

const players = [ 
{ id: 1, name: "Salah", number: 10, position: "Forward", age: 34, goals: 20, assists: 10 }, 
{ id: 2, name: "Marmoush", number: 7, position: "Forward", age: 27, goals: 15, assists: 6 }, 
{ id: 3, name: "Trezeguet", number: 11, position: "Winger", age: 31, goals: 9, assists: 8 }, 
{ id: 4, name: "Zizo", number: 25, position: "Midfielder", age: 30, goals: 6, assists: 11 }, 
{ id: 5, name: "Emam Ashour", number: 8, position: "Midfielder", age: 28, goals: 5, assists: 
7 }, 
{ id: 6, name: "El Shenawy", number: 1, position: "Goalkeeper", age: 37, goals: 0, assists: 
0 }, 
]; 

const matches = [ 
{ opponent: "Ghana", score: [2, 0], goals: ["Salah", "Marmoush"] }, 
{ opponent: "Morocco", score: [1, 1], goals: ["Trezeguet"] }, 
{ opponent: "Senegal", score: [3, 2], goals: ["Salah", "Zizo", "Salah"] }, 
]; 

const bench = ["Hamdi Fathy", "Mostafa Fathi", "Akram Tawfik"]; 

const settings = { theme: "light", language: "ar", notifications: true }; 


//1
const{name,founded}=team;
console.log(name,founded);
//2
const {coach:{ name:coachName } }=team;
console.log(coachName);
//3 
const{stadium:{city,capacity}}=team;
console.log(city,capacity);
//4
const[firstColor,secondColor]=team.colors;
console.log(firstColor,secondColor);
//5
const[ , ,thirdcolor]=team.colors;
console.log(thirdcolor);
//6
const{nickname ="The Pharaohs"}=team;
console.log(nickname);
//7
const{name:firstplayer,goals}=players[0];
console.log(firstplayer,goals);
//8
const[first, ... others]=players;
console.log(first,others);
//9
const{opponent,score : [home,away]}=matches[0];
console.log(opponent,home,away);
// 10
for (const match of matches) {
    console.log(
        `Egypt ${match.score[0]} - ${match.score[1]} ${match.opponent}`
    );
}
// 11
for (const player of players) {
    console.log(`#${player.number} ${player.name} — ${player.position}`);
}
// 12
const playerNames = players.map(player => player.name);
console.log(playerNames);
// 13
function printPlayer({ name, age, position }) {
    console.log(name, age, position);
}
for(const player of players)
{
    printPlayer(player);
}
// 14
function describe({ name, position = "Unknown" }) {
    console.log(name, position);
}
describe({ name: "New Player" });
//15
const allplayers = [
    ... players.map(player => player.name),
    ...bench
];
console.log(allplayers);
//16
const  newColors = [
    ... team.colors,"gold"
]
console.log(newColors);
//17
const copysettings = {
    ... settings,
    theme:"dark"
}
console.log(copysettings);
//18
const copyteam = {
    ... team,
    founded : 1920
}
console.log(copyteam);
//19
const newsettings = settings;
console.log(newsettings);
const newteam = team;
console.log(newteam);
//20
const star ={
    ... players[0],
    captain:true
}
console.log(star);
//21
const copyplayer = {
    ... players[1],
    goals : players[1].goals+1
}
console.log(copyplayer);
//22
const { notifications, ...basic } = settings;
console.log(basic);
//23
const { id, ...info} = players[0];
console.log(info);
//24
function sum(...numbers) {
    return numbers.reduce((total,num) => total + num, 0);
}
console.log(sum(...players.map(player => player.goals)));
//25
function maxgoals(...numbers){
    return Math.max(...numbers);
}
console.log(maxgoals(10,20,5,30));
//26
function oldplayers (...ages)
{
    return Math.max(...ages);
}
console.log(oldplayers(...players.map(player => player.age)));
//27
function addplayers (team, ...names) {
    return[...players.map(player => player.name), ...names];
}
console.log(addplayers(team,"Hossam","Ahmed"));
//28
const copy = team;
copy.name = "Ghana"
console.log(team.name);
//29
const copy2 = {
    ...team
}
copy2.stadium.city = "Giza";
console.log(team.stadium.city);
//30
const copy3 = structuredClone(team);
copy3.stadium.city = "Alexandria";
console.log(team.stadium.city);
//31
console.log(players[0] === players[0]);
console.log({} === {});
//32
function increaseage (player){
    return{...player,age:player.age+1};
}
console.log(increaseage(players[0]));
console.log(players[0].age);