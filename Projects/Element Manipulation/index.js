let list = document.getElementsByTagName('li');
let pick = document.getElementsByClassName("pickme");
let button = document.getElementsByTagName('button')

function Manipulation(){
  for(let v=0; v < list.length; v++){
    list[v].setAttribute('id', '#');
    console.log(list)
  }

  for(let v=0; v < list.length; v++){
    list[v].innerHTML=('list item #' + v)
  }

  for(let v=0; v < list.length; v++){
    console.log(list[v].className)
  }

  pick[0].remove();
}