console.info("start");
var a = true;

function learning() {
  return "I'm learning...";
}
function playGame(game) {
  //console.log(this);
  return `i'm playing ${game}. my name is ${this.name}`;
}

var Alex = {
  age: 33,
  name: "Alex",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};
var Gheo = {
  age: 33,
  name: "Gheo",
  skills: ["html", "css", `js`],
  learn: learning,
  play: playGame,
};
console.log(Alex.skills);
var l = Alex.learn();
console.warn(l);

console.warn(Alex.play("chess"));
console.warn(Gheo.play("soccer"));

console.info(playGame.call(Gheo, "polo"));
console.info(playGame.apply(Alex, ["polo"]));
console.info(playGame("polo"));
