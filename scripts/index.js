function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

let diceOne = {
  value: 1,
  roll: function(){
    this.value = getRandomIntInclusive (1,6);
    return this.value;
  }
};

const loadPage = event => {
  if(event) {
  event.preventDefault();
}

  const diceEins = diceOne.roll();

  let changeClass = "img-0"+diceEins;

  let elm = document.getElementById('container-one');

if(elm.className !== changeClass){
    elm.className = changeClass;
}
const diceZwei = diceOne.roll();

let changeClassZwei = "img-0"+diceZwei;

let elmZwei = document.getElementById('container-two');

if(elmZwei.className !== changeClassZwei){
  elmZwei.className = changeClassZwei;
}

}

let button = document.body.querySelector("#rolling-dice");

button.addEventListener("click", loadPage);

loadPage();
