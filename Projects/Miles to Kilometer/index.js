//let numberOfMiles = document.getElementsByClassName('numberOfMiles')[0];
let kilo = document.getElementsByClassName('kilo')
let numberOfMiles = document.getElementsByClassName('numberOfMiles');

function MileConvertion(){
  let miles = prompt("How many miles?");
  let kilos = miles * 1.60934;
  numberOfMiles[0].innerHTML= `${Number(miles)} miles is`;
  kilo[0].innerHTML= `${kilos} kilometers`
}
