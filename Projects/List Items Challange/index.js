let ul = document.getElementsByTagName('ul');
let li= document.querySelectorAll('li');
let newItem = document.getElementsByClassName('newItem')[0];
let btn = document.getElementsByClassName('btn');

function AddItem(){
  for(let e=0; e<ul.length; e++){
    let item = newItem.value
    let li = document.createElement('li')
    let closeBtn = document.createElement("BUTTON");
    let close = document.createTextNode("X");
    
    
    closeBtn.appendChild(close);
    closeBtn.classList.add("btn");

    closeBtn.addEventListener('click', function (){
      closeBtn.parentNode.removeChild(this);
      li.parentNode.removeChild(li)
    });

    //Strikethrough
    li.addEventListener('click', function (){
      li.classList.toggle('red')
    });

    if(item.length>3){
      li.appendChild(document.createTextNode(`${item}`))
      li.appendChild(closeBtn)

      return ul[0].appendChild(li);
    }
    else{
      alert('Please enter an item.')
    }
  }
}

function remove(li) { 
  li.parentNode.parentNode.removeChild(li.parentNode);
}

function strike(li){
  let temp = li.classList.toggle('red');
}


//change background color
let body = document.getElementsByTagName('body')[0];
let bgColor = 'rgb(' + random(255) + ',' + random(255) + ','+ random(255) + ')';

function Update(){
  body.style.backgroundColor=bgColor;
}

function random(bgColor){
  return Math.floor(Math.random() * (bgColor +1));
}