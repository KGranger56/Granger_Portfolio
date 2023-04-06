let ul = document.getElementsByTagName('ul');
let newItem = document.getElementsByClassName('newItem')[0];

function AddItem(){
  for(let e=0; e<ul.length; e++){
    let item = newItem.value
    let li = document.createElement('li')
    let temp = ul

    if(item.length>3){
      li.appendChild(document.createTextNode(`${item}`))
      return ul[0].appendChild(li);
    }
    else{
      alert('Please enter an item.')
    }
    console.log(e);
  }
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